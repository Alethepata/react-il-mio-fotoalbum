const express = require('express');
const router = express.Router();

const validator = require("../middlewares/validator.js");
const usersParams = require("../validations/users.js");

const { register, login } = require('../controllers/AuthController.js');

router.use(express.json());

router.post('/register', register);

router.post('/login', validator(usersParams), login);



module.exports = router;