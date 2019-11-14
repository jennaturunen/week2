// catController
'use strict';
const {validationResult} = require('express-validator');
const catModel = require('../models/catModel');

const cat_list_get = async (req, res) => {
  const cats = await catModel.getAllCats();
  await res.json(cats);
};

const cat_get = async (req, res) => {
  const cat = await catModel.getCat(req.params.id);
  await res.json(cat[0]);
};

const cat_create_post = async (req, res) => {
  // Extract the validation errors from a request
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors);
    res.send(errors.array());
  } else {
    const params = [
      req.body.name,
      req.body.age,
      req.body.weight,
      req.body.owner,
      req.body.filename,  //tai req.file.filename
    ];
    console.log('create', params);
    const result = await catModel.addCat(params);
    await res.json(result);
  }
};

const cat_update_put = async (req, res) => {
  console.log('muokkaa', req.body);
  // Extract the validation errors from a request
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.send(errors.array());
  } else {
    const params = [
      req.body.name,
      req.body.age,
      req.body.weight,
      req.body.owner,
      req.body.id,
    ];
    const result = await catModel.updateCat(params);
    await res.json(result);
  }
};

const cat_delete = async (req, res) => {
  const params = [req.params.id];
  const result = await catModel.deleteCat(params);
  await res.json(result);
};

/* mitkä funktiot näkyvät ulospäin */
module.exports = {
  cat_list_get,
  cat_get,
  cat_create_post,
  cat_update_put,
  cat_delete,
};


/*
const cat_list_get = (req, res) => {
  res.json(cats);
};


const cat_get = (req, res) => {
  const cat = cats.filter((kissa) => {
    if(kissa.id === req.params.id) {
      return kissa;
    }
  });

  res.json(cat[0]);
};
*/