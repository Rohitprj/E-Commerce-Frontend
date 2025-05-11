// "use client";

// import { useRef } from "react";
// import Image from "next/image";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// export default function FeaturedProducts() {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const images: string[] = [
//     "/assets/images/download.jpeg",
//     "/assets/images/clothes.jpeg",
//     "/assets/images/download.jpeg",
//     "/assets/images/clothes.jpeg",
//     "/assets/images/download.jpeg",
//   ];

//   const scroll = (direction: "left" | "right") => {
//     const container = scrollRef.current;
//     if (!container) return;

//     const scrollAmount = container.offsetWidth / 2;
//     container.scrollBy({
//       left: direction === "left" ? -scrollAmount : scrollAmount,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div className="py-16 px-10 bg-gray-100">
//       <h1 className="text-2xl mb-6 font-bold ml-12">Featured Products</h1>

//       {/* Slider */}
//       <div className="relative flex items-center mx-auto">
//         {/* Left Arrow */}
//         <button
//           onClick={() => scroll("left")}
//           className="z-10 p-2 bg-black bg-opacity-50 text-white rounded hover:bg-opacity-70 mr-4"
//         >
//           <FaArrowLeft />
//         </button>
//         <div
//           ref={scrollRef}
//           style={{
//             scrollbarWidth: "none",
//             msOverflowStyle: "none",
//           }}
//           className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-4 px-4 py-2 w-full"
//         >
//           {images.map((src, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 w-1/2 snap-start relative h-84
//                  rounded-md border border-black cursor-pointer shadow-none
//                  hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
//                  active:shadow-none overflow-hidden flex"
//             >
//               {/* Image aligned to the left of the line */}
//               <div className="h-full w-90 relative">
//                 <Image
//                   src={src}
//                   alt={`Slide ${index}`}
//                   fill
//                   className="object-cover rounded-l-md"
//                   priority={index === 0}
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                 />
//               </div>
//               {/* Vertical center line */}
//               <div className="absolute top-0 bottom-0 left-86 -translate-x-1/2 border-l-1 border-black z-10" />

//               <div className="p-4 flex flex-col justify-center gap-2 bg-white z-0">
//                 <h2 className="text-xl font-semibold">Title</h2>
//                 <p className="text-sm text-gray-700">
//                   Some description or content here.
//                 </p>
//                 <button className="mt-2 px-4 py-1 bg-black text-white rounded">
//                   Action
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={() => scroll("right")}
//           className="z-10 p-2 bg-black bg-opacity-50 text-white rounded hover:bg-opacity-70"
//         >
//           <FaArrowRight />
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import { useRef } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function FeaturedProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const images: string[] = [
    "/assets/images/download.jpeg",
    "/assets/images/clothes.jpeg",
    "/assets/images/download.jpeg",
    "/assets/images/clothes.jpeg",
    "/assets/images/download.jpeg",
  ];

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth / 2;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="py-10 px-4 sm:px-6 md:px-10 bg-gray-100">
      <h1 className="text-2xl mb-6 font-bold ml-4 sm:ml-8 md:ml-12">
        Featured Products
      </h1>

      {/* Slider Container */}
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="z-10 p-2 bg-black bg-opacity-50 text-white rounded hover:bg-opacity-70 mr-2 sm:mr-4"
        >
          <FaArrowLeft />
        </button>

        {/* Scrollable Track */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-4 py-2 w-full no-scrollbar"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/2 snap-start relative h-84 
                rounded-md border border-black cursor-pointer shadow-none
                hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                active:shadow-none overflow-hidden flex"
            >
              {/* Image */}
              <div className="h-full w-90 relative">
                <Image
                  src={src}
                  alt={`Slide ${index}`}
                  fill
                  className="object-cover rounded-l-md"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Vertical divider */}
              {/* <div className="absolute top-0 bottom-0 left-86 -translate-x-1/2 border-l-1 border-black z-10" /> */}

              {/* Text Content */}
              <div className="p-4 flex flex-col justify-center gap-2 bg-white z-0">
                <h2 className="text-xl font-semibold">Title</h2>
                <p className="text-sm text-gray-700">
                  Some description or content here.
                </p>
                <button className="mt-2 px-4 py-1 bg-black text-white rounded text-sm">
                  Action
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="z-10 p-2 bg-black bg-opacity-50 text-white rounded hover:bg-opacity-70 ml-2 sm:ml-4"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
