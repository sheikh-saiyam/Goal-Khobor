"use server";
import dbConnect, { collections } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const newsCollection = await dbConnect(collections.newsCollection);
  const features_news = await newsCollection
    .find({ category: "features" })
    .limit(6)
    .toArray();
  return NextResponse.json(features_news);
};
