import { auth } from "@/auth";
import dbConnect, { collections } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

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

    const transfer_news = await req.json();
    const transferCollection = await dbConnect(collections.transfersCollection);
    const result = await transferCollection.insertOne(transfer_news);

    return NextResponse.json(
      { message: "Transfer news added successfully", data: result },
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
