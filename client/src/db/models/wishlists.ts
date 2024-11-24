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

export const WishlistSchema = z.object({
  userId: z.string().min(3),
  productId: z.string().min(3),
  createdAt: z.string().min(3).datetime(),
  updatedAT: z.string().datetime(),
});

export const UserInputWishlistSchema = z.object({
  userId: z.string(),
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

  static async readById(id: string): Promise<IWishlist[]> {
    const _id = new ObjectId(id);
    const collection = this.getCollection();

    const stages = [
      {
        $match: {
          userId: _id,
        },
      },
      {
        $lookup: {
          from: "Products",
          localField: "productId",
          foreignField: "_id",
          as: "Product",
        },
      },
      {
        $unwind: "$Product",
      },
    ];

    const wishlist = (await collection
      .aggregate(stages)
      .toArray()) as IWishlist[];

    // console.log(wishlist, "<<<<<<<<<");

    return wishlist;
  }

  static async create(body: IWishlistInput) {
    const collection = this.getCollection();

    const resultOfWishlist = await collection.insertOne(body);

    return resultOfWishlist;
  }

  static async delete(id: string): Promise<{ message: string }> {
    const collection = this.getCollection();
    const _id = new ObjectId(id);

    await collection.deleteOne(_id);

    return {
      message: "Success delete your wishlists",
    };
  }
}
