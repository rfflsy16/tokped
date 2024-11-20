import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/db/models/product";

const fetchData = async () => {
  const products = await fetch("http://localhost:3000/products");
  const responseJson: IProduct[] = await products.json();
  return responseJson;
};

export default async function Home() {
  const products = await fetchData();

  return (
    <div className="container">
      <h1 className="text-center text-3xl font-bold mt-8">
        Welcome to Tokopedia
      </h1>
      <div className="grid mt-10 gap-8">
        {products.map((product) => (
          <ProductCard key={product._id.toString()} product={product} />
        ))}
      </div>
    </div>
  );
}
