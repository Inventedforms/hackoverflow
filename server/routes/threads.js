var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const Thread = mongoose.model('Thread');

/* GET thread, without parameter we get all threads. */
router.get('/:threadId', function(req, res, next) {
  var threadId = req.params.threadId;
  if(threadId != null){
    // send back whole thread
    Thread.findById(threadId, function (err, thread) {
      if (err) return handleError(err);
      res.json(thread);
    });
  }
  else{
    // else search all threads matching tags (if applicable) and return headers
    // assume tags is comma-delimited
    // default fetch first 50
    var tags = req.query.tags;
    var page = req.query.page;
    Thread.find( {skip: page * 50, limit: 50, sort: '-createdOn'}, function (err, threads) {
      if (err) return handleError(err);
      res.json(threads);
     });
  }
});

router.post('/', function(req, res, next){
  try {

    const {header, creator, category, body, organization} = req.body

    const thread = new Thread({
      header,
      creator,
      body,
      category,
      organization
    });
  
    const saved = await thread.save() 
    
    res.json(saved);

  } catch(err) {
    console.log(err);
    
  }
});

router.patch('/:threadId', function(req, res, next){
  if(req.params.threadId != null){
    
  }
});

router.post('/:threadId/comments', function(req, res, next){
  if(req.params.threadId != null){
    Thread.findById(threadId, function (err, thread) {
      if (err) return handleError(err);
      thread.comments.push();
    });
  
  }
  else {
    res.err("Please specify a thread ID");
  }
});

module.exports = router;

