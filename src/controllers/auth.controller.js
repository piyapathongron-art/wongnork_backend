import createHttpError from "http-errors";
import { loginSchema, registerSchema } from "../validations/schema.js";
import { createNewUser, findUseerByEmail, findUserBy } from "../services/auth.service.js";
import { comparePassword } from "../utils/bcryptUtils.js";
import { createToken } from "../utils/jwt.js";

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
