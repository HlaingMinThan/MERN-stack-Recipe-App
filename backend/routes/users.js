const express = require('express');
const UserController = require('../controllers/UserController');
const handleErrorMessage = require('../middlewares/handleErrorMessage');
const { body } = require('express-validator');

const router = express.Router();

router.post('/login',UserController.login)

router.post('/register',[
    body('name').notEmpty(),
    body('email').notEmpty(),
    body('password').notEmpty(),
],handleErrorMessage,UserController.register)

module.exports = router;