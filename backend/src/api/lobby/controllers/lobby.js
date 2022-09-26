'use strict';

/**
 * lobby controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::lobby.lobby');
