// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/:path*",
                destination: "/pages/:path*",
            },
        ];
    },
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
