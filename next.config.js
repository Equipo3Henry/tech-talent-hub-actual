/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "plus.unsplash.com"],
  },
  env: {
    URL_DEPLOY: process.env.URL_DEPLOY,
  },
};

module.exports = nextConfig;
