// components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <h1 className="text-xl font-bold hover:text-white transition-all">
        Tokopedia
      </h1>
      <nav className="flex gap-4">
        <Link href="/" passHref>
          <button className="nav-button">🏠 Home</button>
        </Link>
        <Link href="/products" passHref>
          <button className="nav-button">🛒 Produk</button>
        </Link>
        <Link href="/wishlist" passHref>
          <button className="nav-button">❤️ Wishlist</button>
        </Link>
      </nav>
    </header>
  );
}
