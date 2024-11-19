// components/Header.tsx
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      <h1>Tokopedia</h1>
      <nav>
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
