"use server";
import dbConnect, { collections } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const publishersCollection = await dbConnect(
    collections.publishersCollection
  );
  const result = await publishersCollection.find().toArray();
  return NextResponse.json(result);
};
