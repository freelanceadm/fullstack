import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone', // This is the magic line for Docker
};

export default nextConfig;
