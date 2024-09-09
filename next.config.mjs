import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ["lucide-react"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default withPlaiceholder(nextConfig);
