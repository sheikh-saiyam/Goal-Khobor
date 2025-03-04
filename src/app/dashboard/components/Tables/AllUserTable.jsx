"use client";
import useFetchUsers from "@/hooks/useFetchUsers";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";

const AllUserTable = () => {
  const [users, isLoading] = useFetchUsers();

  return (
    <tbody>
      {isLoading
        ? Array.from({ length: 6 }).map((_, index) => (
            <tr
              key={index}
              className="border-t border-gray-200 hover:bg-gray-50"
            >
              <td className="p-4">
                <div className="h-4 w-24 bg-[#e5eaf2] animate-pulse rounded"></div>
              </td>
              <td className="p-4">
                <div className="h-4 w-32 bg-[#e5eaf2] animate-pulse rounded"></div>
              </td>
              <td className="p-4">
                <div className="h-4 w-20 bg-[#e5eaf2] animate-pulse rounded"></div>
              </td>
              <td className="p-4">
                <div className="h-4 w-28 bg-[#e5eaf2] animate-pulse rounded"></div>
              </td>
              <td className="p-4 flex items-center gap-4">
                <div className="h-8 w-8 bg-[#e5eaf2] animate-pulse rounded"></div>
                <div className="h-8 w-8 bg-[#e5eaf2] animate-pulse rounded"></div>
              </td>
            </tr>
          ))
        : users.map((user) => (
            <tr
              key={user.UID}
              className="border-t border-gray-200 hover:bg-gray-50"
            >
              <td className="p-4 text-gray-700 font-medium">{user.name}</td>
              <td className="p-4 text-gray-700 font-medium">{user.email}</td>
              <td className="p-4 text-gray-700 font-medium">{user.role}</td>
              <td className="p-4 text-gray-700 font-medium">{user.UID}</td>
              <td className="p-4 flex items-center gap-4">
                <p className="flex items-center gap-1 text-gray-700 cursor-pointer hover:bg-gray-50 bg-gray-50 p-2 rounded">
                  <MdOutlineEdit size={20} />
                </p>
                <p className="flex items-center gap-1 text-gray-700 cursor-pointer hover:bg-gray-50 bg-gray-50 p-2 rounded">
                  <MdDeleteOutline size={20} />
                </p>
              </td>
            </tr>
          ))}
    </tbody>
  );
};

export default AllUserTable;
