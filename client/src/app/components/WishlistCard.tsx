export default function WishlistCard({ item }: { item: any }) {
  return (
    <div className="wishlist-card">
      <h3>{item.name}</h3>
      <p>{item.price} IDR</p>
      <button>Hapus dari Wishlist</button>
    </div>
  );
}
