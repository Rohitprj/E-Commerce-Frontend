// import React from "react";
// import { FaStar } from "react-icons/fa";
// import { useAuthContext } from "@/context/AuthContext";
// import Image from "next/image";
// import { MdCurrencyRupee } from "react-icons/md";
// import Skeleton from "react-loading-skeleton";

// export default function OnTheMarketItems() {
//   const { products = [] } = useAuthContext();
//   console.log(products);
//   return (
//     <div>
//       <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {products.map((items, index) => (
//           <div
//             key={index}
//             className="object-cover rounded-md cursor-pointer shadow-none
//                   hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
//                   active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
//           >
//             <div className="w-64 h-120 border rounded-sm bg-white shadow-sm hover:shadow-md transition overflow-hidden">
//               <div className="w-full h-60 border-b flex items-center justify-center bg-gray-100">
//                 <Image
//                   src={items.image || "/fallback-image.jpg"}
//                   alt={items.name || "Product missing"}
//                   unoptimized
//                   width={200}
//                   height={200}
//                   className="object-cover h-full w-full"
//                 />
//               </div>
//               <div className="w-full h-45 border-b flex flex-col justify-between px-6 py-4">
//                 <div className="text-2xl">{items.name}</div>

//                 <div className="flex items-center gap-1 text-sm font-bold">
//                   <FaStar size={16} />
//                   {items.rating}
//                 </div>
//               </div>
//               <div className="w-fit p-3">
//                 <div
//                   className="flex items-center bg-pink-400 text-black px-4 py-1 font-medium"
//                   style={{
//                     clipPath:
//                       "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%, 0 0)",
//                   }}
//                 >
//                   <MdCurrencyRupee />
//                   {items.price}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </section>
//       <div className="flex justify-center mt-8">
//         <button
//           className="cursor-pointer items-center rounded-sm
//             border border-black bg-white px-4 py-2 text-lg transition-all shadow-none
//             hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
//             hover:-translate-y-2 hover:-translate-x-2
//             active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
//         >
//           Load more
//         </button>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { FaStar } from "react-icons/fa";
import { useAuthContext } from "@/context/AuthContext";
import Image from "next/image";
import { MdCurrencyRupee } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import skeleton styles

export default function OnTheMarketItems() {
  const { products = [] } = useAuthContext();
  const isLoading = products.length === 0; // Check if data is loading

  console.log(products);

  return (
    <div>
      <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {isLoading
          ? // Render skeletons when data is loading
            Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="object-cover rounded-md shadow-none
                  hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                  active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
              >
                <div className="w-64 h-120 border rounded-sm bg-white shadow-sm hover:shadow-md transition overflow-hidden">
                  {/* Skeleton for image */}
                  <div className="w-full h-60 border-b flex items-center justify-center bg-gray-100">
                    <Skeleton width={230} height={205} />
                  </div>
                  {/* Skeleton for text */}
                  <div className="w-full h-45 border-b flex flex-col justify-between px-6 py-4">
                    <Skeleton width="80%" height={24} />
                    <Skeleton width="50%" height={16} />
                  </div>
                  {/* Skeleton for price */}
                  <div className="w-fit p-3">
                    <Skeleton width={100} height={30} />
                  </div>
                </div>
              </div>
            ))
          : // Render products when data is available
            products.map((items, index) => (
              <div
                key={index}
                className="object-cover rounded-md cursor-pointer shadow-none
                  hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                  active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
              >
                <div className="w-64 h-120 border rounded-sm bg-white shadow-sm hover:shadow-md transition overflow-hidden">
                  <div className="w-full h-60 border-b flex items-center justify-center bg-gray-100">
                    <Image
                      src={items.image || "/fallback-image.jpg"}
                      alt={items.name || "Product missing"}
                      unoptimized
                      width={200}
                      height={200}
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <div className="w-full h-45 border-b flex flex-col justify-between px-6 py-4">
                    <div className="text-2xl">{items.name}</div>
                    <div className="flex items-center gap-1 text-sm font-bold">
                      <FaStar size={16} />
                      {items.rating}
                    </div>
                  </div>
                  <div className="w-fit p-3">
                    <div
                      className="flex items-center bg-pink-400 text-black px-4 py-1 font-medium"
                      style={{
                        clipPath:
                          "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%, 0 0)",
                      }}
                    >
                      <MdCurrencyRupee />
                      {items.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </section>
      <div className="flex justify-center mt-8">
        <button
          className="cursor-pointer items-center rounded-sm
            border border-black bg-white px-4 py-2 text-lg transition-all shadow-none
            hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
            hover:-translate-y-2 hover:-translate-x-2
            active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
        >
          Load more
        </button>
      </div>
    </div>
  );
}
