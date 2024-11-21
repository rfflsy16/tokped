import ProductCard from "@/components/ProductCard";

type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
};

const fetchData = async () => {
  const products = await fetch("http://localhost:3000/api/products");
  const responseJson: Product[] = await products.json();
  return responseJson;
};

export default async function ProductsPage() {
  const products = await fetchData();

  return (
    <div className="container">
      <h1>Daftar Produk</h1>
      <div className="grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
