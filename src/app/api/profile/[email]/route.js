"use server";
import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { email } = await params;

  if (!email) {
    return NextResponse.json(
      { error: "Email parameter is required" },
      { status: 400 }
    );
  }

  const usersCollection = await dbConnect("users");
  const user = await usersCollection.findOne(
    { email },
    {
      projection: {
        _id: 1,
        role: 1,
        name: 1,
        email: 1,
        createdAt: 1,
      },
    }
  );

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
};
