import { ObjectId } from "mongodb";
import dbConnect, { collections } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { _id } = await params;
  const newsCollection = await dbConnect(collections.newsCollection);
  const result = await newsCollection.findOne({ _id: new ObjectId(_id) });
  return NextResponse.json(result);
};

export const DELETE = async (req, { params }) => {
  const { _id } = await params;
  try {
    const newsCollection = await dbConnect(collections.newsCollection);

    if (!_id) {
      return NextResponse.json(
        { error: "News ID is required" },
        { status: 400 }
      );
    }

    const result = await newsCollection.deleteOne({ _id: new ObjectId(_id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: "News item not found" },
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
