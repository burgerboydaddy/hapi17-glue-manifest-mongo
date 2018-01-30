'use strict';

const MongoClient = require('mongodb').MongoClient;
const Glue = require('glue');
const Manifest = require('./manifest');

const composeOptions = {
  relativeTo: __dirname,
};


// Start the server
const startServer = async function () {
  try {
    // Open DB connection & create global connection object to the Mongodb
    const mongoDbOptions = {
      wtimeout: 0,
      poolSize: 100,
    };

    // Use connect method to connect to the Server
    const client = await MongoClient.connect(process.env.DB_CONNECTION, mongoDbOptions);
    console.info('Connected correctly to MongoDb server');
    const db = client.db(process.env.DB_NAME);
    global.db = db;
    const server = await Glue.compose(Manifest.get('/'), composeOptions);
    await server.start();
    console.info(`serverId: ${global.serverID}`);
    console.info(`Server started at: ${server.info.uri} with [${Object.keys(server.plugins).join(', ')}] enabled`);
    console.info(`Cache expires in: ${process.env.CACHE_EXPIRES_IN}`);
    server.log('info', {
      msg: `Server started at: ${server.info.uri} with [${Object.keys(server.plugins).join(', ')}] enabled`,
      param: null,
    });
  } catch (err) {
    console.error('Catch error on server start. Process will terminate now.', err);
    process.exit(1);
  }
};

startServer();
