"use server";
import dbConnect, { collections } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const transfersCollection = await dbConnect(collections.transfersCollection);
  const result = await transfersCollection.find().toArray();
  return NextResponse.json(result);
};
