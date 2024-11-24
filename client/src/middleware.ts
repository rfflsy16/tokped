import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyTokenJose } from "./helpers/jwt";

const middleware = async (request: NextRequest) => {
  if (request.url.includes("/wishlist")) {
    const cookieStore = cookies();
    const token = cookieStore.get("token");
    const urlLogin = new URL("/login", request.url);

    if (!token?.value) {
      return NextResponse.redirect(urlLogin);
    }

    let dataOfToken;

    try {
      dataOfToken = await verifyTokenJose<{
        userId: string;
        name: string;
        username: string;
        email: string;
      }>(token.value);
    } catch (error) {
      return NextResponse.redirect(urlLogin);
    }

    const reqHeaders = new Headers(request.headers);
    reqHeaders.set("x-user-id", dataOfToken.userId);
    reqHeaders.set("x-user-email", dataOfToken.email);
    return NextResponse.next({
      headers: reqHeaders,
    });
  }

  return NextResponse.next();
};

export default middleware;
