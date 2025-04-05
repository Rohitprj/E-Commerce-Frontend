import React from "react";
import {
  FaArrowRight,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="py-26 px-16 bg-black h-135">
      <div className="flex bg-amber-300 gap-12">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl w-[550px] text-white">
            Subscribe to get tips and tactics to grow the way you want.
          </h1>
          <div className="flex gap-1">
            <div className="flex border border-b-black w-[520px] py-2 px-2 rounded-sm bg-white">
              {/* Input Area */}
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search Products"
                className="h-7 w-full px-2 border-0 outline-none"
              />
            </div>
            <div className="p-4 border-1 rounded-sm bg-pink-400">
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="w-full bg-blue-200 flex flex-col justify-between">
          {/* make this both div space between */}
          <div className="flex justify-between">
            <li className="w-1/2 list-none font-bold text-white">
              <ul>Taxes</ul>
              <ul>Terms of services</ul>
              <ul>Privacy policy</ul>
            </li>
            <li className="w-1/2 list-none font-bold text-white">
              <ul>Features</ul>
              <ul>Pricing</ul>
              <ul>About</ul>
            </li>
          </div>
          <div className="flex gap-16 ">
            <FaLinkedin color="white" size={30} />
            <FaGithub color="white" size={30} />
            <FaInstagram color="white" size={30} />
            <FaTwitter color="white" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}
