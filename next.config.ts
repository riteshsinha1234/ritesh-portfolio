import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // required for 'output: export'
    remotePatterns: [
      {
        protocol: "https", // optional but good to include
        hostname: "media2.dev.to",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
