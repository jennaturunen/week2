// catRoute
'use strict';
const express = require('express');
const router = express.Router();
const {body, sanitizeBody} = require('express-validator');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const catController = require('../controllers/catController');

router.get('/', catController.cat_list_get);
router.get('/:id', catController.cat_get);


router.post('/', upload.single('cat'), (req, res, next) => {
  console.log('cat post file', req.file);

  if (req.file === undefined) {
    res.json({
      error: 'No file',
    });
  } else if (!req.file.mimeType.includes('image')){
    res.json({
      error: 'Not an image',
    });
  } else {
    //tiedostonnimi bodyyn, jos haluaa ei pakollinen
    req.body.filename = req.file.filename;
    next();
  }
});

router.post('/', [
  body('name', 'minimun 1 character').isLength({min:1}),
  body('age', 'has to be number').isNumeric().isLength({min: 1}),
  body('weight', 'has to be number').isNumeric().isLength({min: 1}),
  body('owner', 'choose one').isNumeric().isLength({min: 1}),
  sanitizeBody('name').escape(),
],catController.cat_create_post);




router.put('/', [
  body('name', 'minimun 1 character').isLength({min:1}),
  body('age', 'has to be number').isNumeric().isLength({min: 1}),
  body('weight', 'has to be number').isNumeric().isLength({min: 1}),
  body('owner', 'choose one').isNumeric().isLength({min: 1}),
  sanitizeBody('name').escape(),
], catController.cat_update_put);

router.delete('/:id', catController.cat_delete);


module.exports = router;

/*
router.get('/', (req, res) => {
  res.send('With this endpoint you can get cats.');
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.send('you request a cat whose id is ' + id);
});

router.post('/', (req, res) => {
  res.send('With this endpoint you can add cats.');

  router.put('/', (req, res) => {
  res.send('With this endpoint you can edit cats.');
});
});

router.delete('/', (req, res) => {
  res.send('With this endpoint you can delete cats.');
});


*/