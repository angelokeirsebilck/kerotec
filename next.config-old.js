const withPlugins = require("next-compose-plugins");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["angelokeirsebilck.ams3.cdn.digitaloceanspaces.com"],
    formats: ["image/avif", "image/webp"],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 450, 575],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = withPlugins([], nextConfig);
