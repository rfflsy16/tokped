import { ObjectId, WithId } from "mongodb";
import { db } from "../config";
import { z } from "zod";

export interface IProductInput {
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string;
  thumbnail: string;
  images: string;
  createdAt: string;
  updatedAt: string;
}

const ProductSchema = z.object({
  name: z.string().min(3),
  slug: z.string().min(3),
  excerpt: z.string().min(3),
  price: z.number().min(1000).max(1000000),
  tags: z.string().min(3),
  thumbnail: z.string().min(3),
  images: z.string().min(3),
  createdAt: z.string().min(3),
  updatedAt: z.string().min(3),
});

export type IProduct = WithId<IProductInput>;

export default class Product {
  static getCollection() {
    return db.collection<IProductInput>("Products");
  }

  static async read(searchQuery?: string): Promise<IProduct[]> {
    const collection = this.getCollection();

    const filter = searchQuery
      ? { name: { $regex: searchQuery, $options: "i" } } // Pencarian dengan regex case-insensitive
      : {};

    const products: IProduct[] = await collection.find(filter).toArray();
    return products;
  }

  static async readById(id: string): Promise<IProduct | null> {
    const _id = new ObjectId(id);
    const collection = this.getCollection();

    const products: IProduct | null = await collection.findOne({ _id });

    return products;
  }

  static async create(body: IProductInput): Promise<{ message: string }> {
    const collection = this.getCollection();

    ProductSchema.parse(body);

    await collection.insertOne(body);

    return {
      message: "Success added Product",
    };
  }

  static async search(query: string): Promise<IProduct[]> {
    const collection = this.getCollection();
    const regex = new RegExp(query, "i");
    const products = await collection.find({ name: regex }).toArray();
    return products;
  }
}
