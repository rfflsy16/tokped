import { NextResponse } from "next/server";
import { IProduct } from "@/db/models/product";
import Product from "@/db/models/product";

export async function GET(request: Request) {
  try {
    const products: IProduct[] = await Product.read();
    return NextResponse.json(products);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to fetch data of Products" },
      { status: 500 }
    );
  }
}
