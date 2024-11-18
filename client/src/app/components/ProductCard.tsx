import Image from "next/image";

export default function ProductCard({ product }: { product: any }) {
  const hasDiscount = product.price > 5000000;

  return (
    <div className="product-card">
      {hasDiscount && <div className="product-badge">Diskon!</div>}
      <Image
        src={product.thumbnail}
        alt={product.name}
        width={150}
        height={150}
        unoptimized
      />
      <h3>{product.name}</h3>
      <p>{product.price.toLocaleString()} IDR</p>
      <button>Tambah ke Wishlist</button>
    </div>
  );
}
