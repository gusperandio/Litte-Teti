/** @type {import('next').NextConfig} */


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '',
        pathname: '/image/upload/**',
      },
    ],
    reactStrictMode: true
  },
}
module.exports = nextConfig
