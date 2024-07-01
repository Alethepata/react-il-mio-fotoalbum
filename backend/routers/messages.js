const express = require('express');
const router = express.Router();

const validator = require("../middlewares/validator.js");
const messagesParams = require("../validations/messages.js");

const { index, create, show } = require('../controllers/MessagesController.js');

router.use(express.json());

router.get('/', index);

router.get('/:id', show);

router.post('/', validator(messagesParams), create);



module.exports = router;