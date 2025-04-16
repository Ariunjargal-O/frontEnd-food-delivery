import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*",
        protocol: "https",
      },
    ],
  },
  env: {
    BASE_URL: process.env.BASE_URL || "",
  },
  /* config options here */
};

export default nextConfig;
