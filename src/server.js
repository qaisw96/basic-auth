'use strict';

const express = require('express'); 
const mongoose = require('mongoose');

const router = require('./auth/router')

const notFoundError = require('./middleware/404')
const errorHandler = require('./middleware/500')
// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());
// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));
// require the routes
app.use(router)


// Error Middleware function
app.use('*', notFoundError)
app.use(errorHandler)

function start(PORT, MONGO_URL) {
    mongoose.connect(MONGO_URL, {
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(() => {
        app.listen(PORT, () => console.log(`Listening To PORT ${PORT}...`));
        console.log('Connect to DB');
    }).catch(e => console.error('Could not start server', e.message));
}



module.exports = {
    app,
    start,
    router
}

