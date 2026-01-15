import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
  },
};

export default nextConfig;