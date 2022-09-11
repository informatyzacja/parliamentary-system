/**
 * term-of-office service
 */

const factories = require('@strapi/strapi').factories;

module.exports = factories.createCoreService(
  'api::term-of-office.term-of-office'
);
