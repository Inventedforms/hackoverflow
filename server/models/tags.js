const mongoose = require('mongoose')

const tag = new mongoose.Schema({
  name: 'string',
  weight: {type: Number, default: 0}
})

mongoose.model('Tag', tag);
