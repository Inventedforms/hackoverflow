const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const User = mongoose.model('User');
const request = require('request');

/* GET users listing. */
router.post('/', async (req, res, next) => {

  try {
    
    const {name, screen_name,slack_id, organization} = req.body

    const user = new User({
      name,
      screen_name,
      slack_id,
      organization
    });

  
    const saved = await user.save() 
    
    res.send(saved)

  } catch(err) {
    console.log(err);
    
  }
});

router.get('/:id', async (req, res, next) => {
  console.log(req.params.id);
  

  try {
    const user = await User.findById(req.params.id)
    console.log(user);
    
    res.send(user);
  } catch(err) {
    console.log(err);
  }
})

router.post('/:id/slack', async(req, res, next) =>{
  try {
    const user = await User.findById(req.params.id)
    res.send('slack://user?team=T2YPRNTU0&id=' + user.slack_id)
  } catch(err) {
    console.log(err);
  }
})
module.exports = router;
