"use client";
import Link from "next/link";
import { IoIosLogIn } from "react-icons/io";
import { Button } from "@/components/ui/button";
import SocialLogin from "./SocialLogin";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { registerUser } from "@/app/actions/registerUser";
import { useState } from "react";

const RegisterForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Function for register user --->
  const handleSubmit = async (formData) => {
    setLoading(true);
    const result = await registerUser(formData);
    setLoading(false);
    // Show success modal --->
    if (result.success) {
      router.push("/login");
      Swal.fire({
        icon: "success",
        title: result.title,
        text: result.message,
        confirmButtonColor: "#000",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: result.title,
        text: result.message,
        confirmButtonColor: "#000",
      });
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center bg-base-200 fixed top-0 left-0 z-50">
      <div className="max-w-md mx-auto p-6 bg-white border-2 shadow rounded-lg">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <IoIosLogIn size={30} color="#000" />
          Register to start!
        </h2>
        <p className="text-gray-900 text-sm mt-2 mb-4">
          Stay Updated, Stay Informed! Register To <strong>Goal Khobor</strong>{" "}
          For Real-Time News.
        </p>
        <form action={handleSubmit} className="flex flex-col gap-4">
          {/* Name input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold text-black text-sm">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Enter Name"
              className="border rounded-lg border-gray-300 outline-none py-2 px-3 placeholder-gray-500 text-gray-500 focus:ring-1 focus:ring-[#848484]"
            />
          </div>
          {/* Email input */}
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
          {/* Password input */}
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
          {/* Register Button */}
          <Button disabled={loading} type="submit" className="mt-1">
            {loading ? "Registering..." : "Register"}
          </Button>
        </form>

        {/* SocialLogin */}
        {/* <SocialLogin /> */}

        {/* Navigate to login */}
        <div className="mt-4 text-center text-sm text-gray-900">
          Already have an account?{" "}
          <Link href={"/login"} prefetch={true}>
            <span className="text-black cursor-pointer hover:underline">
              Login
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
