const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const Tag = mongoose.model('Tag');

router.get('/', async (req, res, next) => {
  try {
    const tags = await Tag.find()
    
    res.send(tags);

  } catch(err) {
    console.log(err);
  }
})

router.post('/', async (req, res, next) => {
  try {

    const tag = new Tag({
      name: req.body.name
    })
    const saved = await tag.save()
    
    res.send(saved);

  } catch(err) {
    console.log(err);
  }
})

module.exports = router;
