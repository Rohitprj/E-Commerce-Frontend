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
      <div className="flex gap-16">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-5xl w-[550px] text-white">
              Subscribe to get tips and tactics to grow the way you want.
            </h1>
            <div className="flex gap-1 mt-12">
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
          <div className="flex">
            <h1 className="font-bold text-white text-[18px]">Shopster, Inc.</h1>
          </div>
        </div>
        <div className="w-full flex flex-col justify-between gap-58">
          {/* make this both div space between */}
          <div className="flex justify-between">
            <li className="w-1/2 list-none font-bold text-white leading-8 ">
              <ul>Taxes</ul>
              <ul>Terms of services</ul>
              <ul>Privacy policy</ul>
            </li>
            <li className="w-1/2 list-none font-bold text-white leading-8">
              <ul>Features</ul>
              <ul>Pricing</ul>
              <ul>About</ul>
            </li>
          </div>
          <div className="flex gap-26 ">
            <a
              href="https://www.linkedin.com/in/rohit-kumar-4b5800218/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin color="white" size={30} />
            </a>
            <a
              href="https://github.com/Rohitprj"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub color="white" size={30} />
            </a>
            <a
              href="https://www.instagram.com/ro.hit1282/?utm_source=qr&igsh=MXRqdHFmdXAyMWNxMw%3D%3D#"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram color="white" size={30} />
            </a>
            <a
              href="https://x.com/Rohitkumar2OO1?t=VNeYMTFuVpzEQIeJkiNf-w&s=08"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter color="white" size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
