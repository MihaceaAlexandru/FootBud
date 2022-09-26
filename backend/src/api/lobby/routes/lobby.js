'use strict';

/**
 * lobby router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::lobby.lobby');
