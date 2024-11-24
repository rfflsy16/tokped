"use server";
import { NextRequest, NextResponse } from "next/server";
import Wishlist, {
  IWishlistInput,
  WishlistSchema,
} from "@/db/models/wishlists";
import { UserInputWishlistSchema } from "@/db/models/wishlists";
import { ObjectId } from "mongodb";

type Response<T> = {
  statusCode: number;
  message?: string;
  data?: T;
  error?: string;
};

export async function GET(request: NextRequest) {
  const userId = request.headers.get("x-user-id");
  try {
    const parse = UserInputWishlistSchema.safeParse({ userId });
    if (!parse.success) {
      return NextResponse.json<Response<null>>(
        {
          statusCode: 400,
          message: "Invalid UserID",
          data: null,
          error: "UserID is required",
        },
        { status: 400 }
      );
    }

    const findWishlistByUserId = await Wishlist.readById(parse.data.userId);

    if (!findWishlistByUserId || findWishlistByUserId === undefined) {
      return NextResponse.json<Response<null>>(
        {
          statusCode: 404,
          message: "Wishlist is not found",
          data: null,
          error: "Wishlist is not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json<Response<typeof findWishlistByUserId>>(
      {
        statusCode: 200,
        data: findWishlistByUserId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error, "<<<<<<<<<<< from API GET /Wishlists");
    return NextResponse.json<Response<null>>(
      {
        statusCode: 500,
        message: "Internal Server Error",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const userId = request.headers.get("x-user-id");
    const { productId } = await request.json();

    if (!userId || !productId) {
      return NextResponse.json<Response<null>>(
        {
          statusCode: 400,
          message: "ProductId and UserID is required",
          data: null,
          error: "ProductId and UserID is required",
        },
        { status: 400 }
      );
    }

    const parse = UserInputWishlistSchema.safeParse({ userId });
    if (!parse.success) {
      return NextResponse.json<Response<null>>(
        {
          statusCode: 400,
          message: "Invalid UserID",
          data: null,
          error: "Invalid UserID",
        },
        { status: 400 }
      );
    }

    const result = await Wishlist.create({
      userId: new ObjectId(userId),
      productId: new ObjectId(productId),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return NextResponse.json<Response<typeof result>>(
      { statusCode: 201, data: result },
      { status: 201 }
    );
  } catch (error) {
    console.error(error, "<<<<<<<<<< from API POST /Wishlists");
    return NextResponse.json<Response<null>>(
      {
        statusCode: 500,
        message: "Internal server Error",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const userId = request.headers.get("x-user-id");
    const { wishlistId } = await request.json();

    if (!wishlistId || !userId) {
      return NextResponse.json<Response<null>>(
        {
          statusCode: 400,
          message: "WishlistID and UserID is required",
          data: null,
          error: "WishlistID and UserID is required",
        },
        { status: 400 }
      );
    }

    const parse = UserInputWishlistSchema.safeParse({ userId });
    if (!parse.success) {
      return NextResponse.json<Response<null>>(
        {
          statusCode: 400,
          message: "Invalid user ID",
          data: null,
          error: "User ID is not valid",
        },
        { status: 400 }
      );
    }

    const result = await Wishlist.delete({
      _id: new ObjectId(wishlistId),
    });

    if (!result.deletedCount) {
      return NextResponse.json<Response<null>>(
        {
          statusCode: 404,
          message: "Item is not found",
          data: null,
          error: "Item is not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json<Response<typeof result>>(
      {
        statusCode: 200,
        data: result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error, "<<<<<<<<<<<<<<<< FROM API DEL /wishlists");
    return NextResponse.json<Response<null>>(
      {
        statusCode: 500,
        message: "Internal Server Error",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
