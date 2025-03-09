"use server";
import dbConnect, { collections } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const transfersCollection = await dbConnect(
      collections.transfersCollection
    );
    const { searchParams } = new URL(req.url);

    // Extract query parameters
    const search = searchParams.get("search") || "";
    const source = searchParams.get("source") || null;
    const sortBy = searchParams.get("sortBy") || "published_date";
    const sortOrder = searchParams.get("sortOrder") === "asc" ? 1 : -1;
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);

    const filter = {};

    if (search) filter.title = { $regex: search, $options: "i" };
    if (source) filter.source = source;

    const totalTransfers = await transfersCollection.countDocuments(filter);

    const transfersData = await transfersCollection
      .find(filter)
      .sort({ [sortBy]: sortOrder })
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray();

    return NextResponse.json({
      page,
      totalTransfers,
      totalPages: Math.ceil(totalTransfers / limit),
      transfers: transfersData,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
