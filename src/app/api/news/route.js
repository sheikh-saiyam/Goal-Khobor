"use server";
import dbConnect, { collections } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const newsCollection = await dbConnect(collections.newsCollection);
    const { searchParams } = new URL(req.url);

    // Extract query parameters
    const search = searchParams.get("search") || ""; // Search only by title
    const category = searchParams.get("category") || null; // Filter by category
    const publisher = searchParams.get("publisher") || null; // Filter by publisher
    const sortBy = searchParams.get("sortBy") || "published_date"; // Default sorting field
    const sortOrder = searchParams.get("sortOrder") === "asc" ? 1 : -1; // Sort order (asc/desc)
    const page = parseInt(searchParams.get("page") || "1", 10); // Pagination page number
    const limit = parseInt(searchParams.get("limit") || "10", 10); // Limit per page

    const filter = {};

    if (search) {
      filter.title = { $regex: search, $options: "i" };
    }
    if (category) filter.category = category;
    if (publisher) filter.publisher = publisher;

    const totalNews = await newsCollection.countDocuments(filter);

    const newsData = await newsCollection
      .find(filter)
      .sort({ [sortBy]: sortOrder })
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray();

    return NextResponse.json({
      page,
      totalNews,
      totalPages: Math.ceil(totalNews / limit),
      news: newsData,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
};
