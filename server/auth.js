'use strict';

const Boom = require('boom');

const people = { // our "users database"
  1: {
    id: 1,
    name: 'Jen Jones',
  },
};

// bring your own validation function
const validate = async function (decoded, request) {
  const user = JSON.parse(decoded.user);
  // do your checks to see if the person is valid
  if (!people[user.id]) {
    return { isValid: false };
  }
  return { isValid: true };
};

exports.plugin = {
  name: 'auth',
  version: '1.0.0',
  register: (server, options) => {
    server.auth.strategy('jwt', 'jwt',
      {
        key: Buffer(process.env.JWT_SECRET_KEY, 'base64'), // Never Share your secret key
        validate, // validate function defined above
        verifyOptions: { algorithms: ['HS256'] }, // pick a strong algorithm
        cookieKey: 'myTokenCookie.jwt', // token cookie
      });
  },
};
