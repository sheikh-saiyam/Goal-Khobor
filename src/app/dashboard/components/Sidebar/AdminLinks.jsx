import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiTransfer } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoNewspaperSharp } from "react-icons/io5";
import { MdOutlineManageSearch, MdOutlinePendingActions } from "react-icons/md";
import { PiRankingFill } from "react-icons/pi";

const AdminLinks = ({ isCollapse1 }) => {
  const path = usePathname();
  return (
    <div
      className={`my-12 ${
        isCollapse1 ? "px-[20px]" : "px-[10px]"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="mt-3 flex flex-col gap-4">
        {/* Dashboard */}
        <div
          className={`${
            isCollapse1 ? "justify-between pr-20" : "justify-center"
          } flex items-center w-full bg-slate-100 border-2 border-slate-500 p-2 cursor-pointer transition-all duration-200 relative group`}
        >
          <Link
            href={"/dashboard"}
            className={`flex font- items-center gap-[8px] text-slate-700 ${
              path === "/dashboard"
                ? "underline underline-offset-2"
                : "hover:underline underline-offset-2 duration-500"
            }`}
          >
            <GoHome size={25} />
            <p
              className={`${
                isCollapse1 ? "inline" : "hidden"
              } text-lg tracking-wider font-semibold ml-[5px]`}
            >
              Dashboard
            </p>
          </Link>
        </div>
        {/* Add News */}
        <div
          className={`${
            isCollapse1 ? "justify-between pr-20" : "justify-center"
          } flex items-center w-full bg-slate-100 border-2 border-slate-500 p-2 cursor-pointer transition-all duration-200 relative group`}
        >
          <Link
            href={"/dashboard/add-news"}
            className={`flex font- items-center gap-[8px] text-slate-700 ${
              path === "/dashboard/add-news"
                ? "underline underline-offset-2"
                : "hover:underline underline-offset-2 duration-500"
            }`}
          >
            <IoNewspaperSharp size={25} />
            <p
              className={`${
                isCollapse1 ? "inline" : "hidden"
              } text-lg tracking-wider font-semibold ml-[5px]`}
            >
              Add News
            </p>
          </Link>
        </div>
        {/* Manage News */}
        <div
          className={`${
            isCollapse1 ? "justify-between pr-20" : "justify-center"
          } flex items-center w-full bg-slate-100 border-2 border-slate-500 p-2 cursor-pointer transition-all duration-200 relative group`}
        >
          <Link
            href={"/dashboard/manage-news"}
            className={`flex font- items-center gap-[8px] text-slate-700 ${
              path === "/dashboard/manage-news"
                ? "underline underline-offset-2"
                : "hover:underline underline-offset-2 duration-500"
            }`}
          >
            <MdOutlineManageSearch size={30} className="-mt-[3px]" />
            <p
              className={`${
                isCollapse1 ? "inline" : "hidden"
              } text-lg tracking-wider font-semibold`}
            >
              Manage News
            </p>
          </Link>
        </div>
        {/* Approve news */}
        <div
          className={`${
            isCollapse1 ? "justify-between pr-20" : "justify-center"
          } flex items-center w-full bg-slate-100 border-2 border-slate-500 p-2 cursor-pointer transition-all duration-200 relative group`}
        >
          <Link
            href={"/dashboard/approve-news"}
            className={`flex font- items-center gap-[8px] text-slate-700 ${
              path === "/dashboard/approve-news"
                ? "underline underline-offset-2"
                : "hover:underline underline-offset-2 duration-500"
            }`}
          >
            <MdOutlinePendingActions size={25} />
            <p
              className={`${
                isCollapse1 ? "inline" : "hidden"
              } text-lg tracking-wider font-semibold ml-[5px]`}
            >
              Approve News
            </p>
          </Link>
        </div>
        {/* Add Transfer News */}
        <div
          className={`${
            isCollapse1 ? "justify-between pr-10" : "justify-center"
          } flex items-center w-full bg-slate-100 border-2 border-slate-500 p-2 cursor-pointer transition-all duration-200 relative group`}
        >
          <Link
            href={"/dashboard/add-transfer-news"}
            className={`flex font- items-center gap-[8px] text-slate-700 ${
              path === "/dashboard/add-transfer-news"
                ? "underline underline-offset-2"
                : "hover:underline underline-offset-2 duration-500"
            }`}
          >
            <BiTransfer size={25} />
            <p
              className={`${
                isCollapse1 ? "inline" : "hidden"
              } text-lg tracking-wider font-semibold ml-[5px]`}
            >
              Add Transfer News
            </p>
          </Link>
        </div>
        {/* Add Power Ranking */}
        <div
          className={`${
            isCollapse1 ? "justify-between pr-10" : "justify-center"
          } flex items-center w-full bg-slate-100 border-2 border-slate-500 p-2 cursor-pointer transition-all duration-200 relative group`}
        >
          <Link
            href={"/dashboard/add-power-rankings"}
            className={`flex font- items-center gap-[8px] text-slate-700 ${
              path === "/dashboard/add-power-rankings"
                ? "underline underline-offset-2"
                : "hover:underline underline-offset-2 duration-500"
            }`}
          >
            <PiRankingFill size={25} />
            <p
              className={`${
                isCollapse1 ? "inline" : "hidden"
              } text-lg tracking-wider font-semibold ml-[5px]`}
            >
              Add Power Rankings
            </p>
          </Link>
        </div>
        {/* Manage Users */}
        <div
          className={`${
            isCollapse1 ? "justify-between pr-20" : "justify-center"
          } flex items-center w-full bg-slate-100 border-2 border-slate-500 p-2 cursor-pointer transition-all duration-200 relative group`}
        >
          <Link
            href={"/dashboard/manage-users"}
            className={`flex font- items-center gap-[8px] text-slate-700 ${
              path === "/dashboard/manage-users"
                ? "underline underline-offset-2"
                : "hover:underline underline-offset-2 duration-500"
            }`}
          >
            <FaUsers size={25} />
            <p
              className={`${
                isCollapse1 ? "inline" : "hidden"
              } text-lg tracking-wider font-semibold ml-[5px]`}
            >
              Manage Users
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLinks;
