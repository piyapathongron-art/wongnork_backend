import createHttpError from "http-errors";
import { loginSchema, registerSchema, updateProfileSchema } from "../validations/schema.js";
import { createNewUser, findUseerByEmail, findUserBy, updateUserService, upsertGoogleUser, verifyUpdateUserService } from "../services/auth.service.js";
import { comparePassword, hashPassword } from "../utils/bcryptUtils.js";
import { createToken, verifyToken } from "../utils/jwt.js";
import jwt from "jsonwebtoken";
import { OAuth2Client } from 'google-auth-library';
import "dotenv/config"

import { sendResetPasswordEmail, sendVerificationEmail } from "../utils/email.js";


const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export async function authRegisterController(req, res, next) {
  try {
    console.log("=== [DEBUG] authRegisterController STARTED ===");
    console.log("=== [DEBUG] Request body email:", req.body?.email, "===");
    const data = await registerSchema.parseAsync(req.body);
    console.log("=== [DEBUG] Schema parsed successfully ===");
    const foundUser = await findUseerByEmail(data.email);
    if (foundUser) {
      return next(createHttpError[409]("This user already register"));
    }
    const newUser = await createNewUser(data);
    console.log("=== [DEBUG] User created in DB successfully! User ID:", newUser.id, "===");

    const verifyEmailToken = jwt.sign(
      { userId: newUser.id },
      process.env.JWT_SECRET,
      {
        algorithm: 'HS256',
        expiresIn: '15m',
      }
    )
    const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8899"
    const verifyLink = `${BACKEND_URL}/api/auth/verify-email?token=${verifyEmailToken}`;

    console.log("=== [DEBUG] Calling sendVerificationEmail... ===");
    await sendVerificationEmail(newUser.email, verifyLink)
    console.log("=== [DEBUG] sendVerificationEmail completed! ===");

    res.json({
      message: "Register Successful , Please check your email to verify account.",
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        role: newUser.role,
      },
    });
  } catch (error) {
    next(error);
  }
}

export async function authVerifyEmailConroller(req, res, next) {
  try {
    const { token } = req.query
    if (!token) {
      return next(createHttpError(400, "Token required"))
    }
    const decoded = verifyToken(token)
    await verifyUpdateUserService(decoded.userId)
    return res.redirect(`${process.env.FRONTEND_URL}/login?verified=true`);

  }

  catch (err) {
    next(createHttpError(400, 'Invalid or Expired link'))
  }
}

export async function authForgotPasswordController(req, res, next) {
  try {
    const { email } = req.body;
    const user = await findUseerByEmail(email)
    if (!user) {
      return next(createHttpError(404, "ไม่พบ Email นี้ในระบบ"))
    }
    const secret = process.env.JWT_SECRET + user.password
    const token = jwt.sign({ email: user.email, id: user.id }, secret, {
      expiresIn: "15m",
    })
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${user.id}/${token}`

    await sendResetPasswordEmail(user.email, resetUrl)
    res.json({
      message: "ส่งลิงก์เปลี่ยนรหัสผ่านไปที่อีเมลแล้ว กรุณาตรวจสอบกล่องจดหมาย"
    })
  }
  catch (error) {
    next(error)
  }
}

export async function authResetPasswordController(req, res, next) {
  try {
    const { id, token } = req.params;
    const { newPassword } = req.body;


    const user = await findUserBy("id", id);
    if (!user) {
      return next(createHttpError(404, "ไม่พบผู้ใช้งาน"));
    }

    const secret = process.env.JWT_SECRET + user.password;

    try {
      jwt.verify(token, secret);
    } catch (err) {
      return next(createHttpError(400, "ลิงก์นี้หมดอายุหรือถูกใช้งานไปแล้ว"));
    }


    const hashedPassword = await hashPassword(newPassword);

    // อัปเดตรหัสผ่านใหม่ลง DB (ใช้ Service เดิมที่คุณมีอยู่ได้เลย)
    await updateUserService(user.id, { password: hashedPassword });

    res.json({ message: "เปลี่ยนรหัสผ่านสำเร็จ! คุณสามารถเข้าสู่ระบบด้วยรหัสผ่านใหม่ได้ทันที" });
  } catch (error) {
    next(error);
  }
}

export async function authLoginController(req, res, next) {
  const data = loginSchema.parse(req.body);

  const foundUser = await findUseerByEmail(data.email);
  if (!foundUser) {
    return next(createHttpError[401]("This email does not exist"));
  }
  if (!foundUser.isVerified) {
    return next(createHttpError(403, "Please verify your email before logging in. Check your inbox."));
  }

  let checkedPassword = await comparePassword(
    data.password,
    foundUser.password,
  );
  if (!checkedPassword) {
    return next(createHttpError[401]("Password Wrong"));
  }
  const payload = {
    id: foundUser.id,
    email: foundUser.email,
    name: foundUser.name,
    avatarUrl: foundUser.avatarUrl,
    role: foundUser.role,
    provider: foundUser.provider,
    googleId: foundUser.googleId,
  };
  const token = createToken(payload);

  res.json({
    message: "login success",
    user: {
      id: foundUser.id,
      email: foundUser.email,
      name: foundUser.name,
    },
    token,
  });
}

export async function authGetPublicProfileController(req, res, next) {
  try {
    const { id } = req.params;
    const user = await findUserBy('id', id);
    if (!user) {
      throw createHttpError(404, "User not found");
    }
    res.json({
      data: user,
    });
  } catch (error) {
    next(error);
  }
}

export async function authGetmeController(req, res) {
  const id = req.user.id
  const user = await findUserBy('id', id)
  res.json({
    data: user,
  });
}

export async function authUpdateProfileController(req, res, next) {
  try {
    const id = req.user.id;
    const data = await updateProfileSchema.parseAsync(req.body);

    // ตรวจสอบว่าไม่มีข้อมูลอะไรส่งมาเลยหรือไม่
    if (Object.keys(data).length === 0) {
      throw createHttpError(400, "No data provided to update");
    }

    const updatedUser = await updateUserService(id, data);
    res.json({
      message: "Profile updated successfully",
      user: {
        id: updatedUser.id,
        email: updatedUser.email,
        name: updatedUser.name,
        avatarUrl: updatedUser.avatarUrl,
        role: updatedUser.role,
      },
    });
  } catch (error) {
    next(error);
  }
}

export async function authGoogleLoginController(req, res, next) {
  try {
    const { token } = req.body;

    if (!token) {
      return next(createHttpError(400, "Google token is required"));
    }

    const ticket = await googleClient.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { sub: googleId, email, name, picture: avatarUrl } = payload;

    const user = await upsertGoogleUser(email, name, googleId, avatarUrl);

    const jwtPayload = {
      id: user.id,
      email: user.email,
      name: user.name,
      avatarUrl: user.avatarUrl,
      role: user.role,
      provider: user.provider,
      googleId: user.googleId,
    };

    const appToken = createToken(jwtPayload);

    res.json({
      message: "Google login successful",
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        avatarUrl: user.avatarUrl,
      },
      token: appToken,
    });
  } catch (error) {
    console.error("Google verify error:", error);
    next(createHttpError(401, "Invalid Google Token"));
  }
}