"use server";
import { auth } from "@/auth";
import dbConnect, { collections } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const rankingsCollection = await dbConnect(collections.rankingsCollection);
  const result = await rankingsCollection.find().toArray();
  return NextResponse.json(result);
};

export const POST = async (req) => {
  try {
    const session = await auth();
    if (!session || session?.user?.role !== "admin") {
      return NextResponse.json({
        status: 403,
        error: "Forbidden Access",
        message: "Only admins are allowed to perform this action!",
      });
    }

    const ranking_data = await req.json();
    const rankingsCollection = await dbConnect(collections.rankingsCollection);
    const result = await rankingsCollection.insertOne(ranking_data);

    return NextResponse.json(
      { message: "Power Ranking Added Successfully", data: result },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({
      status: 500,
      error: "Internal Server Error",
      message: error.message,
    });
  }
};
