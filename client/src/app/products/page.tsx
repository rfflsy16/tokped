import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/db/models/product";

const fetchData = async (search?: string): Promise<IProduct[]> => {
  const url = search
    ? `http://localhost:3000/api/products?search=${encodeURIComponent(search)}`
    : `http://localhost:3000/api/products`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: { search?: string };
}) {
  const products = await fetchData(searchParams?.search);

  return (
    <div className="container mx-auto px-4">
      <Banner />
      <h1 className="text-center text-3xl font-bold mt-8">
        Explore Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {products.map((product) => (
          <ProductCard key={product._id.toString()} product={product} />
        ))}
      </div>
    </div>
  );
}
