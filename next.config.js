/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    return config;
  },
  outputFileTracing: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.halal.io",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "static.ghost.org",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cms.thetechmaze.me",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cms.halal.io",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
