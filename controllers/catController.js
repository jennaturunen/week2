// catController
'use strict';
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
  console.log('lisaa', req.body);
  const params = [
    req.body.name,
    req.body.age,
    req.body.weight,
    req.body.owner,
    req.body.filename,
  ];
  const result = await catModel.addCat(params);
  await res.json(result);
};

const cat_update_put = async (req, res) => {
  console.log('muokkaa', req.body);
  const params = [
    req.body.name,
    req.body.age,
    req.body.weight,
    req.body.owner,
    req.params.id,
  ];
  const result = await catModel.updateCat(params);
  await res.json(result);
};

const cat_delete = async (req, res) => {
  const result = await catModel.deleteCat(req.params.id);
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