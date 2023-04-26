/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.scdn.co"],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
};

module.exports = nextConfig;
