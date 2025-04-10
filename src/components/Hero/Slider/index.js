"use client";

import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  "/assets/images/download.jpeg",
  "/assets/images/clothes.jpeg",
  "/assets/images/download.jpeg",
  "/assets/images/clothes.jpeg",
  "/assets/images/download.jpeg",
];

export default function CustomSlider() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth / 2; // scroll by 2 images
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative flex items-center mx-auto">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="z-10 p-2 bg-black bg-opacity-50 text-white rounded hover:bg-opacity-70 mr-4"
      >
        <FaArrowLeft />
      </button>

      {/* Slider Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-4 px-4 
        py-2 w-full"
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-1/2 snap-start">
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-98 object-cover rounded-md border-1 cursor-pointer shadow-none 
            hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
            hover:translate-x-0 hover:translate-y-0 
            active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="z-10 p-2 bg-black bg-opacity-50 text-white rounded hover:bg-opacity-70"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}
