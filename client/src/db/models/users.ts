import { db } from "../config";
import { ObjectId, WithId } from "mongodb";
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

export const UserSchemaRegister = z.object({
  name: z.string().min(5),
  username: z.string().min(3),
  email: z.string().min(5).email({ message: "Invalid email address" }),
  password: z.string().min(5),
});

export const UserSchemaLogin = z.object({
  email: z.string().min(5).email({ message: "Invalid email address" }),
  password: z.string().min(5),
});

export type Iuser = WithId<IUserInput>;

export class User {
  static getCollection() {
    return db.collection<IUserInput>("Users");
  }

  static async read(): Promise<Iuser[]> {
    const collection = this.getCollection();
    const user: Iuser[] = await collection.find().toArray();
    return user;
  }

  static async readById(id: string) {
    const _id = new ObjectId(id);
    const collection = this.getCollection();
    const userById: Iuser | null = await collection.findOne({ _id });
    return userById;
  }

  static async register(body: IUserInput) {
    const collection = this.getCollection();

    const hashPasswordNewUser: IUserInput = {
      ...body,
      password: hashPassword(body.password),
    };

    await collection.insertOne(hashPasswordNewUser);
    return hashPasswordNewUser;
  }

  static async findByEmail(email: string) {
    const collection = this.getCollection();
    const userFindByEmail = await collection.findOne({ email });
    if (!userFindByEmail) throw new Error("User is not found");
    return userFindByEmail;
  }
}
