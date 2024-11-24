// app/page.tsx
import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/db/models/product";
import Link from "next/link";

const fetchData = async (search?: string): Promise<IProduct[]> => {
  const url = search
    ? `http://localhost:3000/api/products?search=${encodeURIComponent(search)}`
    : `http://localhost:3000/api/products?limit=8`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};

export default async function Home({
  searchParams,
}: {
  searchParams?: { search?: string };
}) {
  const products = await fetchData(searchParams?.search);

  return (
    <div className="container mx-auto px-4">
      <Banner />
      <h1 className="text-center text-3xl font-bold mt-8">
        Welcome to Tokopedia
      </h1>
      <div className="text-end mt-6">
        <Link
          href="/products"
          className=" bg-gray-300 hover:bg-green-400 text-white font-semibold py-2 px-4 transition-all"
        >
          Lihat Semua Produk
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {products.map((product) => (
          <ProductCard key={product._id.toString()} product={product} />
        ))}
      </div>
    </div>
  );
}
