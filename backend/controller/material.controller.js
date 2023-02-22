const MaterialModel= require("../model/material.model")
const RESPONCE = require("../constant/responce")

 module.exports.addMaterial = async(req,res,next)=>{
    try {
       const {materialName}=req.body;
       const material= await MaterialModel.findOne({materialName})
       if(material){
         return res.status(401).send({
          status: false,
          message:"material already added",
          response:{}
         })
       }
       const data = await MaterialModel.create({
           materialName
    });
     if(!data){
       return RESPONCE.ERROR(res,'user not register')
     }
     return RESPONCE.SUCCESS(res, 'material add successfully',data)
     } catch (error){
      next(error);
    }
  };
  module.exports.getMaterial = async (req, res, next) => {
  try {
    const getAllData = await MaterialModel.find()
    if (getAllData) {
      return RESPONCE.SUCCESS(res, 'get all material', getAllData)
    } else {
      return RESPONCE.ERROR(res, 'not get')
    }
  } catch (error) {
    next(error)
  }
  
  }
  module.exports.UpdateMaterial = async (req, res, next) => {
    try {
      const {materialName}=req.body
      const id = req.params.id
      if(!id) {
        return RESPONCE.ERROR(res, 'plz provide params id')
      }
      let userID = await MaterialModel.findOne({
        '_id':id
      })
     const updateData = await MaterialModel.findOneAndUpdate({
        userID
      },{
        $set:{
        materialName
        }
      }, {
        new:true
      })
      if(updateData){
        return RESPONCE.SUCCESS(res, 'material update successfully', updateData)
      } else {
        return RESPONCE.ERROR(res, 'material not updated ')
      }
    } catch (error){
      next(error)
    }
  }
  module.exports.DeleteMaterial = async (req, res, next) => {
  try {
    const id = req.params.id
    if (!id) {
      return RESPONCE.ERROR(res,'plz provide params id')
    }
    let user_id = await MaterialModel.findOne({
      '_id': id
    })
  const deleteData = await MaterialModel.findByIdAndDelete(user_id)
    if(deleteData) {
      return RESPONCE.SUCCESS(res,'materialdeleted successfully')
    }else{
      return RESPONCE.ERROR(res,'material not deleted')
    }
  } catch (error){
    next(error)
  }
  }