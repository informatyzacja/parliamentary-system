'use strict';

/**
 * term-of-office service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::term-of-office.term-of-office');
