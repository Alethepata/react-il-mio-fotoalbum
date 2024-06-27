const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = async (req ,res, next) =>{
    try {

        let where = {
            isVisible: true,
        }

        if (req.query.title) {
            where.title = 
            {
                contains: req.query.title
            }
        };
        

        const photos = await prisma.photo.findMany(
            {
                where,
                orderBy: [
                    {
                        createdAt: 'desc'
                    }
                ],
                include: {
                    categories: {
                        select: {
                            id: true,
                            name: true
                        } 
                            
                    }
                }
            }
        )

        res.send({ photos });
        
    } catch (error) {
        next(error);
    }
}