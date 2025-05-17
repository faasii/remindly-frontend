import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
        return [
            {
                source: '/backend/:path*',
                destination: `${process.env.BACKEND_URL}/api/:path*` // Proxy to Backend
            },
        ]
    },
};

export default nextConfig;
