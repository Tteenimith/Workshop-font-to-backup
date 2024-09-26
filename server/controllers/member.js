const prisma = require("../config/prisma")

exports.listMember = async(req,res) =>{
    try {
        const member = await prisma.user.findMany({
            select:{
                id:true,
                email:true,
                role:true,
                updateAt:true
            }
        })
        
        res.json(member)
    } catch (err) {
        console.log(err);
        
    }
}


exports.updateMember = async(req,res,next)=>{
    try {
        const {memberId} = req.params
        const {role} = req.body
        const member = await prisma.user.update({
            where:{
                id:Number(memberId)
            },
            data:{
                role: role
            }
        })
        console.log(role);
        
        res.json("Update Success")
    } catch (err) {
        next(err)
    }
}

exports.deleteMember = async(req,res,next) =>{
    try {
        const {memberId} = req.params
        const member = await prisma.user.delete({
            where:{
                id:Number(memberId)
            }
        })
        
        res.json({message:"Delete Success"})
    } catch (err) {
        console.log(err);
        next(err)
    }
}