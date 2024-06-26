const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const index = (req, res) => {
    res.json('home')
}

const create = async (req, res) => {

    const { name } = req.body;


    const data = {
        name
    }

    try {

        const category = await prisma.category.create({ data });

        res.status(200).json(category)
        
    } catch (error) {
        console.log(error);
    }


}

const update = (req, res) => {
    res.json('modifica categoria')
}

const destroy = (req, res) => {
    res.json('elimina categoria')
}

module.exports = {
    index,
    create,
    update,
    destroy
}