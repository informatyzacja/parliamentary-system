export { default } from 'next-auth/middleware';

export const config = {
  matcher: [
    '/',
    '/resolutions',
    '/resolutions/:path*',
    '/struktura',
    '/sprawozdania',
    '/aktualnosci',
    '/posiedzenia',
    '/posiedzenia/:path*',
  ],
};
