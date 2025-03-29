import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Disables Next.js image optimization for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
  },
  output: "export",
};

export default nextConfig;
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "drive.google.com",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "lh3.googleusercontent.com",
//         pathname: "/**",
//       },
//     ],
//   },
//   output: "export",
// };

// export default nextConfig;