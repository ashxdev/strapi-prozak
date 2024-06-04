'use strict';

/**
 * legacy-post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::legacy-post.legacy-post');
