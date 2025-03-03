export const runtime = "nodejs";
import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { compare } from "bcryptjs";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          statusCode: 400,
          message: "Email and password are required!",
        },
        { status: 400 }
      );
    }

    const usersCollection = await dbConnect("users");
    const user = await usersCollection.findOne({ email });

    if (!user || !user.password || !(await compare(password, user.password))) {
      return NextResponse.json(
        {
          success: false,
          statusCode: 401,
          message: "Invalid email or password!",
        },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      statusCode: 200,
      message: "Login successful!",
      user: {
        id: user._id,
        role: user.role,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        statusCode: 500,
        message: error.message || "Internal Server Error!",
      },
      { status: 500 }
    );
  }
}
