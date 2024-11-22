"use client";

import { IProduct } from "@/db/models/product";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }: { product: IProduct }) {
  const router = useRouter(); // Pakai router untuk navigasi
  const hasDiscount = product.price > 5000000;

  const handleCardClick = () => {
    router.push(`/products/${product.slug}`); // Redirect ke halaman detail
  };

  return (
    <div
      className="product-card bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer"
      onClick={handleCardClick} // Tambahin event click
    >
      {hasDiscount && (
        <div className="product-badge bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full absolute top-3 left-3">
          Diskon!
        </div>
      )}
      <Image
        src={product.thumbnail}
        alt={product.name}
        width={150}
        height={150}
        className="rounded-lg"
        unoptimized
      />
      <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
      <p className="text-green-600 font-bold text-sm mt-2">
        {product.price.toLocaleString()} IDR
      </p>
      <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-full">
        Tambahkan ke wishlist
      </button>
    </div>
  );
}
