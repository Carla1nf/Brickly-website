/** @type {import('next').NextConfig} */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  fallback: false,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push("pino-pretty", "lokijs", "encoding");

    return config;
  },
};

module.exports = nextConfig;
