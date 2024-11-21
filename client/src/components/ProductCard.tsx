import { IProduct } from "@/db/models/product";
import Image from "next/image";

export default function ProductCard({ product }: { product: IProduct }) {
  const hasDiscount = product.price > 5000000;

  return (
    <div className="product-card bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-2xl">
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
      <button className="mt-4 w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:from-green-600 hover:to-green-700">
        Tambah ke Wishlist
      </button>
    </div>
  );
}
