const profileController = require('../Controller/profileController');
const express = require('express');
const router = express.Router();
router.post('/',profileController.register);
module.exports =router