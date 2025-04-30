"use client";

import { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import OnTheMarketItems from "./OnTheMarketItems";

const FilterItem = ({ title }: { title: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-lg flex justify-between items-center px-4 py-4 hover:bg-gray-50 border-b"
      >
        <span>{title}</span>
        {open ? <FaChevronDown size={12} /> : <FaChevronRight size={12} />}
      </button>

      {open && (
        <div className="px-6 py-2 text-sm text-gray-600">
          {/* Placeholder content */}
          <p>Option 1</p>
          <p>Option 2</p>
          <p>Option 3</p>
        </div>
      )}
    </div>
  );
};

export default function FiltersSidebar() {
  return (
    <div className="px-22 bg-gray-100 relative">
      <div className="flex justify-between">
        <div className="text-2xl mb-6">On the market</div>
        <nav className="hidden md:flex items-center gap-6 mb-6">
          <button
            className="text-lg px-3 py-1 border border-black rounded-full transition duration-300 
            cursor-pointer"
          >
            Trending
          </button>
          {["Best Seller", "New"].map((item) => (
            <p
              key={item}
              className="text-lg px-3 py-1 border border-transparent
            hover:border-black rounded-full transition duration-300 
            cursor-pointer"
            >
              {item}
            </p>
          ))}
        </nav>
      </div>
      <div className="flex items-start justify-between">
        <div className="w-70 border top-30 rounded-sm sticky bg-white">
          <div className="px-4 py-4 text-lg border-b">Filters</div>
          <FilterItem title="Tags" />
          <FilterItem title="Contains" />
          <FilterItem title="Price" />
          <FilterItem title="Rating" />
        </div>
        <OnTheMarketItems />
      </div>
    </div>
  );
}
