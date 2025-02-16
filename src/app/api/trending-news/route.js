import dbConnect, { collections } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const newsCollection = await dbConnect(collections.newsCollection);
  const trending_news = await newsCollection
    .find()
    .sort({ views: -1 })
    .limit(6)
    .toArray();
  return NextResponse.json(trending_news);
};
