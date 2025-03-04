import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { auth } from "@/auth";

export const GET = async () => {
  try {
    const session = await auth();
    if (!session || session?.user?.role !== "admin") {
      return NextResponse.json({
        status: 403,
        message: "Forbidden Access: Admins only actions",
      });
    }

    const usersCollection = await dbConnect("users");
    const users = await usersCollection.find().toArray();

    return NextResponse.json(
      users.map((user) => ({
        role: user.role,
        name: user.name,
        email: user.email,
        UID: user._id.toString(),
      })),
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
