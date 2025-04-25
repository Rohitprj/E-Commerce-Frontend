"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);
  const isActive = (path: string) => pathname === path;

  return (
    <div className="h-screen w-64 bg-black shadow-md fixed top-0 left-0 p-6">
      <h2 className="text-xl font-semibold text-white mb-6">Shopster</h2>
      <nav className="space-y-4">
        <Link
          href="/dashboard"
          className={`block pb-2 border-b border-white ${
            isActive("/dashboard")
              ? "text-white font-bold"
              : "text-white/70 hover:text-white"
          }`}
        >
          Home
        </Link>
        <Link
          href="/profile"
          className={`block pb-2 border-b border-white ${
            isActive("/profile")
              ? "text-white font-bold"
              : "text-white/70 hover:text-white"
          }`}
        >
          Profile
        </Link>
        <Link
          href="/settings"
          className={`block pb-2 border-b border-white ${
            isActive("/settings")
              ? "text-white font-bold"
              : "text-white/70 hover:text-white"
          }`}
        >
          Settings
        </Link>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="block text-white/70 hover:text-white pt-2"
        >
          Logout
        </button>
        {open ? (
          <div className="relative bg-white text-black p-3 rounded-md mt-3">
            <div className="absolute -top-2 left-4 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white" />
            <button className="text-sm font-medium">Logout</button>
          </div>
        ) : (
          ""
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
