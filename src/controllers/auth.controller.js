import createHttpError from "http-errors";
import { loginSchema, registerSchema, updateProfileSchema } from "../validations/schema.js";
import { createNewUser, findUseerByEmail, findUserBy, updateUserService, upsertGoogleUser } from "../services/auth.service.js";
import { comparePassword } from "../utils/bcryptUtils.js";
import { createToken } from "../utils/jwt.js";
import { OAuth2Client } from 'google-auth-library';

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export async function authRegisterController(req, res, next) {
  const data = await registerSchema.parseAsync(req.body);
  const foundUser = await findUseerByEmail(data.email);
  if (foundUser) {
    return next(createHttpError[409]("This user already register"));
  }
  const newUser = await createNewUser(data);

  res.json({
    message: "Register Successful",
    user: {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      role: newUser.role,
    },
  });
}

export async function authLoginController(req, res, next) {
  const data = loginSchema.parse(req.body);

  const foundUser = await findUseerByEmail(data.email);
  if (!foundUser) {
    return next(createHttpError[401]("This email does not exist"));
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