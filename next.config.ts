import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  turbopack: {
    // Ensure Turbopack treats this folder as the workspace root (prevents lockfile mis-detection)
    root: __dirname,
  },
};

export default nextConfig;
