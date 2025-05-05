"use client";
import Link from "next/link";
import { IoIosLogIn } from "react-icons/io";
import { Button } from "@/components/ui/button";
import SocialLogin from "./SocialLogin";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const userLogin = async (formData) => {
    setError(null);
    setLoading(true);
    const loadingToast = toast.loading("Logging in...", {
      description: "Please wait while we authenticate you",
      position: "top-right",
      style: {
        marginTop: "20px",
      },
    });

    try {
      const email = formData.get("email")?.trim();
      const password = formData.get("password")?.trim();
      // send formData to signIn --->
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      // Error message
      if (result?.error) {
        // setError(result.error || "Invalid email or password!");
        setError("Invalid email or password!");
        return;
      }
      // Success modal
      if (result?.ok) {
        router.push("/dashboard");
        toast.dismiss(loadingToast);
        toast.success(<b>Login Successful!</b>, {
          description:
            "Welcome back! You have successfully logged into your account",
          duration: 3000,
          position: "top-right",
          style: {
            marginTop: "20px",
          },
        });
      }
    } catch (err) {
      toast.dismiss(loadingToast);
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
