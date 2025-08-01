import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },

  webpack(config) {
    // Add SVGR support for importing SVGs as React components
    config.module.rules.push({
    test: /\.svg$/,
    issuer: {
      and: [/\.(js|ts)x?$/], // ✅ restrict to React files only
    },
    use: ['@svgr/webpack'],
  })

    return config
  },
}

export default nextConfig
