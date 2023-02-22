const AppoimentModel= require("../model/appoiment.model")
const RESPONCE = require("../constant/responce")
//================================================add appoiment==================================================

 module.exports.addAppoiment = async(req,res,next)=>{
    try {
      const {carriername,pickupDate,pickupTime,dropOffDate,dropOfTime,status,User}=req.body;
       const data = await AppoimentModel.create({
        carriername,pickupDate,pickupTime,dropOffDate,dropOfTime,status,User
     });
      console.log(data,"appoiment");
     if(!data){
       return RESPONCE.ERROR(res,'appoiment not added')
     }
     return RESPONCE.SUCCESS(res, 'add appoiment successfully',data)
     } catch (error){
      next(error);
    }
  };
  module.exports.getAppoiment = async (req, res, next) => {
  try {
    const getAllData = await AppoimentModel.find()
    if (getAllData) {
      return RESPONCE.SUCCESS(res, 'get all appoiment', getAllData)
    } else {
      return RESPONCE.ERROR(res, 'not get')
    }
  } catch (error) {
    next(error)
  }
  
  }
  module.exports.UpdateAppoiment = async (req, res, next) => {
    try {
      const {carriername,pickupDate,pickupTime,dropOffDate,dropOfTime,status}=req.body
      const id = req.params.id
      if(!id) {
        return RESPONCE.ERROR(res, 'plz provide params id')
      }
      let userID = await AppoimentModel.findOne({
        '_id':id
      })
     const updateData = await AppoimentModel.findOneAndUpdate({
        userID
      },{
        $set:{
          carriername,pickupDate,pickupTime,dropOffDate,dropOfTime,status
        }
      }, {
        new:true
      })
      if(updateData){
        return RESPONCE.SUCCESS(res, 'appoiment update successfully', updateData)
      } else {
        return RESPONCE.ERROR(res, 'appoiment not updated ')
      }
    } catch (error){
      next(error)
    }
  }
  module.exports.DeleteAppoiment = async (req, res, next) => {
  try {
    const id = req.params.id
    if (!id) {
      return RESPONCE.ERROR(res,'plz provide params id')
    }
    let user_id = await AppoimentModel.findOne({
      '_id': id
    })
  const deleteData = await AppoimentModel.findByIdAndDelete(user_id)
    if(deleteData) {
      return RESPONCE.SUCCESS(res,'appoimentdeleted successfully')
    }else{
      return RESPONCE.ERROR(res,'user not deleted')
    }
  } catch (error){
    next(error)
  }
  }