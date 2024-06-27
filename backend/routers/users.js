const express = require('express');
const router = express.Router();

const validator = require("../middlewares/validator.js");
const usersParams = require("../validations/users.js");

const { index, create } = require('../controllers/UsersController.js');

router.use(express.json());

router.get('/', index);

router.post('/', validator(usersParams), create);



module.exports = router;