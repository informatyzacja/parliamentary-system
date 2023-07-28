'use strict';

/**
 * Module dependencies
 */

// Public node modules.
const _ = require('lodash');
const urlJoin = (...args) =>
  import('url-join').then(({ default: urlJoin }) => urlJoin(...args));

const { getAbsoluteServerUrl } = require('@strapi/utils');
const { getService } = require('@strapi/plugin-users-permissions/server/utils');

module.exports = ({ strapi }) => {
  /**
   * Helper to get profiles
   *
   * @param {String}   provider
   */

  const getProfile = async (provider, query) => {
    const accessToken = query.access_token || query.code || query.oauth_token;

    const providers = await strapi
      .store({ type: 'plugin', name: 'users-permissions', key: 'grant' })
      .get();

    return getService('providers-registry').run({
      provider,
      query,
      accessToken,
      providers,
    });
  };

  const checkStudentPermissions = async (profile) => {
    const global = await strapi.query('api::global.global').findOne({});

    if (_.isEmpty(global.private_config.allowed_student_numbers)) {
      throw new Error('Allowed student numbers missing in config.');
    }

    const newStudentNumber = parseInt(profile.student_number);

    const isStudentAllowed = global.private_config.allowed_student_numbers.find(
      (allowedStudentNumber) => newStudentNumber === allowedStudentNumber,
    );

    if (!isStudentAllowed) {
      throw new Error('You are not allowed to create an account');
    }
  };

  const createOrUpdateStudent = async (studentData) => {
    const student = await strapi.query('api::student.student').findOne({
      where: { student_number: studentData.student_number },
    });

    if (_.isEmpty(student)) {
      strapi.query('api::student.student').create({ data: studentData });
    } else {
      strapi.query('api::student.student').update({
        where: { student_number: studentData.student_number },
        data: studentData,
      });
    }
  };

  /**
   * Connect thanks to a third-party provider.
   *
   *
   * @param {String}    provider
   * @param {String}    accessToken
   *
   * @return  {*}
   */

  const connect = async (provider, query) => {
    const accessToken = query.access_token || query.code || query.oauth_token;

    if (!accessToken) {
      throw new Error('No access_token.');
    }

    // Get the profile.
    const profile = await getProfile(provider, query);

    const email = _.toLower(profile.email);

    // We need at least the mail.
    if (!email) {
      throw new Error('Email was not available.');
    }

    const users = await strapi
      .query('plugin::users-permissions.user')
      .findMany({
        where: { email },
      });

    const advancedSettings = await strapi
      .store({ type: 'plugin', name: 'users-permissions', key: 'advanced' })
      .get();

    const user = _.find(users, { provider });

    if (_.isEmpty(user) && !advancedSettings.allow_register) {
      throw new Error('Register action is actually not available.');
    }

    await checkStudentPermissions(profile);

    // Student record auto creation
    let studentData;

    let newProfile = profile;

    if (provider === 'usos') {
      studentData = {
        name: profile.first_name,
        surname: profile.last_name,
        student_number: profile.student_number,
      };

      newProfile = {
        username: profile.username,
        email: profile.email,
      };
    }

    if (!_.isEmpty(user)) {
      // temporary relation fix until every user login for the first time
      if (provider === 'usos') {
        createOrUpdateStudent({
          ...studentData,
          user: {
            connect: [user.id],
          },
        });
      }

      return user;
    }

    if (users.length > 1 && advancedSettings.unique_email) {
      throw new Error('Email is already taken.');
    }

    // Retrieve default role.
    const defaultRole = await strapi
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: advancedSettings.default_role } });

    // Create the new user.
    const newUser = {
      ...newProfile,
      email, // overwrite with lowercased email
      provider,
      role: defaultRole.id,
      confirmed: true,
    };

    const createdUser = await strapi
      .query('plugin::users-permissions.user')
      .create({ data: newUser });

    if (provider === 'usos') {
      createOrUpdateStudent({
        ...studentData,
        user: {
          connect: [createdUser.id],
        },
      });
    }

    return createdUser;
  };

  const buildRedirectUri = (provider = '') => {
    const apiPrefix = strapi.config.get('api.rest.prefix');
    return urlJoin(
      getAbsoluteServerUrl(strapi.config),
      apiPrefix,
      'connect',
      provider,
      'callback',
    );
  };

  return {
    connect,
    buildRedirectUri,
  };
};
