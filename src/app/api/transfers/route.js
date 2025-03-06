import dbConnect, { collections } from "@/lib/dbConnect";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export const GET = async () => {
  try {
    const transfersCollection = await dbConnect(
      collections.transfersCollection
    );
    const transfers = await transfersCollection
      .find()
      .sort({ published_date: -1 })
      .toArray();

    return NextResponse.json(transfers, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch transfer news" },
      { status: 500 }
    );
  }
};
