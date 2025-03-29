/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/uc**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Google Drive images sometimes load from here
        pathname: "/**",
      },
    ],
    unoptimized: true, // Required for static export mode
  },
  output: "export",
};

export default nextConfig;