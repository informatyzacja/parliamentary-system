/**
 * global service
 */

const factories = require('@strapi/strapi').factories;

module.exports = factories.createCoreService('api::global.global');
