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

//         {/* Slider Container */}

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
//               className="flex-shrink-0 w-1/2 snap-start relative h-84"
//             >
//               <Image
//                 src={src}
//                 alt={`Slide ${index}`}
//                 fill
//                 className="object-cover rounded-md border border-black cursor-pointer shadow-none
//                   hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
//                   active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
//                 priority={index === 0}
//                 sizes="(max-width: 768px) 100vw, 50vw"
//               />
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
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useAuthContext } from "@/context/AuthContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuthContext();

  const navLinks = ["About", "Feature", "Pricing", "Taxes"];

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <p className="text-black font-bold text-2xl md:text-[38px]">Shopster</p>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href={"/"}>
            <button className="text-white text-lg cursor-pointer bg-black px-5 py-2 rounded-full transition-all duration-300 hover:bg-gray-800">
              Home
            </button>
          </Link>

          {navLinks.map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`}>
              <p
                className="text-lg px-4 py-2 border border-transparent
                  hover:border-black rounded-full transition duration-300 
                  cursor-pointer"
              >
                {item}
              </p>
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center">
          {user?.isLoggedIn && !user?.isLoading ? (
            <Link href="/dashboard">
              <button className="text-lg px-9 py-6 border-l border-black cursor-pointer">
                Dashboard
              </button>
            </Link>
          ) : (
            <Link href="/signup">
              <button className="text-lg px-9 py-6 border-l border-black cursor-pointer">
                Sign up
              </button>
            </Link>
          )}

          <Link href="/startSelling">
            <button className="text-lg px-9 cursor-pointer py-6 border-l border-black text-white bg-black">
              Start Selling
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-6 px-4 flex flex-col items-center gap-4">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <button className="text-white text-lg bg-black px-5 py-2 rounded-full w-full text-center">
              Home
            </button>
          </Link>

          {navLinks.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
            >
              <p className="text-lg w-full text-center py-2 cursor-pointer">
                {item}
              </p>
            </Link>
          ))}

          {user?.isLoggedIn && !user?.isLoading ? (
            <Link href="/dashboard" onClick={() => setIsOpen(false)}>
              <button className="text-lg w-full py-3">Dashboard</button>
            </Link>
          ) : (
            <Link href="/signup" onClick={() => setIsOpen(false)}>
              <button className="text-lg w-full py-3">Sign up</button>
            </Link>
          )}

          <Link href="/startSelling" onClick={() => setIsOpen(false)}>
            <button className="text-lg w-full py-3 text-white bg-black rounded">
              Start Selling
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
