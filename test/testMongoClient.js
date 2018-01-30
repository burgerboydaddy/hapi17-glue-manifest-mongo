const MongoClient = require('mongodb').MongoClient;
const f = require('util').format;
const assert = require('assert');

const user = encodeURIComponent('dbadmin');
const password = encodeURIComponent('adminPass');
const authMechanism = 'DEFAULT';

// Database Name
const dbName = 'hapiGlueTemplate1';

// Connection URL
const url = f('mongodb://%s:%s@localhost:27021,localhost:27022,localhost:27023/?replicaSet=rs0&authMechanism=%s',
  user, password, authMechanism);

const mongoDbOptions = {
  wtimeout: 0,
  poolSize: 100,
};
// Use connect method to connect to the Server
MongoClient.connect(url, mongoDbOptions, (errMongoClient, client) => {
  assert.equal(null, errMongoClient);
  console.log('Connected correctly to server');

  const db = client.db(dbName);
  // Insert a single document
  db.collection('inserts').insertOne({ a: 1 }, (errInsertOne, resultInsertOne) => {
    assert.equal(null, errInsertOne);
    assert.equal(1, resultInsertOne.insertedCount);

    // Insert multiple documents
    db.collection('inserts').insertMany([{ a: 2 }, { a: 3 }], (errInsertMany, resultInsertMany) => {
      assert.equal(null, errInsertMany);
      assert.equal(2, resultInsertMany.insertedCount);

      client.close();
    });
  });
});
