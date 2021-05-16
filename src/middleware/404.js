'use strict'; 

function notFoundError(req, res, next) {
    console.log('from 404');
    res.status(404).json({
        error: 404,
        path: req.baseUrl
    })
}

module.exports = notFoundError;