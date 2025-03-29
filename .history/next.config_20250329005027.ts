/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Ensure this matches Cloudinary's domain
        pathname: "/your-cloud-name/**",
      },
    ],
    unoptimized: true, // Disable Next.js Image Optimization
  },
  output: "export",
};

export default nextConfig;