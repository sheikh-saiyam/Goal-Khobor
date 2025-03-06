import { MongoClient } from "mongodb";

// MongoDB Connection Setup (Reuse Client)
const uri = process.env.MONGODB_URI;
const options = {
  tls: true,
  serverSelectionTimeoutMS: 3000,
};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

// All Collections --->
export const collections = {
  adsCollection: "ads",
  newsCollection: "news",
  rankingsCollection: "rankings",
  transfersCollection: "transfers",
  publishersCollection: "publishers",
};

const dbConnect = async (collection) => {
  const client = await clientPromise;
  return client.db("goal_khobor_DB").collection(collection);
};

export default dbConnect;
