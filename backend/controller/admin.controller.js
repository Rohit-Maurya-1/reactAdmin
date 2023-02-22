const AdminModel = require("../model/admin.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const SECRETKEY = process.env.SECRET_KEY;
const RESPONCE = require("../constant/responce")
require("dotenv").config();

//======================================================admin controller============================================

module.exports.adminRegister = async(req,res,next)=>{
  try {
     const {username,email,password,role}=req.body;
     const UserEmail = await AdminModel.findOne({
      email
    });
    console.log(UserEmail,"useremail");
    if(UserEmail){
         return res.send({
         msg:"email already exist",
         status: 201,
         success: false
        })
     }
  let Password = await bcrypt.hash(password,saltRounds);
  const data = await AdminModel.create({
       username,
       email,
       role,
       password:Password,
      image:req.file.filename
  });
    if(!data){
      return RESPONCE.ERROR(res,'user not register')
    }
    const Token = jwt.sign({
      data_id: data._id,
      email
    },SECRETKEY, 
    // {
    //   expiresIn:"2h",
    // }
    );
    const userData = await AdminModel.findOneAndUpdate({
      email:email
    }, {
      $set:{
        token:Token
      }
    },{
      new: true
    });
    return RESPONCE.SUCCESS(res, 'user register successfully',userData)
  
  } catch (error){
    next(error);
  }
};
module.exports.adminlogin = async (req, res, next) => {
  try {
   const {email,password} = req.body
   const UserEmail = await AdminModel.findOne({email})
  //  console.log(UserEmail);
    if (!UserEmail){
        return res.send({
        msg:"invalid username or password",
        status: 201,
        success: false
       })
    }

    if(UserEmail.role!==0){
    return res.send({
          msg:"only admin permission",
          status: 201,
          success: false
         })
    }
    const Password = await bcrypt.compare(password, UserEmail.password)
      if (!Password) {
        return res.send({
        msg:"invalid username or password",
        status: 201,
        success: false
       })
    }
    const Token = jwt.sign({
      UserEmail: UserEmail._id,
      email
    }, SECRETKEY,{
       expiresIn: "2h",
    });
    const userData = await AdminModel.findOneAndUpdate({email: email}, {$set: {token: Token}}, {new:true} );
     return RESPONCE.SUCCESS(res, 'user login successfully', userData)
  } catch (error){
    next(error)
  }
}
module.exports.getadminData = async (req, res, next) => {
  try {
    const getAllData = await AdminModel.find()
    if (getAllData) {
      return RESPONCE.SUCCESS(res, 'get all data', getAllData)
    } else {
      return RESPONCE.ERROR(res, 'not get')
    }
  } catch (error) {
    next(error)
  }

}











  
