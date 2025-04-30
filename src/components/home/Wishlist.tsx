import React from "react";
import { wishlist } from "../../../utils/DummyWishlist";

export default function Wishlist() {
  return (
    <div className="px-22 py-6 bg-gray-100 pt-16">
      <div className="text-2xl font-medium mb-6">Wishlists you might like</div>
      {/* Grid layout with 2 items per row */}
      <div className="grid grid-cols-2 gap-6">
        {wishlist.map((items, index) => (
          <div
            key={index}
            className="rounded-md cursor-pointer shadow-none
              hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
              active:translate-x-[3px] active:translate-y-[3px] active:shadow-none
              transition-transform"
          >
            <div className="w-full h-60 border rounded-sm bg-white shadow-sm hover:shadow-md transition overflow-hidden">
              <div className="w-full h-full overflow-hidden">
                <img
                  src={items.image}
                  alt={items.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="font-medium text-lg">{items.name}</div>
                <div className="text-gray-600">${items.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
