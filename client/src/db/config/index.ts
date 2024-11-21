import { Db, MongoClient } from "mongodb";

import "dotenv/config";

const uri: string =
  process.env.MONGO_URI ||
  "mongodb+srv://rfflsy16:mamangGacor16@raffles.9c2dw.mongodb.net/";

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable in .env");
}

console.log(process.env.MONGO_URI);

// console.log(uri, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");

const client: MongoClient = new MongoClient(uri);
const db: Db = client.db("tokopediaDB");

export { db, client };
