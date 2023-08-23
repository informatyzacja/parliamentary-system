export { default } from 'next-auth/middleware';

export const config = {
  matcher: [
    '/',
    '/resolutions',
    '/resolutions/:path*',
    '/structure',
    '/meetings',
    '/meetings/:path*',
  ],
};
