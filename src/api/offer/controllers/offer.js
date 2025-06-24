"use strict";

/**
 * offer controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::offer.offer", ({ strapi }) => ({
  async createAndDelete(ctx) {
    try {
      const body = ctx.request.body;
      body.data.publishedAt = new Date().getTime();
      const idToDelete = ctx.request.params.id;
      await strapi.entityService.create("api::offer.offer", body);
      await strapi.entityService.delete("api::offer.offer", idToDelete);
      return { message: "One offer has been deleted and one has been created" };
    } catch (error) {
      ctx.response.status = 500;
      return { message: error.message };
    }
  },
}));
