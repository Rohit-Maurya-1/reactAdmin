const TransactionModel= require("../model/appoiment.model")
const RESPONCE = require("../constant/responce")

//=====================================================transaction data =================================================================
  module.exports.addTransaction = async(req,res,next)=>{
    try {
       const {username,transactionId,amount,date}=req.body;
       const data = await TransactionModel.create({
        username,transactionId,amount,date
    });
     if(!data){
       return RESPONCE.ERROR(res,'transaction not add')
     }
     return RESPONCE.SUCCESS(res,'transaction add successfully',data)
     } catch (error){
      next(error);
    }
  };
  module.exports.getTransaction = async (req, res, next) => {
  try {
    const getAllData = await TransactionModel.find()
    if (getAllData) {
      return RESPONCE.SUCCESS(res, 'get all transactionData', getAllData)
    } else {
      return RESPONCE.ERROR(res, 'not get')
    }
  } catch (error) {
    next(error)
  }
  
  }
  module.exports.UpdateTransaction = async (req, res, next) => {
    try {
      const {username,transactionId,amount,date}=req.body
      const id = req.params.id
      if(!id) {
        return RESPONCE.ERROR(res, 'plz provide params id')
      }
      let userID = await TransactionModel.findOne({
        '_id':id
      })
     const updateData = await TransactionModel.findOneAndUpdate({
        userID
      },{
        $set:{
            username,transactionId,amount,date
        }
      }, {
        new:true
      })
      if(updateData){
        return RESPONCE.SUCCESS(res,'transaction update successfully', updateData)
      } else {
        return RESPONCE.ERROR(res,'not updated')
      }
    } catch (error){
      next(error)
    }
  }
  module.exports.DeleteTransaction = async (req, res, next) => {
  try {
    const id = req.params.id
    if (!id) {
      return RESPONCE.ERROR(res,'plz provide params id')
    }
    let user_id = await TransactionModel.findOne({
      '_id': id
    })
  const deleteData = await TransactionModel.findByIdAndDelete(user_id)
    if(deleteData) {
      return RESPONCE.SUCCESS(res,'transaction delete successfully')
    }else{
      return RESPONCE.ERROR(res,'not deleted')
    }
  } catch (error){
    next(error)
  }
  }