import dbConnect, { collections } from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { auth } from "@/auth";

export const GET = async () => {
  try {
    const session = await auth();
    if (!session || session?.user?.role !== "admin") {
      return NextResponse.json({
        status: 403,
        message: "Forbidden Access: Admins only actions",
      });
    }

    // All Collections
const usersCollection = await dbConnect("users");
const adsCollection = await dbConnect(collections.adsCollection);
const newsCollection = await dbConnect(collections.newsCollection);
const rankingsCollection = await dbConnect(collections.rankingsCollection);
const transfersCollection = await dbConnect(
  collections.transfersCollection
);
const publishersCollection = await dbConnect(
  collections.publishersCollection
);
// Total Counts Of Collections
const adsCount = await adsCollection.countDocuments();
const newsCount = await newsCollection.countDocuments();
const usersCount = await usersCollection.countDocuments();
const rankingsCount = await rankingsCollection.countDocuments();
const transfersCount = await transfersCollection.countDocuments();
const publishersCount = await publishersCollection.countDocuments();

    return NextResponse.json(
      {
        statistics: {
          adsCount,
          newsCount,
          usersCount,
          rankingsCount,
          transfersCount,
          publishersCount,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
