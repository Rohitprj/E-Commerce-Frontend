import React from "react";
import { wishlist } from "../../../utils/DummyWishlist";
import { LuBookmarkPlus } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";

export default function Wishlist() {
  return (
    <div className="px-4 md:px-22 py-6 bg-gray-100 pt-16 pb-12">
      <div className="text-2xl font-medium mb-6">Wishlists you might like</div>

      <div className="flex flex-wrap -mx-3">
        {wishlist.map((items, index) => (
          <div key={index} className="w-full sm:w-1/2 px-3 mb-6">
            <div
              className="flex border rounded-md bg-white overflow-hidden
              cursor-pointer shadow-none hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
              active:translate-x-[3px] active:translate-y-[3px] active:shadow-none
              transition-transform h-[200px]"
            >
              {/* Image Section */}
              <div className="w-1/3 h-full border-r overflow-hidden">
                <Image
                  src={items.image}
                  alt={items.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="w-2/3 p-4 flex flex-col justify-between">
                <div className="font-medium text-lg truncate">{items.name}</div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-1.5">
                    <FaRegHeart size={19} />
                    <p className="font-medium">{items.likes}</p>
                  </div>
                  <LuBookmarkPlus size={24} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
