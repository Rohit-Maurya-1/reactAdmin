const mongoose= require("mongoose")
const UserSchema = mongoose.Schema({
    username:{
     type:String,
     required:true
     },
     email:{
    type:String,
    required:true
   }, 
   phoneNumber:{
     type:Number,
  },
   image:{
    type:String
   },
  },
  {
  timestamps:true
  })
const UserModel= mongoose.model("User",UserSchema)
module.exports= UserModel
