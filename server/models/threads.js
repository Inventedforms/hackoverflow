const mongoose = require('mongoose')

const thread = new mongoose.Schema({
    header: 'string',
    creator: { type: Schema.Types.ObjectId, ref: 'User' },
    body: 'string',
    category: 'string',
    views: { type: Number, default: 0 },
    organization: 'string',
    karma: { type: Number, default: 0 },
    up: ['string'],
    down: ['string'],
    profile_picture: 'string',
}, {
  timestamps: true
})

mongoose.model('Thread', thread);
