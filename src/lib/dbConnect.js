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
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  return client.db("taza_khobor_DB").collection(collection);
};

export default dbConnect;
