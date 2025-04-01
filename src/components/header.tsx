import React from "react";

export default function header() {
  return (
    <div>
      <div className="w-full border-b-1 flex">
        <p className="text-black font-bold text-[38px] px-8 py-3">E-Commerce</p>
        <p className="text-white text-[22px] bg-black h-12">Home</p>
        <p className="text-[22px] h-12">About</p>
        <p className="text-[22px] h-12">Feature</p>
        <p className="text-[22px] h-12">Pricing</p>
        <p className="text-[22px] h-12">Taxes</p>
      </div>
    </div>
  );
}
