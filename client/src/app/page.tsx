import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/db/models/product";

const fetchData = async () => {
  const products = await fetch("http://localhost:3000/api/products");
  const responseJson: IProduct[] = await products.json();
  return responseJson;
};

export default async function Home() {
  const products = await fetchData();

  return (
    <div className="container mx-auto px-4">
      <Banner />
      <h1 className="text-center text-3xl font-bold mt-8">
        Welcome to Tokopedia
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {products.map((product) => (
          <ProductCard key={product._id.toString()} product={product} />
        ))}
      </div>
    </div>
  );
}
