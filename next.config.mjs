/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.timbu.cloud",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
