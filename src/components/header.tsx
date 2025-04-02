import React from "react";

export default function header() {
  return (
    <div>
      <div className="w-full border-b-1 flex justify-between">
        <p className="text-black font-bold text-[38px] px-8 py-3">E-Commerce</p>
        <div className="flex self-center gap-8 py-4 bg-amber-700">
          <button className="text-white text-[20px] bg-black px-5 py-2 rounded-full transition-all duration-700 ease-in-out hover:bg-gray-800">
            Home
          </button>

          <p className="text-[20px] flex items-center px-4 border border-transparent hover:border-black rounded-full transition duration-300 cursor-pointer">
            About
          </p>

          <p className="text-[20px] flex items-center px-4 border border-transparent hover:border-black rounded-full transition duration-300 cursor-pointer">
            Feature
          </p>
          <p className="text-[20px] flex items-center px-4 border border-transparent hover:border-black rounded-full transition duration-300 cursor-pointer">
            Pricing
          </p>
          <p className="text-[20px] flex items-center px-4 border border-transparent hover:border-black rounded-full transition duration-300 cursor-pointer">
            Taxes
          </p>
        </div>
        <div className="flex self-center">
          <button className="text-[20px] flex items-center px-10 py-6 border-l border-black">
            Sign up
          </button>
          <button className="text-[20px] flex items-center px-10 py-6 border-l border-black">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
