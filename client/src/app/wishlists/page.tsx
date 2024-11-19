import WishlistCard from "@/components/WishlistCard";

type Wishlist = {
  id: number;
  userId: number;
  productId: number;
  createdAt?: string;
  updatedAt?: string;
};

const fetchData = async () => {
  let products = await fetch("http://localhost:3003/wishlists");
  const responseJson: Wishlist[] = await products.json();

  return responseJson;
};

export default async function WishlistPage() {
  const wishlist = await fetchData();
  return (
    <div className="container">
      <h1>Wishlist Saya</h1>
      <div className="grid">
        {wishlist.map((item) => (
          <WishlistCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
