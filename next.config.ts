import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,  // ✅ Tambah ini
  },
};

export default nextConfig;
