"use server";
import dbConnect, { collections } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const rankingsCollection = await dbConnect(collections.rankingsCollection);
    const { searchParams } = new URL(req.url);

    // Extract query parameters
    const search = searchParams.get("search") || "";
    const publisher = searchParams.get("publisher") || null;
    const sortBy = searchParams.get("sortBy") || "published_date";
    const sortOrder = searchParams.get("sortOrder") === "asc" ? 1 : -1;
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);

    const filter = {};

    if (search) filter.title = { $regex: search, $options: "i" };
    if (publisher) filter.publisher = publisher;

    const totalRankings = await rankingsCollection.countDocuments(filter);

    const rankingsData = await rankingsCollection
      .find(filter)
      .sort({ [sortBy]: sortOrder })
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray();

    return NextResponse.json({
      page,
      totalRankings,
      totalPages: Math.ceil(totalRankings / limit),
      rankings: rankingsData,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
