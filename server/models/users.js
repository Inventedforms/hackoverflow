const mongoose = require('mongoose')

const user = new mongoose.Schema({
    name: 'string',
    screen_name: 'string',
    slack_id: 'string',
    organization: 'string',
    karma: {type: Number, default: 0},
    profile_picture: {type: String, default: ''},
    tags: [{type: String, default: ''}],
}, {
  timestamps: true
})
mongoose.model('User', user);