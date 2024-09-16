// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["picsum.photos"], // No external domains since we're using local images exclusively
    },
    reactStrictMode: true,
    // Add other configurations if necessary
};

module.exports = nextConfig;
