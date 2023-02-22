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
    password:{
    type:String,
    required:true
  },
    image:{
    type:String
   },
   token:{
    type:String
 },
   role:{
   type: Number,
   default: 1,
},
 },
  {
  timestamps:true
  })
const AdminModel= mongoose.model("admin",UserSchema)
module.exports= AdminModel
