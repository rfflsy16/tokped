import { ObjectId, WithId } from "mongodb";
import { db } from "../config";
import { z } from "zod";

export interface IProductInput {
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
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

  static async read(
    searchQuery?: string,
    limit?: number,
    page?: number
  ): Promise<IProduct[]> {
    const collection = this.getCollection();

    const filter = searchQuery
      ? { name: { $regex: searchQuery, $options: "i" } }
      : {};

    const skip = page && page > 1 ? (page - 1) * (limit || 10) : 0; // Menghitung skip untuk pagination

    const products: IProduct[] = await collection
      .find(filter)
      .skip(skip) 
      .limit(limit || 10)
      .toArray();

    return products;
  }

  static async readBySlug(slug: string): Promise<IProduct | null> {
    const collection = this.getCollection();

    const product: IProduct | null = await collection.findOne({ slug: slug });

    return product;
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
