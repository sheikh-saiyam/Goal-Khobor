"use server";
import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const PATCH = async (req, { params }) => {
  const { email } = await params;
  if (!email) {
    return NextResponse.json({ error: "Email is required!" }, { status: 400 });
  }

  const { name } = await req.json();

  if (!name) {
    return NextResponse.json({ error: "Username is required!" }, { status: 400 });
  }

  const usersCollection = await dbConnect("users");

  const result = await usersCollection.updateOne(
    { email },
    { $set: { name } }
  );

  if (result.modifiedCount === 0) {
    return NextResponse.json(
      { error: "User not found or already has this Username!" },
      { status: 404 }
    );
  }

  return NextResponse.json({ message: "Username updated successfully!" });
};
