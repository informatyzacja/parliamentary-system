'use strict';

/**
 * meeting service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::meeting.meeting');
