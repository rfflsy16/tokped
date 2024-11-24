import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";
import * as jose from "jose";

const privateKey: string = process.env.JWT_SECRET_KEY || "amanaza";

export interface Payload {
  userId: string;
  name: string;
  username: string;
  email: string;
}

const signToken = (payload: Payload, option?: SignOptions): string => {
  return jwt.sign(payload, privateKey, option);
};

const verifyToken = (token: string): Payload & JwtPayload => {
  return jwt.verify(token, privateKey) as Payload & JwtPayload;
};

const verifyTokenJose = async <T>(token: string) => {
  const secretKey = new TextEncoder().encode(privateKey);
  const payloadJose = await jose.jwtVerify<T>(token, secretKey);

  return payloadJose.payload;
};
export { signToken, verifyToken, verifyTokenJose };
