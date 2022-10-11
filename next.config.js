/** @type {import('next').NextConfig} */
module.exports = {
  nextConfig: {
    reactStrictMode: true,
    swcMinify: true,
  },
  images: {
    protocol: "https",
    domains: ["raw.githubusercontent.com"],
    hostname: "raw.githubusercontent.com",
  },
};

// (module.exports = nextConfig, images);
