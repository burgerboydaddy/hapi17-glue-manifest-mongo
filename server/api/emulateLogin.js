'use strict';

const JWT = require('jsonwebtoken');
const Boom = require('boom');
const utl = require('../../lib/utl');

const testUser = {
  id: 1,
  name: 'Jen Jones',
};

exports.plugin = {
  name: 'emulateLogin',
  version: '1.0.0',
  register: (server, options) => {
    server.route({
      method: 'GET',
      path: '/api/emulateLogin',
      config: {
        auth: false,
        description: 'Emulate login, just for test purpose create valid auth token',
        tags: ['api', 'auth'],
      },
      handler: async (request, h) => {
        const user = JSON.stringify(testUser);
        const key = Buffer(process.env.JWT_SECRET_KEY, 'base64');
        const secretKey = utl.randomString(48, '#aA');
        const token = JWT.sign({
          user,
          key: secretKey,
          exp: Math.floor(new Date().getTime() / 1000) + 21600, // token will expire in 6h
        }, key);
        return h.response({ text: 'You used a Token!', userToken: token });
          // .header('Authorization', token)
          // .header('Access-Control-Expose-Headers', 'Authorization');
      },
    });
  },
};
