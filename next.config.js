/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allows access to github user avatars
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      }
    ]
  }
}

module.exports = nextConfig