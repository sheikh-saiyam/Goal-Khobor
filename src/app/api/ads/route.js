"use server";
import dbConnect, { collections } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const adsCollection = await dbConnect(collections.adsCollection);

  const [randomAd] = await adsCollection
    .aggregate([{ $sample: { size: 1 } }])
    .toArray();

  if (!randomAd) {
    return NextResponse.json({ message: "No ads available" }, { status: 404 });
  }

  return NextResponse.json(randomAd);
};
