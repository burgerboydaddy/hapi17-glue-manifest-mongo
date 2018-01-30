'use strict';

/* $lab:coverage:off$ */
// Global server instance identifier
const shortid = require('shortid');
// use $ instead of -
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_');
shortid.seed(Math.floor(Math.random() * 90000) + 9999);
if (process.env.GIT_COMMIT_SHA) {
  const serverID = `${process.env.GIT_COMMIT_SHA.substring(0, 8)}-${shortid.generate()}`;
  global.serverID = serverID;
} else {
  const serverID = `A0123456789B-${shortid.generate()}`;
  global.serverID = serverID;
}

// Load .env config for development environments
require('dotenv').config();

console.info('All configurations loaded');

const Confidence = require('confidence');

const criteria = {
  env: process.env.NODE_ENV,
  cacheOnOff: process.env.CACHEONOFF || 'cacheOff',
};

const config = {
  $meta: 'This file configures the template-api server.',
  projectName: 'template-api',
  port: {
    $filter: 'env',
    test: 9901,
    production: process.env.APP_PORT,
    development: process.env.APP_PORT,
    $default: 8905,
  },
  authAttempts: {
    forIp: 50,
    forIpAndUser: 7,
  },
  baseUrl: {
    $filter: 'env',
    $meta: 'values should not end in "/"',
    production: process.env.SITEURL,
    development: process.env.SITEURL,
    $default: 'http://127.0.0.1:8905',
  },
  eTag: {
    varieties: ['plain', 'buffer', 'view', 'stream'],
  },
  serverOptions: {
    port: 8905,
    host: 'localhost',
    router: { stripTrailingSlash: true },
    state: {
      isHttpOnly: false,
      isSecure: true,
    },
  },
  cacheOptions: {
    $filter: 'env',
    production: {
      expiresIn: 86400000, // One day
    },
    development: {
      expiresIn: 10000, // 10 sec
    },
    test: {
      expiresIn: 60000, // 1 minute
    },
    $default: {
      expiresIn: 86400000, // One day
    },
  },
  goodOptions: {
    $filter: 'env',
    production: {
      ops: {
        interval: 300 * 1000,
      },
      reporters: {
        console: [
          {
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{
              log: ['error', 'warn', 'info'],
              ops: '*',
              response: ['web', 'api'],
            }],
          },
          {
            module: 'good-console',
            args: [{
              log: '*',
              ops: '*',
              response: '*',
              format: 'YYYY-MM-DD HH:mm:ss.SSS',
            }],
          },
          'stdout',
        ],
      },
    },
    development: {
      ops: {
        interval: 30 * 1000,
      },
      reporters: {
        console: [
          {
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{
              log: '*',
              ops: '*',
              response: '*',
            }],
          },
          {
            module: 'good-console',
            args: [{
              log: '*',
              ops: '*',
              response: '*',
              format: 'YYYY-MM-DD HH:mm:ss.SSS',
            }],
          },
          'stdout',
        ],
      },
    },
    $default: {
      ops: {
        interval: 300 * 1000,
      },
      reporters: {
        console: [
          {
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{
              log: ['error', 'warn', 'info'],
              response: ['web', 'api'],
            // response: '*',
            }],
          },
          {
            module: 'good-console',
            args: [{
              log: '*',
              ops: '*',
              response: '*',
              format: 'YYYY-MM-DD HH:mm:ss.SSS',
            }],
          },
          'stdout',
        ],
      },
    },
  },
  hapiMongoModels: {
    mongodb: {
      uri: {
        $filter: 'env',
        development: process.env.DB_CONNECTION,
        production: process.env.DB_CONNECTION,
        test: 'mongodb://127.0.0.1:27121/hapiGlueTemplate1',
        $default: 'mongodb://127.0.0.1:27017/hapiGlueTemplate1d',
      },
    },
    autoIndex: true,
  },
  usersHapiMongoModels: {
    mongodb: {
      uri: {
        $filter: 'env',
        development: process.env.USERS_DB_CONNECTION,
        production: process.env.USERS_DB_CONNECTION,
        test: 'mongodb://127.0.0.1:27121/hapiGlueTemplate1-test',
        $default: 'mongodb://127.0.0.1:27017/hapiGlueTemplate1d',
      },
    },
    autoIndex: true,
  },
};


const store = new Confidence.Store(config);


exports.get = function (key) {
  return store.get(key, criteria);
};


exports.meta = function (key) {
  return store.meta(key, criteria);
};

/* $lab:coverage:on$ */
