'use strict';
// userRoute
const express = require('express');
const router = express.Router();
const {body, sanitizeBody} = require('express-validator');
const userController = require('../controllers/userController');


router.get('/', userController.user_list_get);

router.get('/:id', userController.user_get);

router.put('/', (req, res) => {
  res.send('With this endpoint you can edit users.');
});

router.delete('/', (req, res) => {
  res.send('With this endpoint you can delete users.');
});

module.exports = router;


/*
router.get('/', (req, res) => {
  res.send('With this endpoint you can get cats.');
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.send('you request a user whose id is ' + id);
});


router.post('/', [
  body('name', 'minimun 3 characteres').isLength({min:3}),
  body('email', 'email is not valid').isEmail(),
  body('passwd', 'at least one upper case letter').matches('(?=.*[A-Z]).{8,}'),
    sanitizeBody('name').escape(),
], userController.user_create_post);

 */