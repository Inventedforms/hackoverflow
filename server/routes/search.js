const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const Thread = mongoose.model('Thread');
router.get('/:searchText', async (req, res, next) => {

    try {
        Thread.find(
            { $text : { $search : req.params.searchText } }, 
            { score : { $meta: "textScore" } }
        )
        .populate('answers comments')
        .sort({ score : { $meta : 'textScore' } })
        .exec(function(err, results) {
            // callback
            res.json(results);
        });
    } catch(err) {
      console.log(err);
    }
  });
  module.exports = router;