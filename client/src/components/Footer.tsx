// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="footer">
      <p className="text-lg font-semibold">
        🔥 Promo Terbatas: Gratis Ongkir ke Seluruh Indonesia 🔥
      </p>
      <p className="text-sm">
        © {new Date().getFullYear()} E-Commerce Tokopedia
      </p>
    </footer>
  );
}
