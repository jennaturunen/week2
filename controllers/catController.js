'use strict';
// catController
// Controller
'use strict';
const catModel = require('../models/catModel');

const cats = catModel.cats;

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

/* mitkä funktiot näkyvät ulospäin */
module.exports = {
  cat_list_get,
  cat_get,
};

/* 7 tehtävä sama kuin kissat, vaihda vain kissa sanat users*/