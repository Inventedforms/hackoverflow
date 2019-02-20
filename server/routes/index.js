const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Upvote and Downvote stuff here
// TODO: Do not let same user upvote or downvote
router.post('/:entity/:id/vote', async (req, res, next) => {

  try {

    const {entity, id} = req.params
    const voteType = req.body.voteType
    
    const user_id = req.get('user_id')    

    let entityName = capitalizeFirstLetter(entity)
    entityName = entityName.slice(0, -1);
    
    const DBModel = mongoose.model(entityName);
    let saved = ""
    if (voteType == 'up') {
      saved = await DBModel.updateOne(
        {_id: id},
        {$push: { up: user_id}}
        )
    } else if (voteType == 'down') {
      saved = await DBModel.updateOne(
        {_id: id},
        {$push: { down: user_id}}
        )
    }
    

    // const data = await DBModel.findById(id)
    
    // data[voteType].push()

    // const saved = await data.save()

    res.send(saved)

  } catch(err) {
    console.log(err);
    
  }

});

module.exports = router;
