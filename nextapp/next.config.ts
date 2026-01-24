import type { NextConfig } from "next";

const nextConfig: NextConfig = {
<<<<<<< HEAD
  images: {
    domains: ["fakestoreapi.com"],
=======
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "h5p.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "letsenhance.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.bigfootdigital.co.uk",
        pathname: "/**",
      },
    ],
>>>>>>> 010bd33abdf750b4a407999565144f7e6bb27064
  },
};

export default nextConfig;