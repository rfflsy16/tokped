import { cookies } from "next/headers";

export default function getToken() {
  const token = cookies().get("token")?.value || null;
  return token;
}
