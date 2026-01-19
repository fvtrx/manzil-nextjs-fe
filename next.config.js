/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Force new build IDs to bust cache
  generateBuildId: async () => {
    return `v2-${Date.now()}`;
  },
};

module.exports = nextConfig;
