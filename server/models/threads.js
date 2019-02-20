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
    up: [ { type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    down: [ { type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    tags: ['string'],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    answers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer' }],
    acceptedAnswer: { type: mongoose.Schema.Types.ObjectId, ref: 'Answer' },
    lastEdited:  { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {
  timestamps: true
})
thread.index({header: 'text', body: 'text'});

const answer = new mongoose.Schema({
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    body: 'string',
    karma: { type: Number, default: 0 },
    up: [ { type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    down: [ { type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },
    lastEdited:  { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

});
answer.index({header: 'text', body: 'text'});

const comment = new mongoose.Schema({
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    body: 'string',
    karma: { type: Number, default: 0 },
    up: [ { type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    down: [ { type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    lastEdited:  { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

});
comment.index({header: 'text', body: 'text'});

mongoose.model('Answer', answer);
mongoose.model('Comment', comment);
mongoose.model('Thread', thread);
