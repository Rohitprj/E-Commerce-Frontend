"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useAuthContext } from "@/context/AuthContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuthContext();
  const navLinks = ["About", "Feature", "Pricing", "Taxes"];

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link
          href={"/"}
          className="text-black font-bold text-2xl md:text-[38px] ml-8"
        >
          Shopster
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href={"/"}>
            <button className="text-white text-lg cursor-pointer bg-black px-5 py-2 rounded-full transition-all duration-300 hover:bg-gray-800">
              Home
            </button>
          </Link>

          {navLinks.map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`}>
              <p
                className="text-lg px-4 py-2 border border-transparent
                  hover:border-black rounded-full transition duration-300
                  cursor-pointer"
              >
                {item}
              </p>
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
            <button className="text-lg px-9 py-6 cursor-pointer border-l border-black text-white bg-black">
              Start Selling
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-6 px-4 flex flex-col items-center gap-4">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <button className="text-white text-lg bg-black px-5 py-2 rounded-full w-full text-center">
              Home
            </button>
          </Link>

          {navLinks.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
            >
              <p className="text-lg w-full text-center py-2 cursor-pointer">
                {item}
              </p>
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
