const UserModel = require("../model/userModel")
const RESPONCE = require("../constant/responce")
require("dotenv").config();

module.exports.addUser = async(req,res,next)=>{
    try{
      const {username,email,phoneNumber}=req.body;
      const findEmail = await UserModel.findOne({
      email
     });
    if(findEmail){
          return res.send({
          msg:"email already exist",
          status: 201,
          success: false
         })
      }
      const data = await UserModel.create({
       username,
       email,
       phoneNumber,
       image:req.file.filename
   });
    if(!data){
      return RESPONCE.ERROR(res,'user not register')
    }
    return RESPONCE.SUCCESS(res, 'user add successfully',data)
    } catch (error){
     next(error);
   }
 };
module.exports.getUserData = async (req, res, next) => {
 try {
   const getAllData = await UserModel.find()
   if (getAllData) {
     return RESPONCE.SUCCESS(res, 'get all data', getAllData)
   } else {
     return RESPONCE.ERROR(res, 'not get')
   }
 } catch (error) {
   next(error)
 }

}
module.exports.userUpdate = async (req,res,next) => {
   try {
      const{username,phoneNumber}=req.body
      const id = req.params.id
      if(!id) {
       return RESPONCE.ERROR(res, 'plz provide params id')
     }
      let userID = await UserModel.findOne({
       '_id':id
     })
    const updateData = await UserModel.findOneAndUpdate({
       userID
     },{
       $set:{
         username,
         phoneNumber
       }
     }, {
       new: true
     })
     if(updateData){
       return RESPONCE.SUCCESS(res, 'user update successfully', updateData)
     } else {
       return RESPONCE.ERROR(res, 'user not updated update')
     }
   } catch (error){
     next(error)
   }
 }
module.exports.userDelete = async (req, res, next) => {
 try {
   const id = req.params.id
   if (!id) {
     return RESPONCE.ERROR(res,'plz provide params id')
   }
   let user_id = await UserModel.findOne({
     '_id': id
   })
 const deleteData = await UserModel.findByIdAndDelete(user_id)
   if(deleteData) {
     return RESPONCE.SUCCESS(res,'userdeleted successfully')
   }else{
     return RESPONCE.ERROR(res,'user not deleted')
   }
 } catch (error){
   next(error)
 }
}