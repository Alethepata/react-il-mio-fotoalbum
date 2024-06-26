const express = require('express');
const router = express.Router();

const multer = require("multer");
const path = require("path");

const {
    index,
    show,
    create,
    update,
    destroy
} = require('../controllers/PhotosController.js')

const storage = multer.diskStorage({
    destination: "public/photos",
    filename: (req, file, cf) => {
        const fileType = path.extname(file.originalname);
        cf(null, String(Date.now()) + fileType)
    }
})

const upload = multer({storage})


router.get('/', index);

router.get('/:id', show);

router.post('/', upload.single("image"), create);

router.put('/:id', upload.single("image"), update);

router.delete('/:id', destroy);


module.exports = router;