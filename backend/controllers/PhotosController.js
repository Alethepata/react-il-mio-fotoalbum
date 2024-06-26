const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();
const {PORT, HOST} = process.env;
const port = PORT || 3000;

const deletePhotos = require("../utils/deleteFile.js");

const index = (req, res) => {
    res.json('home')
}

const show = (req, res) => {
    res.json('dettaglio foto')
}

const create = async (req, res) => {

    const { title, description, isVisible, categories } = req.body;

    const image = `${HOST}:${port}/photos/${req.file.filename}`;

    const data = {
        title,
        description,
        image,
        isVisible,
        categories: {
            connect: categories
        },
    }

    try {

        const photo = await prisma.photo.create({ data });

        res.status(200).json(photo)
        
    } catch (error) {
        deletePhotos('photos', req.file.filename)
        console.log(error);
    }


}

const update = (req, res) => {
    res.json('modifica post foto')
}

const destroy = (req, res) => {
    res.json('elimina foto')
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}