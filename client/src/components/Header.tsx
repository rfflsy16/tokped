"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { token } from "@/app/login/action";
import { handleLogout } from "@/helpers/handleLogout";

export default function Header() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === "/login") {
    return null;
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/?search=${encodeURIComponent(search)}`);
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      {/* Top Section */}
      <div className="bg-gray-100 text-sm text-gray-600 py-2 px-6 flex justify-between items-center">
        <div>Download Tokopedia App</div>
        <div className="flex gap-4">
          <Link href="">Tentang Tokopedia</Link>
          <Link href="">Mitra Tokopedia</Link>
          <Link href="">Mulai Berjualan</Link>
          <Link href="/products">Promo</Link>
          <Link href="">Tokopedia Care</Link>
        </div>
      </div>
      <div className="container mx-auto px-6 py-4 flex items-center gap-8">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/icon.svg" alt="Logo" width={150} height={60} />
          </Link>
        </div>
        <div className="relative">
          <a
            href="/wishlist"
            className="px-4 py-2 text-gray-700 bg-gray border rounded-full shadow-sm flex items-center"
          >
            Wishlist
          </a>
          <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-lg w-48">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-100">Elektronik</li>
              <li className="px-4 py-2 hover:bg-gray-100">Pakaian</li>
              <li className="px-4 py-2 hover:bg-gray-100">Olahraga</li>
            </ul>
          </div>
        </div>
        <form
          className="flex items-center flex-grow bg-gray-100 rounded-full shadow px-4 py-2 gap-2"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            placeholder="Cari di Tokopedia"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-grow outline-none bg-transparent text-gray-700 text-sm px-2"
          />
          <button type="submit" className="text-green-600 hover:text-green-500">
            🔍
          </button>
        </form>
        <div className="flex items-center gap-4">
          <Link href="/cart">
            <button className="text-gray-700 hover:text-green-600">🛒</button>
          </Link>
          {!token ? (
            <>
              <Link href="/login">
                <button className="px-4 py-2 bg-white text-green-600 font-semibold rounded-full shadow hover:bg-green-100 transition">
                  Masuk
                </button>
              </Link>
              <button className="px-4 py-2 bg-green-600 text-white font-semibold rounded-full shadow hover:bg-green-500 transition">
                Daftar
              </button>
            </>
          ) : (
            <>
              <form action={handleLogout} method="post">
                <button
                  className="px-3 py-1 text-sm font-semibold text-white bg-red-600 rounded-md hover:bg-red-700"
                  type="submit"
                >
                  Keluar
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
