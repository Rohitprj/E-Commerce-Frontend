import { Mail, Smile, DollarSign, Globe } from "lucide-react";
import Footer from "@/components/footer/Footer";
import Footer2 from "@/components/footer/Footer2";
import Header from "@/components/home/Header";
import React from "react";

export default function page() {
  return (
    <div>
      <Header />
      <div className="flex w-full h-128 border-black border-b-1">
        <div className="flex items-center justify-center h-full w-1/2 bg-black relative">
          {/* Central Follow Button */}
          <div className="relative z-10">
            <button className="bg-white text-black px-4 py-2 rounded shadow">
              Follow
            </button>

            {/* Top Line */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-0 h-20 border-dashed border-l-2 border-white"></div>
            {/* Top Icon */}
            <div className="absolute -top-38 left-1/2 transform -translate-x-1/2 bg-teal-600 p-4 rounded-full">
              <Mail className="text-white" size={38} />
            </div>

            {/* Bottom Line */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-20 border-dashed border-l-2 border-white"></div>
            {/* Bottom Icon */}
            <div className="absolute top-[124px] left-1/2 transform -translate-x-1/2 bg-gray-300 p-4 rounded-full">
              <Globe className="text-black" size={38} />
            </div>

            {/* Left Line */}
            <div className="absolute top-1/2 -left-20 transform -translate-y-1/2 w-20 h-0 border-dashed border-t-2 border-white"></div>
            {/* Left Icon */}
            <div className="absolute top-1/2 -left-38 transform -translate-y-1/2 bg-yellow-400 p-4 rounded-full">
              <Smile className="text-black" size={38} />
            </div>

            {/* Right Line */}
            <div className="absolute top-1/2 left-full transform -translate-y-1/2 w-20 h-0 border-dashed border-t-2 border-white"></div>
            {/* Right Icon */}
            <div className="absolute top-1/2 left-[156px] transform -translate-y-1/2 bg-pink-400 p-4 rounded-full">
              <DollarSign className="text-black" size={38} />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center h-full w-1/2">
          <div className="text-5xl mb-3">Sell to anyone</div>
          <div className="text-2xl font-normal w-2/3">
            Welcome to our eCommerce platform where anyone can easily sell their
            products online. Create your store, list items, and reach a wide
            audience. Whether handmade goods or new gadgets, start selling today
            and grow your business with us!
          </div>
        </div>
      </div>
      <Footer2 />
      <Footer />
    </div>
  );
}
