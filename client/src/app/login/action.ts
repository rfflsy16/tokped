"user server";

import { User } from "@/db/models/users";
import { comparePassword, hashPassword } from "@/helpers/bcrypt";
import { redirect } from "next/navigation";

import { z } from "zod";
import { cookies } from "next/headers";
import { signToken } from "@/helpers/jwt";

export const handleLogin = async (formData: FormData) => {
  const userSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  const email = formData.get("email");
  const password = formData.get("password");

  const parsedData = userSchema.safeParse({
    email,
    password,
  });

  if (!parsedData.success) {
    const errPath = parsedData.error.issues[0].path[0];
    const errMessage = parsedData.error.issues[0].message;
    const errFInalMessage = `${errPath} - ${errMessage}`;

    return redirect(`http://localhost:3000/login?error=${errFInalMessage}`);
  }

  const user = await User.findByEmail(parsedData.data.email);

  if (!user || !comparePassword(parsedData.data.password, user.password)) {
    return redirect(`http://localhost:3000/login?error=Invalid%20credentials`);
  }

  const payload = {
    id: user._id,
    email: user.email,
  };

  // const access_token = signToken(payload)
};
