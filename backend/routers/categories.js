const express = require('express');
const router = express.Router();

const validator = require("../middlewares/validator.js");
const photosCategories = require("../validations/categories.js");

const {
    index,
    create,
    update,
    destroy
} = require('../controllers/CategoriesController.js')

router.use(express.json());

router.get('/', index);

router.post('/', validator(photosCategories), create);

router.put('/:id', validator(photosCategories), update);

router.delete('/:id', destroy);


module.exports = router;