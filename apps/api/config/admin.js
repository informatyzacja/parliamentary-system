module.exports = ({ env }) => ({
  transfer: {
    token: {
      salt: env('API_TOKEN_SALT', 'salt'),
    },
  },
  auth: {
    secret: env('JWT_SECRET', 'secret'),
  },
  apiToken: {
    salt: env('AUTH_SECRET', 'secret'),
  },
});
