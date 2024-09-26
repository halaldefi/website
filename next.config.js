/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    return config;
  },
  outputFileTracing: false,
};

module.exports = nextConfig;
