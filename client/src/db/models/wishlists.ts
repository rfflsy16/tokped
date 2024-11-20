import { ObjectId, WithId } from "mongodb";
import { db } from "../config";
import { z } from "zod";

export interface IWishlistInput {
  userId: ObjectId;
  productId: ObjectId;
  createdAt: string;
  updatedAt: string;
}

export type IWishlist = WithId<IWishlistInput>;

const WishlistSchema = z.object({
  userId: z.string().min(3),
  productId: z.string().min(3),
  createdAt: z.string().min(3).datetime(),
  updatedAT: z.string().datetime(),
});

export default class Wishlist {
  static getCollection() {
    return db.collection<IWishlistInput>("Wishlists");
  }

  static async read(): Promise<IWishlist[]> {
    const collection = this.getCollection();

    const wishlist: IWishlist[] = await collection.find().toArray();

    return wishlist;
  }

  static async readById(id: string): Promise<IWishlist | null> {
    const _id = new ObjectId(id);
    const collection = this.getCollection();

    const wishlist: IWishlist | null = await collection.findOne({ _id });

    return wishlist;
  }

  static async create(body: IWishlistInput): Promise<{ message: string }> {
    const collection = this.getCollection();

    WishlistSchema.parse(body);

    await collection.insertOne(body);

    return {
      message: "Success added Wishlist",
    };
  }

  static async delete(id: string) {}
}
