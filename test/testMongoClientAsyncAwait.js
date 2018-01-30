'use strict';

const MongoClient = require('mongodb').MongoClient;
const f = require('util').format;
const assert = require('assert');

const user = encodeURIComponent('dbadmin');
const password = encodeURIComponent('adminPass');
const authMechanism = 'DEFAULT';

(async function () {
  // Connection URL
  const url = f('mongodb://%s:%s@localhost:27021,localhost:27022,localhost:27023/?replicaSet=rs0&authMechanism=%s',
    user, password, authMechanism);

  const mongoDbOptions = {
    wtimeout: 0,
    poolSize: 100,
  }; // Database Name
  // Database Name
  const dbName = 'hapiGlueTemplate1';
  let client;

  try {
    // Use connect method to connect to the Server
    client = await MongoClient.connect(url);
    console.info('Connected correctly to server');
    const db = client.db(dbName);

    // Insert a single document
    const r = await db.collection('inserts').insertOne({
      a: 1,
      b() { return 'hello'; },
    }, {
      w: 'majority',
      wtimeout: 10000,
      serializeFunctions: true,
      forceServerObjectId: true,
    },
    );
  } catch (err) {
    console.log(err.stack);
  }

  if (client) {
    console.log('2. Connected correctly to server, have client:', client);
    client.close();
  }
}());
