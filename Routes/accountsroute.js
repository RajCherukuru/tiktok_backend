const express = require('express');

const getAllUsers = require('../controller/userinfocontroller');

const getAllVideoInfo= require('../controller/videoinfocontroller');

const router = express.Router();



// Route handler
router.get('/userdata', getAllUsers);

router.get('/videodata', getAllVideoInfo);


module.exports = router;