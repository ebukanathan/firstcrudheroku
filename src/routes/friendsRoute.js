const express = require('express')
const router = express.Router()
const friends = require('../models/friends')
const friendsCtrl = require('../controllers/friendsControllers')

//post request to /  to create a new json

router.post('/info',friendsCtrl.creatFriends)
//get request to / to get files
router.get('/info',friendsCtrl.fetchFriends)

//put request to /..:id to update
router.put('/info/:id',friendsCtrl.updateFriends)
//delete request 

router.delete('/info/:id',friendsCtrl.deleteFriends)

module.exports = router; 