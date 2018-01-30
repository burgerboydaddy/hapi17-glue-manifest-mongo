'use strict';

const calibrate = require('calibrate');
const Boom = require('boom');

async function checkDbConnection() {
  // const db = global.dbClient(process.env.DB_NAME);
  const db = global.db;
  const dbResponse = {};
  try {
    // Get the collection
    const collection = db.collection('find');

    const docSearchObject = {
      moderationState: 'published',
    };
    // Get first two documents that match the query
    const docs = await collection.find(docSearchObject).limit(2).toArray();
    if (!docs || docs.length === 0) {
      dbResponse.message = 'No error connecting to the database, but also no record received. Please check db!';
    } else {
      dbResponse.message = 'No error connecting to the database, received record ok';
    }
  } catch (error) {
    console.error('Received error querying db:', error.stack);
    dbResponse.message = 'Received error querying db';
    dbResponse.error = error;
  }
  return dbResponse;
}

exports.plugin = {
  name: 'health',
  version: '1.0.0',
  register: (server, options) => {
    server.route({
      method: 'GET',
      path: '/health',
      config: {
        description: 'Return 200 if server run ok.',
        tags: ['health'],
        auth: false,
      },
      handler: async (request, h) => {
        try {
          // check db connection
          const dbResponse = await checkDbConnection();
          return h.response(calibrate.response(dbResponse));
        } catch (error) {
          console.error('Db connection error:', error);
          return h.response(calibrate('Error connecting to db. Please check log files for more details'));
        }
      },
    });
  },
};
