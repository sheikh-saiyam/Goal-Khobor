"use server";
import dbConnect, { collections } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { _id } = await params;
  const transfersCollection = await dbConnect(collections.transfersCollection);
  const result = await transfersCollection.findOne({ _id: new ObjectId(_id) });
  return NextResponse.json(result);
};
