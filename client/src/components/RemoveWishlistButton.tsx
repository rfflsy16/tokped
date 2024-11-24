"use client";
import { deleteWishlist } from "@/app/wishlists/action";

import React from "react";

export default function ButtonDeleteWishlist({
  wishlistId,
}: {
  wishlistId: string;
}) {
  async function handleRemoveWishlist() {
    try {
      await deleteWishlist(wishlistId);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <button
        className="bg-white border-2 border-red-500 text-red-500 font-semibold py-1 px-3 text-sm w-fit rounded-md"
        onClick={() => handleRemoveWishlist()}
      >
        Remove from Wishlist
      </button>
    </div>
  );
}
