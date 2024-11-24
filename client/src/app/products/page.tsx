// app/products/page.tsx

"use client";
import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/db/models/product";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from "next/navigation";

const fetchData = async (
  search?: string,
  page: number = 1,
  limit: number = 10
): Promise<IProduct[]> => {
  const url = search
    ? `/api/products?search=${encodeURIComponent(
        search
      )}&page=${page}&limit=${limit}`
    : `/api/products?page=${page}&limit=${limit}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};

export default function ProductsPage({
  searchParams,
}: {
  searchParams?: { search?: string };
}) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchQuery = searchParams?.search || "";

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await fetchData(searchQuery, page);
      setProducts((prev) => [...prev, ...data]);
      setHasMore(data.length > 0);
      setLoading(false);
    };

    loadData();
  }, [page, searchQuery]);

  const fetchMoreData = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="container mx-auto px-4">
      <Banner />
      <h1 className="text-center text-3xl font-bold mt-8">
        Explore Our Products
      </h1>
      <InfiniteScroll
        dataLength={products.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<p className="text-center">Loading...</p>}
        endMessage={<p className="text-center">No more products</p>}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {products.map((product) => (
            <ProductCard key={product._id.toString()} product={product} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
