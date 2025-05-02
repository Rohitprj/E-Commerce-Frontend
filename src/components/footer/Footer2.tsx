import React from "react";

export default function Footer2() {
  return (
    <div>
      <div className="flex flex-col justify-center w-full h-112 bg-pink-300 ">
        <p className="flex justify-center text-6xl font-medium">
          Share your work.
        </p>
        <p className="flex justify-center text-6xl font-medium">
          Someone out there needs it.
        </p>
        <div className="flex justify-center mt-8">
          {/* <button
            className="cursor-pointer items-center rounded-sm text-white font-medium
            border border-black bg-black px-14 py-6 text-2xl transition-all shadow-none
            hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1),12px_12px_0px_0px_rgba(0,255,255,1)]
            hover:-translate-y-3 hover:-translate-x-3
            active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
            // className="cursor-pointer items-center rounded-sm text-white font-medium
            // border border-black bg-black px-14 py-6 text-2xl transition-all shadow-none
            // hover:shadow-[0_0_0_4px_rgba(255,255,255,1),0_0_0_8px_rgba(0,0,0,1)]
            // hover:-translate-y-3 hover:-translate-x-3
            // active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
          ></button> */}
          <button
            className="cursor-pointer items-center rounded-sm text-white font-medium
            border border-black bg-black px-14 py-6 text-2xl transition-all shadow-none
            hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1),12px_12px_0px_2px_rgba(0,255,255,1)]
            hover:-translate-y-3 hover:-translate-x-3
            active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
          >
            Start selling
          </button>
        </div>
      </div>
    </div>
  );
}
