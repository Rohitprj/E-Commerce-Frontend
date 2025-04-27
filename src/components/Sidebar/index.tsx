"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import axiosInstance, { BASE_URL } from "../../../utils/axiosInstance";
import { useAuthContext } from "@/context/AuthContext";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (path: string) => pathname === path;
  const { setUser } = useAuthContext();
  const api = `${BASE_URL}/auth/logout`;
  async function logout() {
    try {
      const response = await axiosInstance.post(api);

      if (response.status === 200) {
        console.log("Logout successful", response.status);
        setUser({
          email: "",
          isLoggedIn: false,
          isLoading: false,
        });
        // Redirect to login or home
        router.push("/");
      } else {
        console.error("Logout failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  }
  return (
    <div className="h-screen w-64 bg-black shadow-md fixed top-0 left-0 p-6">
      <Link href={"/"}>
        <h2 className="text-xl font-semibold text-white mb-6">Shopster</h2>
      </Link>
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
          <div className="relative">
            <div className="relative bg-white text-black p-3 rounded-md shadow-md w-40">
              <div
                className="absolute -top-2 left-4 border-l-8 
              border-r-8 border-b-8 border-l-transparent border-r-transparent
              border-b-white"
              />
              <button
                onClick={() => {
                  logout();
                }}
                className="flex flex-row justify-between items-center text-sm
              font-medium w-full cursor-pointer"
              >
                Logout
                <LogOut size={18} />
              </button>
            </div>
          </div>
        ) : null}
      </nav>
    </div>
  );
};

export default Sidebar;
