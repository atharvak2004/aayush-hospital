/** @type {import('next').NextConfig} */
const nextConfig = {
    allowedDevOrigins: [
        '192.168.1.35',
        'gratis-map-resolved-medieval.trycloudflare.com',
    ],
    turbopack: {},
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
};

module.exports = nextConfig;