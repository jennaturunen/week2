// userController
'use strict';
const {validationResult} = require('express-validator');
const userModel = require('../models/userModel');

const user_list_get = async (req, res) => {
  const users = await userModel.getAllUsers();
  await res.json(users);
};

const user_get = async (req, res) => {
  const user = await userModel.getUser(req.params.id);
  await res.json(user[0]);
};

const user_create_post = async (req, res) => {
  // Extract the validation errors from a request
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors);
    res.send(errors.array());
  } else {
    const params = [
      req.body.name,
      req.body.email,
      req.body.passwd,
    ];
    const result = await userModel.addUser(params);
    await res.json(result);
  }
};

/* mitkä funktiot näkyvät ulospäin */
module.exports = {
  user_list_get,
  user_get,
  user_create_post,
};

/*
const user_list_get = (req, res) => {
  res.json(users);
};

const user_get = (req, res) => {
  const user = users.filter((kayttaja) => {
    if(kayttaja.id === req.params.id) {
      return kayttaja;
    }
  });

  res.json(user[0]);
};
*/