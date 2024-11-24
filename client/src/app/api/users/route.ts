import { NextRequest, NextResponse } from "next/server";
import { User } from "@/db/models/users";
import { z } from "zod";

type MyResponse<T> = {
  statusCode: number;
  message?: string;
  data?: T;
  error?: string;
};

export const GET = async () => {
  return Response.json(
    {
      statusCode: 200,
      message: "This is from GET /api/users !",
    },
    {
      status: 200,
    }
  );
};

import { UserSchemaRegister } from "@/db/models/users";
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    console.log(data);
    const parse = UserSchemaRegister.safeParse(data);

    if (!parse.success) {
      throw parse.error;
    }

    const newUser = await User.register(parse.data);

    // console.log(newUser);

    return NextResponse.json<MyResponse<unknown>>(
      {
        statusCode: 201,
        message: "This is from POST /api/users !",
        data: newUser,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    // console.error(error);
    if (error instanceof z.ZodError) {
      console.log(error);

      return NextResponse.json<MyResponse<never>>(
        {
          statusCode: 400,
          error: error.issues[0].message,
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json<MyResponse<never>>(
      {
        statusCode: 500,
        message: "Internal Server Error !",
      },
      {
        status: 500,
      }
    );
  }
}
