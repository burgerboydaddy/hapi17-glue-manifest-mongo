# HAPI-GLUE-MANIFEST-MONGO TEMPLATE
Template as application start point using hapi 17, glue, manifest, and mongoDb native driver 3.x

Please see package.json for app requirements.
It is recommended to run app from Docker container. See Dockerfile for instruction how to create file.

# Docker build command
Build Docker image using command similar to this one:
```
docker build -t my-app-api:0.1 .
```

```
docker run --net=host -e "DB_CONNECTION=mongodb://myAppUser:myAppUserPass@localhost:27021,localhost:27022,localhost:27023/hapiGlueTemplate1?replicaSet=rs0&authSource=admin" my-app-api:1.1
```

# Database connection
I use MongoDb as database of choice. As such you can have your own (local) mongo installation, or you can connect to remote one.
One option to consider for local development is using docker based MongoDb replica set. Template for creating it is here:
`https://github.com/burgerboydaddy/authDockerMongo`

# Create .env file
Using `.env_example` as template, create .env file.
```
cp .env_example .env
```
After that open file using your favorite editor, and fill with proper values (add new or remove given set of keys).

# Configuration Options
List of required or optional values

## App host
You should leave it as it is in most cases
```
APP_HOST=0.0.0.0
```

## APP_PORT
Configure port based on personal (environment) preferences.
```
APP_PORT=8904
```

## NODE_ENV
In application we use next values:
* development
* production
* test
```
NODE_ENV=development
```

## SITEURL
Update this value based on given environment.
Some examples
```
Local dev:
SITEURL=http://localhost:8904
```

## DB_CONNECTION
Update this value with your mongodb configuration options. 
*Connection using replica set:*
```
DB_CONNECTION=mongodb://dbadmin:adminPass@localhost:27021,localhost:27022,localhost:27023/?replicaSet=rs0&authMechanism=DEFAULT
```
*Connection using single server:*
```
DB_CONNECTION=mongodb://127.0.0.1:27017/scp1dev2
```

## DB_NAME
Database name
```
DB_NAME=hapiGlueTemplate1
```

## JWT_SECRET_KEY
This key is required for JSON Web Tokens (JWT). Code expect key to be base64 encoded.
There are several options for generating secret keys. The easiest way is to run node's crypto hash in your terminal:
```
node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"
```
and copy the resulting base64 key and use it as your JWT secret.

## GIT_COMMIT_SHA
This key is setup by GitLab CI integration to the build hash used for creating service Docker image.
```
GIT_COMMIT_SHA=A0123456789B
```

# .env file
If you are not using Concierge to get above info, create .env file.

Here is example .env file content.

```
APP_HOST=0.0.0.0
APP_PORT=8905
NODE_ENV=development
DB_CONNECTION=mongodb://dbadmin:adminPass@localhost:27021,localhost:27022,localhost:27023/?replicaSet=rs0&authSource=admin&authMechanism=DEFAULT
DB_NAME=hapiGlueTemplate1
LOG_PATH=/var/log/
LOG_FILE_NAME=hapiGlueTemplateAPI.log
SITEURL=http://api.myserver.dev:8905
JWT_SECRET_KEY=3yqLq2FtS+1sF78nXlRP749R+fXcEidi0Ye/R97YpjGDrfYUNA0Co7FM/tk12avhOo0ENYHZMNh1zL+V8mmiD+n4gITaC7b9q3nBULPVbLJw5RE0kqgbVV190vSGBT+DDjr6RxlYusxYXikOE7uoeGwOUiw/etl9B1V3gf89/dP9ruGSe4RD/2wYyI/9lesHJIP8c5+ITXURbKA/tBEXB8aviVlIAvvLky0zv2SumlQvWED5wOEG7h7LnvdHvoeHEGb53ENR4haGcpv41e/rtMI70AeG4kVB/W1Ae61dRXPj2X2H1XERV3nY6O2JoqAHid5MrdFll3KcTBEb+rwQfQ==
GIT_COMMIT_SHA=A0123456789B
```