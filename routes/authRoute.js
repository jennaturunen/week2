'use strict';
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login', authController.login);    //ohjataan authControllerin login funktioon

module.exports = router;