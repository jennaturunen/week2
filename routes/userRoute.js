'use strict';
// userRoute

// Router
'use strict';
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.user_list_get);

router.get('/:id', userController.user_get);

router.get('/', (req, res) => {
  res.send('With this endpoint you can get cats.');
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.send('you request a user whose id is ' + id);
});


router.post('/', (req, res) => {
  console.log('user post body', req.body);
  res.send('With this endpoint you user add users.');
});

router.put('/', (req, res) => {
  res.send('With this endpoint you can edit users.');
});

router.delete('/', (req, res) => {
  res.send('With this endpoint you can delete users.');
});

module.exports = router;
