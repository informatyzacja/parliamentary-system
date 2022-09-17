'use strict';

/**
 * meeting controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::meeting.meeting');
