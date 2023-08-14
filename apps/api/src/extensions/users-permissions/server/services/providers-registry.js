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
      USOS_CLIENT_ID: process.env.USOS_CLIENT_ID,
      USOS_CLIENT_SECRET: process.env.USOS_CLIENT_SECRET,
      USOS_BASE_URL: process.env.NEXT_PUBLIC_USOS_BASE_URL?.replace(/\/$/, ''),
      USOS_SCOPES: process.env.NEXT_PUBLIC_USOS_SCOPES,
      USOS_FIELDS: process.env.NEXT_PUBLIC_USOS_FIELDS,
    };

    assert(secrets.USOS_CLIENT_ID, 'USOS_CLIENT_ID is not defined');
    assert(secrets.USOS_CLIENT_SECRET, 'USOS_CLIENT_SECRET is not defined');
    assert(secrets.USOS_BASE_URL, 'USOS_BASE_URL is not defined');
    assert(secrets.USOS_SCOPES, 'USOS_SCOPES is not defined');
    assert(secrets.USOS_FIELDS, 'USOS_FIELDS is not defined');

    const client = new OAuth(
      '',
      '',
      secrets.USOS_CLIENT_ID,
      secrets.USOS_CLIENT_SECRET,
      '1.0',
      null,
      'HMAC-SHA1',
    );
    return new Promise((resolve, reject) => {
      client.getProtectedResource(
        `${secrets.USOS_BASE_URL}/services/users/user?fields=${secrets.USOS_FIELDS}`,
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
              first_name: data.first_name,
              last_name: data.last_name,
              student_number: data.student_number,
            });
          }
        },
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
        'Provider name must be a string',
      );
      assert(
        typeof provider === 'function',
        'Provider callback must be a function',
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
