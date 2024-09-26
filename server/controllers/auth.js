const prisma = require("../config/prisma")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const createError = require("../utils/create-error")


// const joi = require("joi")
// const schema = Joi.object({
//     email: joi.string().required().email()
// })

exports.register = async(req,res,next) =>{
    try {
        const {email,password,confirmPassword} = req.input
        //1. Validate req.body ****joi
        if (!email) {
            return createError(400, "Email are requirement")
        }

        if (!password) {
            return createError(400,"Password are Requirement")
        }
        //2. Check Email already exits
        const user = await prisma.user.findUnique({
            where :{
                email: email
            }
        })
        if (user) {
            return createError(400,"Email is already exits")
        }
        console.log(user);

        
        //3. Encrypt password with bcryptjs
        const hashPassword = await bcrypt.hash(password,10)
        
        //4. Register success
        const newUser = await prisma.user.create({
            data:{
                email:email,
                password: hashPassword
            }
        })
        console.log(hashPassword);
        console.log(newUser);
        
        res.json({message :'Register Success!!'})
    } catch (err) {
        next(err)
    }
}


exports.login = async(req,res,next) =>{
    try {
        const {email,password} = req.input
        //1. Validate With *** joi
        if (!email) {
            return createError(400,"email is Required!!")
        }
        if (!password) {
            return createError(400,"Password is Required!!")
        }
        //2. Check Email in DB (already exits)
        const user = await prisma.user.findUnique({
            where:{
                email:email
            }
        })
        if (!user) {
            return createError(400,"email is not invalid!!")
        }

        
        //3. Check Password is match
        const isMatch = await bcrypt.compare(password,user.password)
        if (!isMatch) {
            return createError(400,"Wrong Password")
        }
        
        //4. Create Payload
        const payload = {
            user :{
                id:user.id,
                email:user.email,
                role:user.role
            }
        }
        
        //5. generate Token
        const genToken = jwt.sign(payload,process.env.SECRET,{
            expiresIn :"1d"
        })

        // 6. sent to frontend
        res.json({
            user:payload,
            token:genToken
        })
    } catch (err) {
        next(err)
        
    }
}


exports.currentUser = async(req,res,next) => {
    try {
        const email = req.user.user.email
        
        const member = await prisma.user.findFirst({
            where:{
                email:email
            },
            select:{
                id:true,
                email:true,
                role: true
            }
        })
        console.log(email);
        
        res.json({member})
    } catch (err) {
        next(err)
    }
}