"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { GoSidebarCollapse } from "react-icons/go";
import AdminLinks from "./AdminLinks";
import UserLinks from "./UserLinks";

const Sidebar = () => {
  const [isCollapse1, setIsCollapse1] = useState(true);

  // Get user role & session status
  const { data: session, status } = useSession();
  const role = session?.user?.role;

  return (
    <aside className="bg-white boxShadow rounded-md transition-all duration-300 ease relative">
      {/* Logo & Searchbar */}
      <div
        className={`mt-5 ${
          isCollapse1 ? "px-[20px]" : "px-[10px]"
        } transition-all duration-300 ease-in-out`}
      >
        {/* Logo */}
        {isCollapse1 ? (
          <div className="flex items-center justify-between">
            <Link href={"/"} prefetch={true}>
              <Image
                width={600}
                height={80}
                src="https://i.ibb.co.com/fV684RGm/goal-khobor.png"
                alt="goal khobor logo"
                className="w-[140px] h-[80px] cursor-pointer"
              />
            </Link>
            <div className="relative group">
              <GoSidebarCollapse
                className="text-[1.5rem] text-black cursor-pointer hidden lg:flex"
                onClick={() => setIsCollapse1(false)}
              />
            </div>
          </div>
        ) : (
          <Image
            width={600}
            height={100}
            src="https://i.ibb.co.com/fV684RGm/goal-khobor.png"
            alt="goal khobor logo"
            className="w-[50px] mx-auto cursor-pointer"
            onClick={() => setIsCollapse1(!isCollapse1)}
          />
        )}
      </div>

      {/* NavLinks Skeleton */}
      {status === "loading" ? (
        <div className="mt-12 space-y-4 px-4">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="h-11 w-full px-28 bg-[#e5eaf2] animate-pulse"
            />
          ))}
        </div>
      ) : (
        <>
          {/* User NavLinks */}
          {role === "user" && <UserLinks isCollapse1={isCollapse1} />}
          {/* Admin NavLinks */}
          {role === "admin" && <AdminLinks isCollapse1={isCollapse1} />}
        </>
      )}
    </aside>
  );
};

export default Sidebar;
