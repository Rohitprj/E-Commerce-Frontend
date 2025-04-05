"use client";

import React, { useState } from "react";
import { IoIosClose, IoIosSearch } from "react-icons/io";

export default function Header2() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="border-b py-8">
      <div className="flex justify-center">
        {/* Input box */}
        <div className="flex border border-b-black w-6xl py-3 px-2 rounded-sm">
          <button>
            <IoIosSearch size={22} color="grey" />
          </button>
          {/* Input Area */}
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search Products"
            className="bg-grn-300 h-7 w-full px-2 border-0 outline-none"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {searchText && (
            <button onClick={() => setSearchText("")}>
              <IoIosClose size={28} color="grey" />
            </button>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" w-6xl pt-4 ">
          <button
            className=" cursor-pointer items-center rounded-full 
            border-1 border-black bg-white px-4 py-2 text-lg transition-all shadow-none 
            hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
            hover:translate-x-0 hover:translate-y-0 
            active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
          >
            All
          </button>
          <button
            className="ml-6 cursor-pointer items-center rounded-full 
            border-1 border-black bg-white px-4 py-2 text-lg transition-all shadow-none 
            hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
            hover:translate-x-0 hover:translate-y-0 
            active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
          >
            Clothes
          </button>
          <button
            className="ml-6 cursor-pointer items-center rounded-full 
            border-1 border-black bg-white px-4 py-2 text-lg transition-all shadow-none 
            hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
            hover:translate-x-0 hover:translate-y-0 
            active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
          >
            Electronics
          </button>
        </div>
      </div>
    </div>
  );
}
