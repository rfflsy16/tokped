// // import User from "@/db/models/users";
// import { NextRequest, NextResponse } from "next/server";

// import { UserSchemaRegister } from "@/db/models/users";

// type MyResponse<T> = {
//   statusCode: number;
//   message: string;
//   data?: T;
//   error?: string;
// };

// export const GET = async (request: NextRequest) => {
//   const getUser = await User.read();

//   console.log(request.headers.get("x-user-id"));
//   console.log(request.headers.get("x-user-email"));

//   return Response.json(
//     {
//       statusCode: 200,
//       message: "From APi /users",
//     },
//     {
//       status: 200,
//     }
//   );
// };

// export const POST = async (request: NextRequest) => {
//   try {
//     const data = await request.json();

//     const parsedData = UserSchemaRegister.safeParse(data);

//     if (!parsedData.success) {
//       throw parsedData.error;
//     }

//     const user = await User.register(parsedData.data);

//     // return NextResponse.json<MyResponse<unknown>>;
//   } catch (error) {}
// };
