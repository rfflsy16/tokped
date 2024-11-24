"use server";

import { User, UserSchemaLogin } from "@/db/models/users";
import { comparePassword } from "@/helpers/bcrypt";
import { signToken } from "@/helpers/jwt";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

// Ensure the function is async
export const handleLogin = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const parse = UserSchemaLogin.safeParse({
    email,
    password,
  });

  if (!parse.success) {
    const errorPath = parse.error.issues[0].path[0];
    const errorMessage = parse.error.issues[0].message;
    const errorFinalMessage = `${errorPath} - ${errorMessage}`;

    return redirect(`/login?error=${errorFinalMessage}`);
  }

  const user = await User.findByEmail(parse.data.email);

  if (!user || !comparePassword(parse.data.password, user.password)) {
    return redirect(`/login?error=Invalid%20credentials`);
  }

  const payload = {
    userId: user._id.toString(),
    username: user.username,
    name: user.name,
    email: user.email,
  };

  const token = signToken(payload);

  cookies().set("token", token, {
    httpOnly: true,
    secure: false,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
    sameSite: "strict",
  });

  return redirect(`/`);
};
