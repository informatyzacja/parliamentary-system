module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  dirs: {
    public: env('STRAPI_PUBLIC_FOLDER', './public'),
  },
  app: {
    keys: env.array('APP_KEYS', ['key']),
  },
  webhooks: {
    populateRelations: false,
  },
});
