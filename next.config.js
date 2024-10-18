// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "picsum.photos",
            },
        ],
    },
    reactStrictMode: true,
    // Add other configurations if necessary
};

module.exports = nextConfig;
