const jwt =require("jsonwebtoken")
const createErr = require("../utils/create-error")

exports.auth = (req,res,next)=>{
    try {
        
        //Step 1 Check headers
        const authHeader = req.headers.authorization
        // console.log(authHeader);
        if (!authHeader) {
            return createErr (401,"Token Missing")
        }
        const token = authHeader.split(" ")[1]
        // console.log(token);
        
        //Step 2 Decode
            jwt.verify(token,process.env.SECRET,(err,decode)=>{
                if (err) {
                    return createErr (400,"Token invalid")
                }
                //Step 3 next
                req.user = decode
                next()
            })

    } catch (err) {
        next(err)
    }
}