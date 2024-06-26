const { checkSchema, validationResult } = require("express-validator");
const deletePhotos = require("../utils/deleteFile");

module.exports = (schema) => { 
    return [checkSchema(schema), (req, res, next) => {
        const errors = validationResult(req) 
        const message = errors.array().map(message => message.msg);
        if (!errors.isEmpty()) {

            if (req.file) {
                const photosFolder = 'photos';
                deletePhotos(photosFolder, req.file.filename);
            }

            return res.status(400).json({ errors: message })
        }
        next()
    }]
}