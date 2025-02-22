"use server";
import dbConnect, { collections } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const newsCollection = await dbConnect(collections.newsCollection);
  const result = await newsCollection
    .find({ category: { $ne: "features" } })
    .sort({ published_date: -1 })
    .toArray();
  return NextResponse.json(result);
};
