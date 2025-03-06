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

    // Aggregate to count articles per publisher
    const publisher_counts = await newsCollection
      .aggregate([
        {
          $group: {
            _id: "$publisher",
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            name: "$_id",
            count: 1,
            _id: 0,
          },
        },
      ])
      .toArray();

    // Aggregate to count posts by date using string substring
    const date_counts = await newsCollection
      .aggregate([
        // Filter for valid strings
        {
          $match: {
            published_date: {
              $exists: true,
              $ne: null,
              $type: "string", // Ensure it’s a string
            },
          },
        },
        // Group by the first 10 characters of published_date (YYYY-MM-DD)
        {
          $group: {
            _id: { $substr: ["$published_date", 0, 10] }, // Extract YYYY-MM-DD
            count: { $sum: 1 },
          },
        },
        // Project and rename
        {
          $project: {
            date: "$_id",
            count: 1,
            _id: 0,
          },
        },
        // Sort by date
        {
          $sort: { date: 1 },
        },
      ])
      .toArray();

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
        publisher_counts,
        date_counts,
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
