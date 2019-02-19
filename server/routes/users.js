const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const User = mongoose.model('User');

/* GET users listing. */
router.post('/', async (req, res, next) => {

  try {
    
    const {name, screen_name, organization} = req.body

    const user = new User({
      name,
      screen_name,
      organization
    });

  
    const saved = await user.save() 
    
    res.send(saved)

  } catch(err) {
    console.log(err);
    
  }
});

module.exports = router;
