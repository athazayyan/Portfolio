import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Membuat keluaran statis untuk export
  basePath: '/Portfolio', // Sesuaikan dengan nama repository Anda
  assetPrefix: '/Portfolio/', // Agar asset diarahkan ke URL GitHub Pages yang benar
  reactStrictMode: true,
};

export default nextConfig;
