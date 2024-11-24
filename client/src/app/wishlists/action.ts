"use server";
import { redirect } from "next/navigation";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

import { IProduct } from "@/db/models/product";

type IWishList<T> = {
  _id: string;
  userId: string;
  productId: string;
  createdAt: string;
  updatedAt: string;
  Product: T;
};

export const wishlistData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/wishlists`, {
      method: "GET",
      headers: {
        Cookie: cookies().toString(),
      },
    });

    const json = await response.json();
    const data: IWishList<IProduct>[] = json.data;
    if (!data) {
      return [];
    }
    return data;
  } catch (error) {
    throw error;
  }
};

export const addWishlist = async (productId: string) => {
  try {
    const res = await fetch(`${BASE_URL}/api/wishlists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
      credentials: "include",
      body: JSON.stringify({
        productId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      return redirect("/login");
    }
    revalidatePath("/wishlists");
    redirect("/wishlists");
  } catch (error) {
    throw error;
  }
};

export const deleteWishlist = async (wishlistId: string) => {
  try {
    await fetch(`${BASE_URL}/api/wishlists`, {
      cache: "no-store",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
      body: JSON.stringify({
        wishlistId,
      }),
    });
    revalidatePath("/wishlists");
    redirect("/wishlists");
  } catch (error) {
    throw error;
  }
};
