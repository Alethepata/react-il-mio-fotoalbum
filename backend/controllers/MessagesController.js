const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const index = async (req, res, next) => {
    try {
        const messages = await prisma.message.findMany(
            {
                orderBy: [
                    {
                        createdAt: 'desc'
                    }
                ],
            }
        )

        res.json({ messages })
        
    } catch (error) {
        next(error);
    }
}

const create = async (req, res, next) => {
    const { email, message } = req.body;

    const data = {
        email,
        message
    }

    try {
        const message = await prisma.message.create({ data });

        res.status(200).json(message)
        
    } catch (error) {
        next(error);
    }


}


module.exports = {
    index,
    create
}