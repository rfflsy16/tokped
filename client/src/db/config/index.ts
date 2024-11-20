import { Db, MongoClient } from "mongodb";

import "dotenv/config";

const uri: string = process.env.MONGO_URI || "";

console.log(uri, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");

const client: MongoClient = new MongoClient(uri);

const db: Db = client.db("tokopediaDB");

export { db, client };
