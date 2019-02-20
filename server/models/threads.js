const mongoose = require('mongoose')

const thread = new mongoose.Schema({
    header: 'string',
    creator: { type: Schema.Types.ObjectId, ref: 'User' },
    body: 'string',
    category: 'string',
    views: { type: Number, default: 0 },
    viewed: ['string'],
    organization: 'string',
    karma: { type: Number, default: 0 },
    up: ['string'],
    down: ['string'],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    answers: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    acceptedAnswer: { type: Schema.Types.ObjectId, ref: 'Comment' }
}, {
  timestamps: true
})

const comment = new mongoose.Schema({
    creator: { type: Schema.Types.ObjectId, ref: 'User' },
    body: 'string',
    karma: { type: Number, default: 0 },
    up: ['string'],
    down: ['string'],
    comments: { type: Schema.Types.ObjectId, ref: 'Comment' },
    isAnswer: {type: Boolean, default: false},
    isAcceptedAnswer: {type: Boolean, default: false},

});

mongoose.model('Comment', comment);
mongoose.model('Thread', thread);
