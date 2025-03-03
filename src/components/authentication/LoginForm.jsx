"use client";
import Link from "next/link";
import { IoIosLogIn } from "react-icons/io";
import { Button } from "@/components/ui/button";
import SocialLogin from "./SocialLogin";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Swal from "sweetalert2";
import { redirect } from "next/navigation";

const LoginForm = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const userLogin = async (formData) => {
    setError(null);
    setLoading(true);

    try {
      const email = formData.get("email")?.trim();
      const password = formData.get("password")?.trim();

      // 🚨 Check if fields are empty
      if (!email || !password) {
        throw new Error("Email and password are required!");
      }

      const result = await signIn("credentials", {
        email,
        password,
        redirect: false, // Prevent automatic redirect
      });

      if (result?.error) {
        throw new Error(result.error); // Show backend error
      }

      // ✅ Success -> Show modal & redirect
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        confirmButtonColor: "#000",
      }).then(() => {
        redirect("/profile");
      });
    } catch (err) {
      setError(err.message || "Something went wrong while logging in!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-base-200 fixed top-0 left-0 z-50">
      <div className="max-w-md mx-auto p-6 bg-white border-2 shadow rounded-lg">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <IoIosLogIn size={30} color="#000" />
          Login to start!
        </h2>
        <p className="text-gray-900 text-sm mt-2 mb-4">
          Stay Updated, Stay Informed! Login To <strong>Goal Khobor</strong> For
          Real-Time News.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            userLogin(formData);
          }}
          className="flex flex-col gap-4"
        >
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold text-black text-sm">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter Email"
              className="border rounded-lg border-gray-300 outline-none py-2 px-3 placeholder-gray-500 text-gray-500 focus:ring-1 focus:ring-[#848484]"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="font-semibold text-black text-sm"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Enter Password"
              className="border rounded-lg border-gray-300 outline-none py-2 px-3 placeholder-gray-500 text-gray-500 focus:ring-1 focus:ring-[#848484]"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-500 text-sm py-[6px] bg-red-100 rounded-lg font-semibold text-center">
              {error}
            </div>
          )}

          {/* Login Button */}
          <Button type="submit" disabled={loading} className="mt-1">
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>

        {/* Social Login */}
        <SocialLogin />

        {/* Navigate to Register */}
        <div className="mt-4 text-center text-sm text-gray-900">
          Don't have an account?{" "}
          <Link href="/register" prefetch={true}>
            <span className="text-black cursor-pointer hover:underline">
              Register
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
