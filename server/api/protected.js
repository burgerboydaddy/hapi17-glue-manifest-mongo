'use strict';

const Boom = require('boom');

exports.plugin = {
  name: 'protectedAPI',
  version: '1.0.0',
  register: (server, options) => {
    server.route({
      method: 'GET',
      path: '/api/protected',
      config: {
        auth: 'jwt',
        description: 'Path to check is auth working',
        tags: ['api', 'auth'],
      },
      handler: async (request, h) => h.response({ text: 'You used a Token!' }).header('Authorization', request.headers.authorization),
    });
  },
};
