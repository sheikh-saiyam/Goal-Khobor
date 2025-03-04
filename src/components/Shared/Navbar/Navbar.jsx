"use client";
import Image from "next/image";
import TopNavbar from "./TopNavbar";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const path = usePathname();
  const { data: session, status } = useSession();
  const user = session?.user;

  if (
    path.includes("/login") ||
    path.includes("/register") ||
    path.includes("/dashboard")
  ) {
    return <></>;
  }

  return (
    <nav className="w-11/12 md:w-10/12 mx-auto max-w-screen-2xl">
      {/* 1st Navbar */}
      <TopNavbar />
      {/* 2nd Navbar */}
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
            className={
              path === "/"
                ? "underline underline-offset-2"
                : "hover:underline underline-offset-2"
            }
          >
            Home
          </Link>
          <Link
            href={"/news"}
            className={
              path === "/news"
                ? "underline underline-offset-2"
                : "hover:underline underline-offset-2"
            }
          >
            All News
          </Link>
          <Link
            href={"/transfer-news"}
            className={
              path === "/transfer-news"
                ? "underline underline-offset-2"
                : "hover:underline underline-offset-2"
            }
          >
            Transfer News
          </Link>
          <Link
            href={"/power-rankings"}
            className={
              path === "/power-rankings"
                ? "underline underline-offset-2"
                : "hover:underline underline-offset-2"
            }
          >
            Power Rankings
          </Link>
          {status === "loading" ? (
            <div className="w-8 h-8 animate-spin rounded-full border-dashed border-8 border-[#000] shadow-none" />
          ) : user ? (
            <>
              <Link
                href={"/dashboard"}
                className={
                  path === "/dashboard"
                    ? "underline underline-offset-2"
                    : "hover:underline underline-offset-2"
                }
              >
                Dashboard
              </Link>
              <Button onClick={() => signOut()} className="flex items-center">
                <IoIosLogOut size={30} /> Logout
              </Button>
            </>
          ) : (
            <Link href="/login">
              <Button className="flex items-center">
                <IoIosLogIn size={30} /> Login
              </Button>
            </Link>
          )}
        </div>
        {/* Mobile Navbar */}
        <div className="flex items-center gap-2 xl:hidden">
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
