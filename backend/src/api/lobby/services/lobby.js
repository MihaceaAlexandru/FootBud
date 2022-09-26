'use strict';

/**
 * lobby service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lobby.lobby');
