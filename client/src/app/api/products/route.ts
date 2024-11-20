import Product, { IProduct } from "@/db/models/product";

export async function GET(request: Request) {
  try {
    const products: IProduct[] = await Product.read();

    return Response.json(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "Failed to fetch data of Products" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
