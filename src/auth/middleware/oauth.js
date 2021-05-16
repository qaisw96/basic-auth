'use strict';

const base64 = require('base-64');
const bcrypt = require('bcrypt')
const Users = require('../models/users-model')

async function baseAuth(req, res, next ) {
    
    let basicHeaderParts = req.headers.authorization.split(' ');  // ['Basic', 'sdkjdsljd=']
    let encodedString = basicHeaderParts.pop();  // sdkjdsljd=
    let decodedString = base64.decode(encodedString); // "username:password"
    let [username, password] = decodedString.split(':'); // username, password

    const user = await Users.findOne({ username: username })
    if(!user) {
        next('Not found user')
     
    } else {
        const valid = await bcrypt.compare(password, user.password);
    
        if(valid) {
            req.record = user
            next()
        } else {
            next('pass is wrong')
         
        }
    }

}

module.exports = baseAuth;
