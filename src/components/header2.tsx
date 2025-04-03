"use client";

import React, { useState } from "react";
import { IoIosClose, IoIosSearch } from "react-icons/io";

export default function header2() {
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
    </div>
  );
}
