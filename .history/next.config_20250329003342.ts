import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.discordapp.net",
        pathname: "/**",
      },
    ],
    unoptimized: true, // Disable Next.js Image Optimization
  },
  output: "export",
};

export default nextConfig;