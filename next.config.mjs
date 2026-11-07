import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mir-s3-cdn-cf.behance.net",
      },
      {
        protocol: "https",
        hostname: "mir-cdn.behance.net",
      },
    ],
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  async headers() {
    const cached = [
      { key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" },
    ];
    return [
      { source: "/images/:path*", headers: cached },
      { source: "/fonts/:path*", headers: cached },
      { source: "/trademark/:path*", headers: cached },
    ];
  },
};

export default withMDX(nextConfig);
