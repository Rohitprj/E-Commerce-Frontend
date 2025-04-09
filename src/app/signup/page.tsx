"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col gap-4 p-8 rounded-md w-full max-w-md">
        <label className="font-medium">Email</label>
        <div className="flex border border-black rounded-sm bg-white px-2 py-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full outline-none border-0 px-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <label className="font-medium">Password</label>
        <div className="flex border border-black rounded-sm bg-white px-2 py-2">
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full outline-none border-0 px-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-sm font-semibold hover:bg-gray-900 transition">
          Create Account
          {/* <FaArrowRight /> */}
        </button>
        <div className="flex justify-center">
          <h1>
            Already have an account{" "}
            <Link href={"login"}>
              <button className="cursor-pointer underline font-bold">
                Log in
              </button>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
