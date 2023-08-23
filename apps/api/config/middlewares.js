module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'frame-ancestors': ["'self'", process.env.WEB_URL],
        },
      },
      frameguard: false,
    },
  },
  'strapi::cors',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  {
    name: 'strapi::session',
    config: {
      maxAge: 2592000,
    },
  },
  'strapi::favicon',
  'strapi::public',
];
