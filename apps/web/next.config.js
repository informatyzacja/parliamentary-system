/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const nextSafe = require('next-safe');

const isDev = process.env.NODE_ENV === 'development';

const config = {
  isDev,
  contentSecurityPolicy: {
    'connect-src': [
      "'self'",
      process.env.NEXT_PUBLIC_API_URL,
      process.env.NEXT_PUBLIC_USOS_BASE_URL,
      process.env.NEXT_PUBLIC_OAUTH_DOMAIN,
    ],
    'object-src': ["'self'", process.env.NEXT_PUBLIC_API_URL],
    'frame-src': ["'self'", process.env.NEXT_PUBLIC_API_URL],
    'style-src': ["'self'", "'unsafe-inline'"],
    'prefetch-src': false,
  },
};

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  output: 'standalone',

  async headers() {
    return [
      {
        source: '/:path*',
        headers: nextSafe({ ...config }),
      },
    ];
  },
};

module.exports = nextConfig;
