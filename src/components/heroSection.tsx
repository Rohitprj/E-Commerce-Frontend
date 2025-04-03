import React from "react";
import { IoIosClose, IoIosSearch } from "react-icons/io";

export default function heroSection() {
  return (
    <div>
      <div className="flex border-1 w-6xl py-3 px-2 m-10 rounded-sm">
        <button className="">
          <IoIosSearch size={22} />
        </button>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Products"
          className="bg-grn-300 h-7 w-full px-2 border-0 outline-none"
        />
        <button className="">
          <IoIosClose size={28} />
        </button>
      </div>
    </div>
  );
}
