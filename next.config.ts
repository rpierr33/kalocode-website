import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@prisma/client", ".prisma/client"],
  async redirects() {
    return [
      {
        source: "/project/:slug",
        destination: "/projects/:slug",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
