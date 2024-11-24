"use client";

import { IProduct } from "@/db/models/product";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }: { product: IProduct }) {
  const router = useRouter();
  const hasDiscount = product.price > 5000000;

  const handleCardClick = () => {
    router.push(`/products/${product.slug}`);
  };

  return (
    <div
      className="flex flex-col w-[250px] bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 overflow-hidden cursor-pointer group"
      onClick={handleCardClick}
    >
      {/* Gambar Produk */}
      <div className="relative w-full h-[180px]">
        {hasDiscount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
            Diskon!
          </span>
        )}
        <Image
          src={product.thumbnail}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          unoptimized
        />
      </div>

      {/* Informasi Produk */}
      <div className="p-3 flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-tight">
          {product.name}
        </h3>
        <p className="text-lg font-bold text-green-600">
          {product.price.toLocaleString()} IDR
        </p>
        <form className="p-3 flex flex-col gap-2 " action="">
          <button
            className="bg-green-500 hover:bg-green-400 text-white text-sm font-medium py-2 rounded-md transition-all duration-200"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            Tambahkan ke wishlist
          </button>
        </form>
      </div>
    </div>
  );
}
