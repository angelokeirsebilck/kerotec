/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["angelokeirsebilck.ams3.cdn.digitaloceanspaces.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
