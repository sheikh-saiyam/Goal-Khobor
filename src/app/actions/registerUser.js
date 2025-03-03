"use server";
import dbConnect from "@/lib/dbConnect";
import { hash } from "bcryptjs";

export const registerUser = async (formData) => {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    // FormData validation --->
    if (!name || !email || !password) {
      return {
        success: false,
        title: "Missing Information!",
        message: "Please provide all required information!",
      };
    }
    // Get user collection and db --->
    const usersCollection = await dbConnect("users");
    // Check user is already exists --->
    const isExists = await usersCollection.findOne({ email });
    if (isExists) {
      return {
        success: false,
        title: "User Exists!",
        message: "This email is already registered!",
      };
    }
    // Make password hashed --->
    const hashedPassword = await hash(password, 10);
    // Get all user data --->
    const user = {
      role: "user",
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    };
    // Insert user in db --->
    await usersCollection.insertOne(user);
    return {
      success: true,
      title: "Registration Successful!",
      message: "Please Login To Start!",
    };
  } catch (error) {
    return {
      success: false,
      title: "Error!",
      message: error.message || "Registration failed!",
    };
  }
};
