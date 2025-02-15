import dbConnect, { collections } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { _id } = await params;
  const newsCollection = await dbConnect(collections.newsCollection);
  const result = await newsCollection.findOne({ _id: new ObjectId(_id) });
  return NextResponse.json(result);
};
