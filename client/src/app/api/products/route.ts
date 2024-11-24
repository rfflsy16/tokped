import { NextRequest, NextResponse } from "next/server";
import Product from "@/db/models/product";

export async function GET(request: NextRequest) {
  try {
    const search = request.nextUrl.searchParams.get("search");
    const limit = request.nextUrl.searchParams.get("limit");
    const page = request.nextUrl.searchParams.get("page");

    const limitNumber = limit ? parseInt(limit) : 10;
    const pageNumber = page ? parseInt(page) : 1;

    const products = await Product.read(
      search || undefined,
      limitNumber,
      pageNumber
    );

    return NextResponse.json(products);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to fetch data of Products" },
      { status: 500 }
    );
  }
}
