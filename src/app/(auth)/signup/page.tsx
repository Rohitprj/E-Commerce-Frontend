"use client";

import axios, { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";
import React, { useState } from "react";
import { BASE_URL } from "../../../../utils/axiosInstance";
import { validateEmail } from "../../../../utils/validateEmail";

export default function SignupPage() {
  const router = useRouter();
  const signUpApi = `${BASE_URL}/auth/signUp`;
  const loginApi = `${BASE_URL}/auth/logIn`;

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const { user, setUser } = useAuthContext();
  console.log("UserSignUpData", user);

  async function signupApi(): Promise<void> {
    setLoading(true);
    setError("");
    setSuccess("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      const signUpResponse = await axios.post(
        signUpApi,
        { email, password },
        { withCredentials: true }
      );

      const loginResponse = await axios.post(
        loginApi,
        { email, password },
        { withCredentials: true }
      );

      console.log("Signup Response:", signUpResponse.data);
      console.log("Login Response:", loginResponse.data);

      setSuccess("Signup successfully!");
      if (signUpResponse.status && loginResponse.status === 200) {
        const userData = signUpResponse.data;
        setUser({
          email: userData.email,
          isLoggedIn: true,
          isLoading: false,
        });
      }
      setEmail("");
      setPassword("");

      // Redirect after success
      router.push("/");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const axiosErr = err as AxiosError<{ message: string }>;
        setError(axiosErr.response?.data?.message || "An error occurred.");
      } else {
        setError("Something went wrong. Please try again later.");
      }
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
