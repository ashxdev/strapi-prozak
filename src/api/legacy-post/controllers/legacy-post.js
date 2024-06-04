'use strict';

/**
 * legacy-post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::legacy-post.legacy-post');
