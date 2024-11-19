import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";
import "dotenv/config";

const secretKey: string = process.env.JWT_SECRET_KEY || "";

export interface Payload {
  userId: string;
  name: string;
  username: string;
  email: string;
}

const signToken = (payload: Payload, option?: SignOptions): string => {
  return jwt.sign(payload, secretKey, option);
};

const verifyToken = (token: string): Payload & JwtPayload => {
  return jwt.verify(token, secretKey) as Payload & JwtPayload;
};

export { signToken, verifyToken };
