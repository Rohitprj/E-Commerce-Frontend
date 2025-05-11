import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["www.google.com", "ringke.co.in"], // Add allowed domains here
  },
};

export default nextConfig;
