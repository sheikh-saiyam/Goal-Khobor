"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { IoIosLogIn } from "react-icons/io";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";

const login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center">
          <IoIosLogIn size={30} />
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login To Start!</DialogTitle>
          <DialogDescription>
            Stay Updated, Stay Informed! Login To <strong>Goal Khobor</strong>{" "}
            For Real-Time News.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
              className="border rounded-lg border-gray-300 outline-gray-500 py-2 px-3 placeholder-gray-500 text-gray-500"
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
              className="border rounded-lg border-gray-300 outline-gray-500 py-2 px-3 placeholder-gray-500 text-gray-500"
            />
          </div>
          <DialogFooter>
            <Button type="submit" className="mt-1 text-center mx-auto w-full">
              Login
            </Button>
          </DialogFooter>
        </form>
        <div className="mt-2 text-center">
          <DialogDescription>OR CONTINUE WITH</DialogDescription>
          {/* Social Login */}
          <div className="mt-4 flex gap-4 justify-center">
            <Button
              variant="outline"
              className="w-1/2 text-black font-semibold flex items-center gap-2"
            >
              <FaGoogle /> Google
            </Button>
            <Button
              variant="outline"
              className="w-1/2 text-black font-semibold flex items-center gap-2"
            >
              <FaGithub /> Github
            </Button>
          </div>
          {/* Social Login */}
        </div>
        <div className="mt-2 text-center">
          <DialogDescription className="flex gap-2 items-center justify-center">
            Don't have an account?{" "}
            <DialogClose asChild>
              <Link href={"/register"} prefetch={true}>
                <Button
                  variant="outline"
                  className="underline text-black underline-offset-2"
                >
                  Register
                </Button>
              </Link>
            </DialogClose>
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default login;
