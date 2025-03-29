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
  },
  output: "export",
};

export default nextConfig;