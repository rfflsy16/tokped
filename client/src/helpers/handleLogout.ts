"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function handleLogout() {
  const cookieStore = cookies();
  cookieStore.delete("token");
  redirect("/login");
}
