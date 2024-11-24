// app/api/products/route.ts
import { NextRequest, NextResponse } from "next/server";
import Product from "@/db/models/product";

export async function GET(request: NextRequest) {
  try {
    const search = request.nextUrl.searchParams.get("search");
    const limit = request.nextUrl.searchParams.get("limit"); // Gunakan .get()
    const products = await Product.read(
      search || undefined,
      limit ? parseInt(limit) : undefined
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
