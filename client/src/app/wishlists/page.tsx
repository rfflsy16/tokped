import { wishlistData } from "./action";
import WishlistCard from "@/components/WishlistCard";

export default async function WishlistPage() {
  const wishlist = await wishlistData();

  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-center text-3xl font-bold mt-8">Your Wishlists</h1>
        <section className="flex flex-wrap gap-10 justify-start">
          {wishlist &&
            wishlist.map((wishlist) => (
              <WishlistCard
                key={wishlist._id}
                wishlistId={wishlist._id.toString()}
                product={wishlist.Product}
              />
            ))}
        </section>
      </div>
    </>
  );
}
