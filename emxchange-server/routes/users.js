const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const User = mongoose.model('User');

/* GET users listing. */
router.post('/', async (req, res, next) => {

  var user = new User();

  user.name = req.body.name;

  user.save().then(function(){
    return res.json({user: user});
  }).catch(next);
});

module.exports = router;
