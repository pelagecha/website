// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            // Only rewrite specific paths that don't conflict with app directory
            {
                source: "/api/:path*",
                destination: "/pages/api/:path*",
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
};

module.exports = nextConfig;
