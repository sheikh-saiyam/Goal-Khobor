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

export const DELETE = async (req, { params }) => {
  const { _id } = await params;
  try {
    const transfersCollection = await dbConnect(
      collections.transfersCollection
    );

    if (!_id) {
      return NextResponse.json(
        { error: "Transfer News ID is required" },
        { status: 400 }
      );
    }

    const result = await transfersCollection.deleteOne({
      _id: new ObjectId(_id),
    });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: "Transfer news not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete news", details: error.message },
      { status: 500 }
    );
  }
};
