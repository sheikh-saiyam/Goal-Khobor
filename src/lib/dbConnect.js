import { MongoClient, ServerApiVersion } from "mongodb";

// All Collections --->
export const collections = {
  adsCollection: "ads",
  newsCollection: "news",
  rankingsCollection: "rankings",
  transfersCollection: "transfers",
  publishersCollection: "publishers",
};

const dbConnect = async (collection) => {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  return client.db("goal_khobor_DB").collection(collection);
};

export default dbConnect;
