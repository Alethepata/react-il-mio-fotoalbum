const { PrismaClient } = require("@prisma/client");
const { hashPassword, comparePassword } = require("../utils/password");
const generateToken = require("../utils/generateToken");
const prisma = new PrismaClient();

const register = async (req, res) => {
    try {
        const { email, password, name } = req.body;
    
        const data = {
            email,
            password: await hashPassword(password)
        }
    
        if (name) {
            data.name = name;
        }
        const user = await prisma.user.create({ data });

        const token = generateToken({ 
            email: user.email,
            name: user.name,
         })
        
        delete user.id;
        delete user.password;

        res.status(200).json({token, data: user})
        
    } catch (error) {
        console.log(error);
    }


}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({
            where: {email}
        });

        const isPasswordValid = await comparePassword(password, user.password);

        if(!user || !isPasswordValid){
            throw new Error('Email o password errati.');
        }

        const token = generateToken({
            email: user.email,
            name: user.name,
        });

        delete user.id;
        delete user.password;

        res.json({ token, data: user });
        
    } catch (error) {
        console.log(error);
    }

}


module.exports = {
    register,
    login
}