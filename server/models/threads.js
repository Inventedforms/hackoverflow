const mongoose = require('mongoose')

const thread = new mongoose.Schema({
    header: 'string',
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    body: 'string',
    category: 'string',
    views: { type: Number, default: 0 },
    viewed: ['string'],
    organization: 'string',
    karma: { type: Number, default: 0 },
    up: ['string'],
    down: ['string'],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    answers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer' }],
    acceptedAnswer: { type: mongoose.Schema.Types.ObjectId, ref: 'Answer' }
}, {
  timestamps: true
})

const answer = new mongoose.Schema({
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    body: 'string',
    karma: { type: Number, default: 0 },
    up: ['string'],
    down: ['string'],
    comments: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },
    isAcceptedAnswer: {type: Boolean, default: false},

});

const comment = new mongoose.Schema({
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    body: 'string',
    karma: { type: Number, default: 0 },
    up: ['string'],
    down: ['string'],
    isAnswer: {type: Boolean, default: false},
    isAcceptedAnswer: {type: Boolean, default: false},

});

mongoose.model('Answer', answer);
mongoose.model('Comment', comment);
mongoose.model('Thread', thread);
