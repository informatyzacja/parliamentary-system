'use strict';

const { strict: assert } = require('assert');
const jwt = require('jsonwebtoken');

const getInitialProviders = ({ purest }) => ({
  async google({ accessToken }) {
    const google = purest({ provider: 'google' });

    return google
      .query('oauth')
      .get('tokeninfo')
      .qs({ accessToken })
      .request()
      .then(({ body }) => ({
        username: body.email.split('@')[0],
        email: body.email,
      }));
  },

  async usos({ accessToken, query }) {
    const OAuth = require('oauth').OAuth;

    const secrets = {
      CLIENT_ID: process.env['USOS_CLIENT_ID'],
      CLIENT_SECRET: process.env['USOS_CLIENT_SECRET'],
      BASE_URL: process.env['USOS_BASE_URL']?.replace(/\/$/, ''),
    };

    assert(secrets.CLIENT_ID, 'USOS_CLIENT_ID is not defined');
    assert(secrets.CLIENT_SECRET, 'USOS_CLIENT_SECRET is not defined');
    assert(secrets.BASE_URL, 'USOS_BASE_URL is not defined');

    const client = new OAuth(
      '',
      '',
      secrets.CLIENT_ID,
      secrets.CLIENT_SECRET,
      '1.0',
      null,
      'HMAC-SHA1'
    );
    return new Promise((resolve, reject) => {
      client.getProtectedResource(
        `${secrets.BASE_URL}/services/users/user?fields=student_number|email`,
        'GET',
        query.oauth_token,
        query.oauth_token_secret,
        (error, data) => {
          if (error) {
            reject(error);
          } else {
            data = JSON.parse(data);
            resolve({
              username: data.student_number,
              email: data.email,
            });
          }
        }
      );
    });
  },
});

module.exports = () => {
  const purest = require('purest');

  const providersCallbacks = getInitialProviders({ purest });

  return {
    register(providerName, provider) {
      assert(
        typeof providerName === 'string',
        'Provider name must be a string'
      );
      assert(
        typeof provider === 'function',
        'Provider callback must be a function'
      );

      providersCallbacks[providerName] = provider({ purest });
    },

    async run({ provider, accessToken, query, providers }) {
      if (!providersCallbacks[provider]) {
        throw new Error('Unknown provider.');
      }

      const providerCb = providersCallbacks[provider];

      return providerCb({ accessToken, query, providers });
    },
  };
};
