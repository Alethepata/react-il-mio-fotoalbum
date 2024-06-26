const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const index = async (req, res) => {
    try {
        const categories = await prisma.category.findMany()

        res.json({ categories })
        
    } catch (error) {
        console.log(error)
    }
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

const destroy = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await prisma.category.delete({
            where: { id },
        });
        res.json(`Category con id ${id} eliminata con successo.`);
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    index,
    create,
    destroy
}