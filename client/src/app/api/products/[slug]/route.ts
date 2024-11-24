import Product from "@/db/models/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;

    // console.log(slug, "<<<<<<<<<<<<");
    if (!slug) {
      return NextResponse.json(
        { message: `slug is not avaible`, data: null },
        { status: 400 }
      );
    }
    const product = await Product.readBySlug(slug);

    if (!product) {
      return NextResponse.json(
        { message: "Product is not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: `Success read the detail product ${slug}`, data: product },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}
