const prisma = require("../config/prisma")
const createError = require("../utils/create-error")


exports.markLandMark = async(req,res,next) =>{
    try {
        const {title,lat,lng} = req.body
        const newLandMark = await prisma.landmark.create({
            data:{
                title:title,
                lat:Number(lat),
                lng:Number(lng),
            }
        })
        
        console.log(newLandMark);
        res.json({message :'Mark Success!!'})
    } catch (err) {
        next(err)
    }
    
}

exports.listLandMark = async(req,res,next)=>{
    try {
        const map = await prisma.landmark.findMany({
            select:{
                id:true,
                title:true,
                lat:true,
                lng:true
            }
        })
        res.json(map)
    } catch (err) {
        next(err)
    }
}

exports.deleteMap = async(req,res,next) =>{
    try {
        const {id} = req.params
        const map = await prisma.landmark.delete({
            where:{
                id:Number(id)
            }
        })
        
        res.json({message:"Delete Success"})
    } catch (err) {
        console.log(err);
        next(err)
    }
}