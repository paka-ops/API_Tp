const { updateUser } = require('../Controller/userController');
const { getUserById } = require('../Controller/userController');
const {register,login,getAllUsers} = require('../Controller/userController');
const express = require('express');
const router = express.Router();
router.post('/register',register);
router.post('/login',login);
router.post("/",getAllUsers)
router.put("/:id",updateUser)
router.get("/:id",getUserById);





module.exports = router;