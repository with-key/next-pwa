const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache.js"); //

const isProduction = process.env.NODE_ENV === "production";

const config = {
  reactStrictMode: true,
};

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  dest: "public",
  customWorkerDir: "src/worker",
  // disable: !isProduction,
  runtimeCaching: [], // 빈배열을 넣으면 기본값 설정
  // runtimeCaching: runtimeCaching,
})(config);

module.exports = nextConfig;
