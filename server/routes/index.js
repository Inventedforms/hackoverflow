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
    const voteType = req.body.type
    const user_id = req.get('user_id')

    let entityName = capitalizeFirstLetter(entity)
    entityName = entityName.slice(0, -1);
    console.log(entityName);
    

    const DBModel = mongoose.model(entityName);

    const data = await DBModel.findById(id)

    data[voteType].push(user_id)

    const saved = await data.save()

    res.send(saved)

  } catch(err) {
    console.log(err);
    
  }

});

module.exports = router;
