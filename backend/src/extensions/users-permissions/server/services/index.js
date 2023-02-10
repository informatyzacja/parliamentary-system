'use strict';

const jwt = require('@strapi/plugin-users-permissions/server/services/jwt');
const providers = require('./providers');
const providersRegistry = require('./providers-registry');
const user = require('@strapi/plugin-users-permissions/server/services/user');
const role = require('@strapi/plugin-users-permissions/server/services/role');
const usersPermissions = require('@strapi/plugin-users-permissions/server/services/users-permissions');

module.exports = {
  jwt,
  providers,
  role,
  user,
  'providers-registry': providersRegistry,
  'users-permissions': usersPermissions,
};
