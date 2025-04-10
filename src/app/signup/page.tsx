"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function SignupPage() {
  const api = "https://backend.rohitkumar.site/auth/signUp";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function validateEmail(email: string) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  async function signupApi() {
    setLoading(true);
    setError("");
    setSuccess("");

    // Email format validation
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Account created successfully!");
        setEmail("");
        setPassword("");
      } else {
        setError(data.message || "Signup failed.");
      }
    } catch (err: unknown) {
      console.log(err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-200">
      <div className="flex flex-col gap-4 p-8 rounded-md w-full max-w-md bg-white shadow-md">
        <h2 className="text-2xl font-bold text-center mb-2">Sign Up</h2>

        {error && <p className="text-red-600">{error}</p>}
        {success && <p className="text-green-600">{success}</p>}

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

        <button
          onClick={signupApi}
          disabled={loading}
          className={`flex items-center justify-center gap-2 px-4 py-2 text-white 
            rounded-sm font-semibold transition ${
              loading ? "bg-gray-600" : "bg-black hover:bg-gray-900"
            }`}
        >
          {loading ? "Creating..." : "Create Account"}
        </button>

        <div className="flex justify-center mt-2">
          <h1>
            Already have an account?{" "}
            <Link href="/login">
              <button className="cursor-pointer underline font-bold ml-1">
                Log in
              </button>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
