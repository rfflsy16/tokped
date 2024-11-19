import { WithId } from "mongodb";
import { db } from "../config";
import { z } from "zod";

import { hashPassword, comparePassword } from "@/helpers/bcrypt";

export interface IUserInput {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface IUserInputLogin {
  email: string;
  password: string;
}

const UserSchemaRegister = z.object({
  name: z.string().min(5),
  username: z.string().min(3),
  email: z.string().min(5).email({ message: "Invalid email address" }),
  password: z.string().min(5),
});

const UserSchemaLogin = z.object({
  email: z.string().min(5).email({ message: "Invalid email address" }),
  password: z.string().min(5),
});

export type Iuser = WithId<IUserInput>;

export default class User {
  static getCollection() {
    return db.collection<IUserInput>("Users");
  }

  static async register(body: IUserInput): Promise<{ message: string }> {
    const collection = this.getCollection();

    UserSchemaRegister.parse(body);

    await collection.insertOne(body);
    return {
      message: "Success Sign Up your Account",
    };
  }

  static async login(body: IUserInputLogin): Promise<{ message: string }> {
    const collection = this.getCollection();

    UserSchemaLogin.parse(body);

    // await collection.insertOne(body);

    return {
      message: "Success logged to your account",
    };
  }
}
