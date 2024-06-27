const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();
const {PORT, HOST} = process.env;
const port = PORT || 3000;

const deletePhotos = require("../utils/deleteFile.js");

const index = async (req, res) => {

    const where= Object.keys(req.query).reduce((aggregate, key) => {
        if (key == 'isVisible') {
            aggregate[key] = Boolean(req.query[key]);
            return aggregate
        } else {
            aggregate[key] = {contains: (req.query[key])};
            return aggregate;
        }
    }, {});
    

    try {
        const photos = await prisma.photo.findMany({
            where,
            include: {
                categories: {
                    select: {
                        id: true,
                        name: true
                    } 
                        
                }
            }
        });

        res.json(photos);

    } catch (error) {
        console.log(error);
    }
}

const show = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const photo = await prisma.photo.findUnique({
            where: { id },
            include: {
                categories: {
                    select: {
                        id: true,
                        name: true
                    } 
                        
                }
            }
        })

        res.json(photo)
        
    } catch (error) {
        console.log(error)
    }
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

const destroy = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        await prisma.photo.delete({
            where: { id },
        });

        res.json(`Foto con id ${id} eliminata con successo.`);
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}