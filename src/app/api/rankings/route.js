"use server";
import dbConnect, { collections } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const rankingsCollection = await dbConnect(collections.rankingsCollection);
  const result = await rankingsCollection.find().toArray();
  return NextResponse.json(result);
};
