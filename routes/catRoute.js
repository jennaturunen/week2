// catRoute
'use strict';
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const catController = require('../controllers/catController');

router.get('/', catController.cat_list_get);
router.get('/:id', catController.cat_get);

router.post('/', upload.single('cat'), (req, res) => {
  console.log('cat post file', req.file);
  res.send('With this endpoint you can add cats.');
});

router.get('/', (req, res) => {
  res.send('With this endpoint you can get cats.');
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.send('you request a cat whose id is ' + id);
});


router.post('/', (req, res) => {
  res.send('With this endpoint you can add cats.');
});

router.put('/', (req, res) => {
  res.send('With this endpoint you can edit cats.');
});

router.delete('/', (req, res) => {
  res.send('With this endpoint you can delete cats.');
});

module.exports = router;
