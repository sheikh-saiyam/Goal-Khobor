"use client";
import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import DashboardHeader from "./components/Dashboards/Header/DashboardHeader";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar - Visible on large screens & Toggle on small screens */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-fit border-2 bg-white shadow-xl transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:translate-x-0 lg:static`}
      >
        <Sidebar />
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden cursor-pointer"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <div className="flex-1 bg-[#f8f8fa]">
        {/* Dashboard Header */}
        <DashboardHeader
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />
        {/* Dashboard Pages */}
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
