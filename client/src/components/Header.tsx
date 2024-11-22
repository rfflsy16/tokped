// components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/?search=${encodeURIComponent(search)}`);
  };

  return (
    <header className="bg-gradient-to-r from-white to-green-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold text-green-600 hover:text-green-500 transition">
            Tokopedia
          </h1>
          <nav className="flex gap-6">
            <Link href="/" passHref>
              <button className="px-4 py-2 text-green-600 font-semibold bg-white rounded-full shadow hover:bg-green-100 transition">
                🏠 Home
              </button>
            </Link>
            <Link href="/products" passHref>
              <button className="px-4 py-2 text-green-600 font-semibold bg-white rounded-full shadow hover:bg-green-100 transition">
                🛒 Produk
              </button>
            </Link>
            <Link href="/wishlist" passHref>
              <button className="px-4 py-2 text-green-600 font-semibold bg-white rounded-full shadow hover:bg-green-100 transition">
                ❤️ Wishlist
              </button>
            </Link>
          </nav>
        </div>
        <form
          className="flex items-center bg-white rounded-full shadow px-4 py-2 gap-2"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            placeholder="Cari di Tokopedia"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-grow outline-none text-gray-700 text-sm px-2 bg-white"
          />
          <button type="submit" className="text-green-600 hover:text-green-500">
            🔍
          </button>
        </form>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-green-600 text-white rounded-full shadow hover:bg-green-500 transition">
            🛒
          </button>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white text-green-600 font-semibold rounded-full shadow hover:bg-green-100 transition">
              Masuk
            </button>
            <button className="px-4 py-2 bg-green-600 text-white font-semibold rounded-full shadow hover:bg-green-500 transition">
              Daftar
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
