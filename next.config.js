/** @type {import('next').NextConfig} */

const nextConfig = {
  // TODO: remove later
  images: {
    domains: ["i.pravatar.cc", "picsum.photos"],
  },
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SITE: "http://localhost:3000",
    NEXTAUTH_URL: "http://localhost:3000",
  },
};

module.exports = nextConfig;
