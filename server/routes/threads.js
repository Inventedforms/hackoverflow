const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { check } = require('express-validator/check');

const Thread = mongoose.model('Thread');
const Answer = mongoose.model('Answer');
const Comment = mongoose.model('Comment');
const User = mongoose.model('User');

var validators = [
  check('header').exists(),
  check('creator').custom(value =>{
    return User.findById(value).then(user =>{
      if (!user) {
        return Promise.reject('Invalid user');
    }});
  }),
  check('body').exists(),
  check('category').exists()]

/* GET thread, without parameter we get all threads.
    e.g. /threads/threadId?page=5&tags=eng,offtopic
*/
router.get('/:threadId?',
async (req, res, next) => {
  const threadId = req.params.threadId;
  if(threadId != null){
    // send back whole thread
    await Thread.findById(threadId)
    .populate('creator')
    .populate('answers')
    .populate('comments')
    .exec(function (err, thread) {
      if (err) return handleError(err);
      Thread.update(
        {_id: threadId}, 
        {$set: {'views': thread.views + 1}}, )
      res.json(thread);
    });
  }
  else{
    // else search all threads matching tags (if applicable) and return header info
    // assume tags is comma-delimited
    // default fetch first 50
    var tags = req.query.tags;
    var page = req.query.page != null ? req.query.page : 1;
    var category = req.query.category != null ? {category:req.query.category} : null;

    Thread.find(category, '', {limit: 50, sort: '-createdAt'})
    .populate('creator')
    .populate('answers')
    .populate('comments')
    .exec(function (err, threads) {
      if (err) return handleError(err);
      res.json(threads);
     });
  }
});

router.route('/').post(validators, async (req, res, next )=>{
  try {

    const {header, creator, category, body, organization, tags} = req.body

    const thread = new Thread({
      header,
      creator,
      body,
      category,
      organization,
      tags
    });
  
    const saved = await thread.save()
    
    res.json(saved);

  } catch(err) {
    console.log(err);
  }
});

// update thread body/header or karma. nothing else can be added
router.patch('/:threadId',validators.slice(1, 3), async (req, res, next) => {
  if(req.params.threadId != null){
    Thread.findOneAndUpdate({_id:threadId}, req.body, function (err, thread) {
      if (err) return handleError(err);
        res.json(req.body);
    });
  }
});

// add an answer
router.post('/:threadId/answers', validators.slice(1, 3), async (req, res, next) => {
  if(req.params.threadId != null){
    Thread.findById(req.params.threadId, async (err, thread)=> {
      if (err) return handleError(err);
      const {creator, body}= req.body;
      const comment = new Answer({creator, body})
      saved = await comment.save();
      thread.answers.push(saved);
      console.log(thread);
      saved = await Thread.findOneAndUpdate({_id:req.params.threadId}, {answers: thread.answers}, function(err, result){
        if(err) return handleError(err);
        res.json(result)
      })
    });
  }
  else {
    res.err("Please specify a thread ID");
  }
});

router.patch('/:threadId/answers/:answerId', validators.slice(1, 3), async (req, res, next) => {
  if(req.params.threadId != null && req.params.answerId != null){
    Answer.findOneAndUpdate(req.params.answerId, req.body);
  }
  else {
    res.err("Please specify a thread ID");
  }
});

router.post('/:threadId/comments',validators.slice(1, 3), async (req, res, next) => {
  if(req.params.threadId != null){
    Thread.findById(req.params.threadId, async (err, thread)=> {
      if (err) return handleError(err);
      const {creator, body}= req.body;
      const comment = new Comment({creator, body})
      saved = await comment.save();
      thread.comments.push(saved);
      console.log(thread);
      saved = await Thread.findOneAndUpdate({_id:req.params.threadId}, {comments: thread.comments}, function(err, result){
        if(err) return handleError(err);
        res.json(result)
      })
    });
  
  }
  else {
    res.err("Please specify a thread ID");
  }
});
router.patch('/:threadId/comments/:commentId', validators.slice(1, 3), async (req, res, next) => {
  if(req.params.threadId != null && req.params.commentId != null){
    Comment.findOneAndUpdate(req.params.commentId, req.body);
  
  }
  else {
    res.err("Please specify a thread ID");
  }
});

module.exports = router;

