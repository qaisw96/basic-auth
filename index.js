'use strict';

require('dotenv').config();
const server = require('./src/server');

const {PORT, MONGO_URL} = process.env;

server.start(PORT, MONGO_URL)


