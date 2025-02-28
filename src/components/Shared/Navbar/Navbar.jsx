"use client";
import Image from "next/image";
import TopNavbar from "./TopNavbar";
import Link from "next/link";
import Login from "../../authentication/Login";
import MobileNavbar from "./MobileNavbar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  return (
    <nav className="w-11/12 md:w-10/12 mx-auto max-w-screen-2xl">
      {/* 1st Navbar */}
      <TopNavbar />
      {/* 2st Navbar */}
      <div className="py-4 flex items-center justify-between border-b-2 border-black">
        <Link href={"/"} className="hover:scale-105">
          <Image
            src={"https://i.ibb.co.com/fV684RGm/goal-khobor.png"}
            alt="Goal Khobor"
            className="w-44 h-20"
            width={100}
            height={100}
          />
        </Link>
        {/* NavLinks */}
        <div className="hidden xl:flex gap-6 items-center font-semibold tracking-widest text-black">
          <Link
            href={"/"}
            prefetch={true}
            className={`${
              path === "/"
                ? "underline underline-offset-2"
                : "hover:underline underline-offset-2"
            }`}
          >
            Home
          </Link>
          <Link
            href={"/news"}
            prefetch={true}
            className={`${
              path === "/news"
                ? "underline underline-offset-2"
                : "hover:underline underline-offset-2"
            }`}
          >
            All News
          </Link>{" "}
          <Link
            href={"/features-news"}
            prefetch={true}
            className={`${
              path === "/features-news"
                ? "underline underline-offset-2"
                : "hover:underline underline-offset-2"
            }`}
          >
            Features News
          </Link>
          <Link
            href={"/transfer-news"}
            prefetch={true}
            className={`${
              path === "/transfer-news"
                ? "underline underline-offset-2"
                : "hover:underline underline-offset-2"
            }`}
          >
            Transfer News
          </Link>
          <Link
            href={"/power-rankings"}
            prefetch={true}
            className={`${
              path === "/power-rankings"
                ? "underline underline-offset-2"
                : "hover:underline underline-offset-2"
            }`}
          >
            Power Rankings
          </Link>
          <div>
            <Login />
          </div>
        </div>
        {/* Mobile Navbar */}
        <div className="flex items-center gap-2 xl:hidden">
          <MobileNavbar />
          <Login />
        </div>
      </div>
      {/* 3st Navbar */}
    </nav>
  );
};

export default Navbar;
