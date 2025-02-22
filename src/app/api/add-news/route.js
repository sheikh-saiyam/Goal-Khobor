"use server";
import dbConnect, { collections } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const news = await req.json();
  const newsCollection = await dbConnect(collections.newsCollection);
  const result = await newsCollection.insertOne(news);
  return NextResponse.json(result);
};
