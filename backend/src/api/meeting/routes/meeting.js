'use strict';

/**
 * meeting router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::meeting.meeting');
