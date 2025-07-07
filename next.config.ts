import type { NextConfig } from "next";

const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: `/images/${SANITY_PROJECT_ID}/**`,
        search: "",
      },
    ],
  },
};

export default nextConfig;
