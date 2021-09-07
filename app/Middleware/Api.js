'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

class Api {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {Function} next
   */
  async handle ({ request, response }, next) {
    if (request.accepts(['json']) !== 'json' || !request.ajax()) {
      return response.status(403).send('Stupid Request!');
    }
    // call next to advance the request
    await next();
  }
}

module.exports = Api;
