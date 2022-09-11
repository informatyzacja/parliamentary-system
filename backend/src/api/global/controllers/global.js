/**
 * global controller
 */

const factories = require('@strapi/strapi').factories;

module.exports = factories.createCoreController('api::global.global');
