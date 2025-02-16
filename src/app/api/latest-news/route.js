import dbConnect, { collections } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const newsCollection = await dbConnect(collections.newsCollection);
  const latest_news = await newsCollection
    .find()
    .sort({ published_date: 1 })
    .limit(6)
    .toArray();
  return NextResponse.json(
    latest_news.map((news) => ({
      _id: news._id,
      title: news.title,
    }))
  );
};
