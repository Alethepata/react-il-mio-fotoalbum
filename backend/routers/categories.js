const express = require('express');
const router = express.Router();

const validator = require("../middlewares/validator.js");
const photosCategories = require("../validations/categories.js");

const {
    index,
    create,
    destroy
} = require('../controllers/CategoriesController.js')

router.use(express.json());

router.get('/', index);

router.post('/', validator(photosCategories), create);

router.delete('/:id', destroy);


module.exports = router;