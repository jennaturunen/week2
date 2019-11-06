// userController

// Controller
'use strict';
const userModel = require('../models/userModel');

const users = userModel.users;

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

/* mitkä funktiot näkyvät ulospäin */
module.exports = {
  user_list_get,
  user_get,
};
