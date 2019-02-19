const mongoose = require('mongoose')

const user = new mongoose.Schema({
    name: 'string',
    screen_name: 'string',
    slack_id: 'string',
    organization: 'string',
    karma: 'number',
    profile_picture: 'string',
}, {
  timestamps: true
})

mongoose.model('User', user);
