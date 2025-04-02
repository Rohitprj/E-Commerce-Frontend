"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b flex justify-between items-center px-6 py-4 bg-white">
      {/* Logo */}
      <p className="text-black font-bold text-2xl md:text-[38px]">E-Commerce</p>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        <button className="text-white text-lg bg-black px-5 py-2 rounded-full transition-all duration-300 hover:bg-gray-800">
          Home
        </button>
        {["About", "Feature", "Pricing", "Taxes"].map((item) => (
          <p
            key={item}
            className="text-lg px-4 border border-transparent hover:border-black rounded-full transition duration-300 cursor-pointer"
          >
            {item}
          </p>
        ))}
      </nav>

      {/* Sign Up & Login (Desktop) */}
      <div className="hidden md:flex items-center">
        <button className="text-lg px-6 py-2 border-l border-black">
          Sign up
        </button>
        <button className="text-lg px-6 py-2 border-l border-black">
          Log in
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-6 flex flex-col items-center gap-4 md:hidden">
          <button className="text-white text-lg bg-black px-5 py-2 rounded-full w-full text-center">
            Home
          </button>
          {["About", "Feature", "Pricing", "Taxes"].map((item) => (
            <p
              key={item}
              className="text-lg border-b w-full text-center py-2 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </p>
          ))}
          <button className="text-lg border-t w-full py-3">Sign up</button>
          <button className="text-lg w-full py-3">Log in</button>
        </div>
      )}
    </header>
  );
}
