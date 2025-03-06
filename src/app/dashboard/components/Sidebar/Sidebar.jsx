"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { GoSidebarCollapse } from "react-icons/go";
import AdminLinks from "./AdminLinks";
import UserLinks from "./UserLinks";

const Sidebar = () => {
  // Load collapse state from localStorage
  const [isCollapse1, setIsCollapse1] = useState(() => {
    if (typeof window !== "undefined") {
      const savedState = localStorage.getItem("isCollapse1");
      return savedState ? JSON.parse(savedState) : true;
    }
    return true;
  });

  // Update localStorage when state changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("isCollapse1", JSON.stringify(isCollapse1));
    }
  }, [isCollapse1]);

  // Get user role & session status
  const { data: session, status } = useSession();
  const role = session?.user?.role;

  return (
    <aside className="bg-white boxShadow rounded-md transition-all duration-300 ease relative">
      {/* Logo & Toggle */}
      <div
        className={`mt-5 ${
          isCollapse1 ? "px-[20px]" : "px-[10px]"
        } transition-all duration-300 ease-in-out`}
      >
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
            <GoSidebarCollapse
              className="text-[1.5rem] text-black cursor-pointer hidden lg:flex"
              onClick={() => setIsCollapse1(false)}
            />
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

      {/* Loading Skeleton */}
      {status === "loading" ? (
        <div className="mt-12 space-y-4 px-4">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className={`h-11 bg-[#e5eaf2] animate-pulse 
        ${isCollapse1 ? "w-full px-[164px]" : "w-10 px-4"}`}
            />
          ))}
        </div>
      ) : (
        <>
          {/* User & Admin Links */}
          {role === "user" && <UserLinks isCollapse1={isCollapse1} />}
          {role === "admin" && <AdminLinks isCollapse1={isCollapse1} />}
        </>
      )}
    </aside>
  );
};

export default Sidebar;
