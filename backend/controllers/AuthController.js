const { PrismaClient } = require("@prisma/client");
const { hashPassword, comparePassword } = require("../utils/password");
const generateToken = require("../utils/generateToken");
const prisma = new PrismaClient();

const register = async (req, res, next) => {
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
        next(error);
    }


}

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({
            where: {email}
        });

        const loginError = new Error(`Email o password errati.`);

        if(!user){
            throw loginError;
        }

        const isPasswordValid = await comparePassword(password, user.password);
        
        if (!isPasswordValid) {
            throw loginError;
        }

        const token = generateToken({
            email: user.email,
            name: user.name,
        });

        delete user.id;
        delete user.password;

        res.json({ token, data: user });
        
    } catch (error) {
        next(error);
    }

}


module.exports = {
    register,
    login
}