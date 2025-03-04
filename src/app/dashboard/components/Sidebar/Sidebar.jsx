"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { GoSidebarCollapse } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import AdminLinks from "./AdminLinks";
import UserLinks from "./UserLinks";

const Sidebar = () => {
  const path = usePathname();
  const [isCollapse1, setIsCollapse1] = useState(true);

  // Get user role --->
  const { data: session } = useSession();
  const role = session?.user?.role;

  return (
    <aside className="bg-white boxShadow rounded-md transition-all duration-300 ease">
      <div
        className={`mt-5 ${
          isCollapse1 ? "px-[20px]" : "px-[10px]"
        } transition-all duration-300 ease-in-out`}
      >
        {/* Logo Div */}
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
          <Link href={"/"} prefetch={true}>
            <Image
              width={600}
              height={80}
              src="https://i.ibb.co.com/fV684RGm/goal-khobor.png"
              alt="goal khobor logo"
              className="w-[50px] mx-auto cursor-pointer"
              onClick={() => setIsCollapse1(!isCollapse1)}
            />
          </Link>
        )}

        {/* Searchbar */}
        {isCollapse1 ? (
          <div className="relative mt-5 hidden">
            <input
              className="px-4 py-2 border border-border w-full pl-[40px] outline-none"
              placeholder="Search News..."
            />
            <IoIosSearch className="absolute top-[9px] left-2 text-[1.5rem] text-[#adadad]" />
          </div>
        ) : (
          <div className="w-full relative group">
            <IoIosSearch className="text-[2rem] mx-auto text-gray-500 mt-2 p-[5px] rounded-md hover:bg-gray-100 cursor-pointer w-full" />
            {/* tooltip */}
            <div className="absolute top-0 right-[-85px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500">
              <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                Search
              </p>
            </div>
          </div>
        )}
      </div>

      {/* User NavLinks */}
      {role === "user" && <UserLinks isCollapse1={isCollapse1} />}
      {/* Admin NavLinks */}
      {role === "admin" && <AdminLinks isCollapse1={isCollapse1} />}
    </aside>
  );
};

export default Sidebar;
