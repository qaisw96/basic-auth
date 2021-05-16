'use strict'; 

const express = require('express');
const router = express.Router()

const bcrypt = require('bcrypt');
const base64 = require('base-64');
// const mongoose = require('mongoose');
const Users = require('./models/users-model')
const basicAuth = require('../auth/middleware/oauth')

// End points 

router.get('/', (req, res) => {
    res.status(200).send('welcome to my application')
})


// sign-up route
router.post('/signup', async (req, res) => {

    try {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      const user = new Users(req.body);
      const record = await user.save(req.body);
      res.status(201).json(record);
    } catch (e) { res.status(403).json({
        error: "Error Creating User",
        message: e.message
    }); 
   }
});


// sign-in route 
router.post('/signin', basicAuth, async (req, res) => {

    try {
        res.status(201).json({ user: req.record });
    } catch(e) {
        res.json({
            error: e.message
        })
    }

  });
  

  


  module.exports = router;