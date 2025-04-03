import React from "react";
import { IoIosSearch } from "react-icons/io";

export default function heroSection() {
  return (
    <div>
      <div className="flex justify-center border-1 w-6xl py-3 px-6">
        <button className="">
          <IoIosSearch size={22} />
        </button>
        <input
          type="text"
          name="search"
          id="search"
          className="bg-green-300 h-7 w-6xl border-0 outline-none"
        />
      </div>
    </div>
  );
}
