"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="h-screen w-64 bg-white shadow-md fixed top-0 left-0 p-6">
      <h2 className="text-xl font-semibold mb-6">Shopster</h2>
      <nav className="space-y-4">
        <Link
          href="/profile"
          className={`block ${
            isActive("/profile")
              ? "text-black font-semibold"
              : "text-gray-700 hover:text-black"
          }`}
        >
          Dashboard
        </Link>
        <Link
          href="/settings"
          className={`block ${
            isActive("/settings")
              ? "text-black font-semibold"
              : "text-gray-700 hover:text-black"
          }`}
        >
          Settings
        </Link>
        <Link
          href="/dashboard/profile"
          className={`block ${
            isActive("/dashboard/profile")
              ? "text-black font-semibold"
              : "text-gray-700 hover:text-black"
          }`}
        >
          Profile
        </Link>
        <Link href="/logout" className="block text-gray-700 hover:text-black">
          Logout
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
