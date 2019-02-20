const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Thread = mongoose.model('Thread');

/* GET thread, without parameter we get all threads.
    e.g. /threads/threadId?page=5&tags=eng,offtopic
*/
router.get('/:threadId', async (req, res, next) => {
  const threadId = req.params.threadId;
  if(threadId != null){
    // send back whole thread
    await Thread.findById(threadId, function (err, thread) {
      if (err) return handleError(err);
      log(thread);
      res.json(thread);
    });
  }
  else{
    // else search all threads matching tags (if applicable) and return header info
    // assume tags is comma-delimited
    // default fetch first 50
    var tags = req.query.tags;
    var page = req.query.page != null ? req.query.page : 0;
    var category = req.query.category;
    Thread.find( {skip: (page-1)  * 50, limit: 50, sort: '-createdOn'}, function (err, threads) {
      if (err) return handleError(err);
      res.json(threads);
     });
  }
});

router.post('/', async (req, res, next )=>{
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

router.patch('/:threadId', async (req, res, next) => {
  if(req.params.threadId != null){
    Thread.findById(threadId, function (err, thread) {
      if (err) return handleError(err);

    });
  }
});

router.post('/:threadId/answers', async (req, res, next) => {
  const {}
  if(req.params.threadId != null){
    Thread.findById(threadId, function (err, thread) {
      if (err) return handleError(err);
      thread.answers.push();
    });
  
  }
  else {
    res.err("Please specify a thread ID");
  }
});

router.post('/:threadId/comments', async (req, res, next) => {
  const {}
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

