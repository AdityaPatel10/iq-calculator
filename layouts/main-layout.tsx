"use client";

import { Navbar } from "@/components/common/Navbar";
import { Sidebar } from "@/components/common/Sidebar";
import { usePathname } from "next/navigation";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // Check if the current route is either '/login' or '/register'
  const isAuthPage =
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/404";
  return (
    <div className="flex min-h-screen">
      {!isAuthPage && (
        <>
          <Sidebar />
          <div className="flex flex-col flex-1 overflow-hidden">
            <Navbar />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
              {children}
            </main>
          </div>
        </>
      )}
      {isAuthPage && (
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          {children}
        </main>
      )}
    </div>
  );
};

export default MainLayout;
