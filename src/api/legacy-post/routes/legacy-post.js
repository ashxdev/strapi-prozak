'use strict';

/**
 * legacy-post router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::legacy-post.legacy-post');
