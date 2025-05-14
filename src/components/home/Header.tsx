"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useAuthContext } from "@/context/AuthContext";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuthContext();
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Feature", path: "/feature" },
    { label: "Pricing", path: "/pricing" },
    { label: "Category", path: "/category" },
  ];

  const baseBtn =
    "text-lg px-4 py-2 rounded-full transition duration-300 cursor-pointer";
  const activeBtn = "text-white bg-black hover:bg-gray-800";
  const inactiveBtn = "border border-transparent hover:border-black";
  const modHeader = ["/products"];
  const isSticky = modHeader.includes(pathname);
  return (
    <header
      className={`w-full border-b ${
        isSticky ? "bg-white sticky top-0 z-50" : ""
      } `}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-black font-bold text-2xl md:text-[38px] ml-8"
        >
          Shopster
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((item) => (
            <Link key={item.label} href={item.path}>
              <button
                className={`${baseBtn} ${
                  pathname === item.path ? activeBtn : inactiveBtn
                }`}
              >
                {item.label}
              </button>
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center">
          {user?.isLoggedIn && !user?.isLoading ? (
            <Link href="/dashboard">
              <button className="text-lg px-9 py-6 border-l border-black cursor-pointer">
                Dashboard
              </button>
            </Link>
          ) : (
            <Link href="/signup">
              <button className="text-lg px-9 py-6 border-l border-black cursor-pointer">
                Sign up
              </button>
            </Link>
          )}

          <Link href="/startSelling">
            <button className="text-lg px-9 py-6 border-l border-black text-white bg-black cursor-pointer">
              Start Selling
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden mr-4" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-6 px-4 flex flex-col items-center gap-4">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              onClick={() => setIsOpen(false)}
            >
              <button
                className={`w-full text-center ${baseBtn} ${
                  pathname === item.path ? activeBtn : inactiveBtn
                }`}
              >
                {item.label}
              </button>
            </Link>
          ))}

          {user?.isLoggedIn && !user?.isLoading ? (
            <Link href="/dashboard" onClick={() => setIsOpen(false)}>
              <button className="text-lg w-full py-3 cursor-pointer">
                Dashboard
              </button>
            </Link>
          ) : (
            <Link href="/signup" onClick={() => setIsOpen(false)}>
              <button className="text-lg w-full py-3 cursor-pointer">
                Sign up
              </button>
            </Link>
          )}

          <Link href="/startSelling" onClick={() => setIsOpen(false)}>
            <button className="text-lg w-full py-3 cursor-pointer">
              Start Selling
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
