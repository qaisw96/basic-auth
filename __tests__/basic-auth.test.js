'use strict'; 

require('@code-fellows/supergoose'); 
const bcrypt = require('bcrypt');
const base64 = require('base-64');

const Users = require('../src/auth/models/users-model');
const testUser = {
    username: 'qais96',
    password: 'code401'
}

describe('POST to /signin to login as a user (use basic auth)', () => {
    it('create new user', async () => {
        let newUser = new Users(testUser)
        newUser.password = await bcrypt.hash(newUser.password, 10)
        const record = await newUser.save()

        const valid = await bcrypt.compare(testUser.password, record.password);

        expect(record.username).toEqual(testUser.username)
        expect(valid).toEqual(true)
        
    })

    it('Authorization Test', async () => {
        const logInUser = {username: 'qais96', password: 'code501'}

        const user = await Users.findOne({ username: logInUser.username })
        const valid = await bcrypt.compare(logInUser.password, user.password);

        console.log(valid);

        expect(valid).toEqual(false)
        // const valid = await bcrypt.compare(logInUser.password, )

    })
} )


