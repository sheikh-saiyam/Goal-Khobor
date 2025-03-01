"use client";
import Link from "next/link";
import { IoIosLogIn } from "react-icons/io";
import { Button } from "@/components/ui/button";
import SocialLogin from "./SocialLogin";

const RegisterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ name, email, password });
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-white border-2 shadow rounded-lg">
      <h2 className="text-xl font-bold flex items-center gap-2">
        <IoIosLogIn size={30} color="#000" />
        Register to start!
      </h2>
      <p className="text-gray-900 text-sm mt-2 mb-4">
        Stay Updated, Stay Informed! Register To <strong>Goal Khobor</strong>{" "}
        For Real-Time News.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
        <Button type="submit" className="mt-1">
          Register
        </Button>
      </form>
      {/* SocialLogin */}
      <SocialLogin />
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
  );
};

export default RegisterForm;
