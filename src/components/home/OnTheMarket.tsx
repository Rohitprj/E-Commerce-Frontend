"use client";

import { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

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
    <div className="px-22 bg-gray-100">
      <div className="text-2xl mb-6">On the market</div>
      <div className="w-74 border rounded-md overflow-hidden bg-white">
        {/* Top Title */}
        <div className="px-4 py-4 text-lg border-b">Filters</div>

        {/* Filter Sections */}
        <FilterItem title="Tags" />
        <FilterItem title="Contains" />
        <FilterItem title="Price" />
        <FilterItem title="Rating" />
      </div>
    </div>
  );
}
