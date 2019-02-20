const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

router.get('/', async (req, res, next) => {
  console.log(req.params.id);
  

  try {
    const user = await User.findById(req.params.id)
    console.log(user);
    
    res.send(user);
  } catch(err) {
    console.log(err);
  }
})
