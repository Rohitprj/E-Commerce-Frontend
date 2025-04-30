import React from "react";
import { products } from "../../../utils/DummyProducts";

export default function OnTheMarketItems() {
  return (
    <div>
      <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((items, index) => (
          <div
            key={index}
            className="object-cover rounded-md cursor-pointer shadow-none 
                  hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                  active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
          >
            <div className="w-64 h-120 border rounded-sm bg-white shadow-sm hover:shadow-md transition overflow-hidden">
              <div className="w-full h-60 border-b flex items-center justify-center bg-gray-100">
                <img
                  src={items.image}
                  alt={items.name}
                  className="h-full object-contain"
                />
              </div>
              <div className="w-full h-45 border-b flex items-center justify-center text-center px-2">
                {items.name}
              </div>
              <div className="p-2 text-center font-semibold">
                ${items.price}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
