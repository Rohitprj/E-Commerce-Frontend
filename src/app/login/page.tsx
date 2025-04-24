"use client";

import axios, { AxiosError } from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { BASE_URL } from "../../../utils/axiosInstance";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const api = `${BASE_URL}/auth/logIn`;

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const { user } = useAuthContext();
  console.log("UserLogInData", user);

  function validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  // if (router && !user.isLoading && user.isLoggedIn) {
  //   router.replace("/");
  // }

  async function loginApi(): Promise<void> {
    setLoading(true);
    setError("");
    setSuccess("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        api,
        { email, password },
        { withCredentials: true }
      );
      console.log("data", response.data);
      setSuccess("Login Successfully!");
      setEmail("");
      setPassword("");
      router.push("/");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError<{ message: string }>;
        setError(axiosError.response?.data?.message || "An error occurred.");
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  }

  // return user.isLoading ? null : (
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col gap-4 p-8 rounded-md w-full max-w-md bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-2">Log In</h2>

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
          onClick={loginApi}
          disabled={loading}
          className={`flex items-center justify-center gap-2 px-4 py-2 text-white 
            rounded-sm font-semibold transition ${
              loading ? "bg-gray-600" : "bg-black hover:bg-gray-900"
            }`}
        >
          {loading ? "..." : "Log in"}
        </button>

        <div className="flex justify-center">
          <h1>
            New user{" "}
            <Link href="/signup">
              <button className="cursor-pointer underline font-bold">
                Sign up
              </button>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
