'use strict'; 

function errorHandler(err, req, res, next) {
    res.status(500).json({
        error: err,
        path: req.path
    })
}

module.exports = errorHandler;