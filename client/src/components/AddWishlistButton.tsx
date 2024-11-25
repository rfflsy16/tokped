"use client";

import { useRouter } from "next/navigation";
import { addWishlist } from "@/app/wishlists/action";

export const AddWishlistButton = ({ productId }: { productId: string }) => {
  const router = useRouter();

  const addToWishlist = async (productId: string) => {
    try {
      await addWishlist(productId);
      router.refresh(); 
    } catch (error) {
      console.error("Gagal menambahkan ke wishlist:", error);
    }
  };

  return (
    <button
      className="btn btn-success text-white font-bold hover:bg-green-600"
      onClick={(e) => {
        e.stopPropagation(); 
        addToWishlist(productId);
      }}
    >
      Tambahkan ke Wishlist
    </button>
  );
};
