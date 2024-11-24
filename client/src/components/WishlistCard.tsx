"use client";

import { IProduct } from "@/db/models/product";
import Link from "next/link";
import Image from "next/image";
import ButtonDeleteWishlist from "./RemoveWishlistButton";

interface WishlistProps {
  wishlistId: string;
  product: IProduct;
}

export const WishlistCard: React.FC<WishlistProps> = ({
  wishlistId,
  product,
}) => {
  return (
    <div className="flex flex-col h-fit w-[200px] shadow-md gap-2 border-[0.5px] border-slate-200 rounded-md">
      <Link href={`/products/${product.slug}`}>
        <img
          src={product.thumbnail}
          alt={product.name}
          width={200}
          height={200}
          className="rounded-lg"
        />
      </Link>
      <div className="flex flex-col gap-1">
        <Link href={`/products/${product.slug}`}>
          <p className="text-wrap text-sm px-2 h-10">
            {product.name.length > 46
              ? product.name.slice(0, 45) + "..."
              : product.name}
          </p>
        </Link>
        <p className="text-wrap px-2 font-semibold text-md m-0">
          {product.price.toLocaleString()} IDR
        </p>
      </div>
      <div className="flex justify-start pl-2 pt-1 pb-4">
        <ButtonDeleteWishlist wishlistId={wishlistId} />
      </div>
    </div>
  );
};

export default WishlistCard;
