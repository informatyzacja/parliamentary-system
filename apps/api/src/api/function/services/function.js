'use strict';

/**
 * function service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::function.function');
