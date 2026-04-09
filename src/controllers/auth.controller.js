import createHttpError from "http-errors";
import { registerSchema } from "../validations/schema.js";
import { createNewUser, findUseerByEmail } from "../services/auth.service.js";

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

export function authLoginController(req, res) {
  res.json({
    msg: "login path",
    body: req.body,
  });
}

export function authGetmeController(req, res) {
  res.json("get me path");
}
