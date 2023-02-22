const mongoose= require("mongoose")
const UserSchema = mongoose.Schema({
//  username:{
//       type:String,
//       required:true
//     },
  User:{
  type: mongoose.Schema.Types.ObjectId,
  ref: "User"
},
 carriername:{
    type:String,
   required:true
 },
  pickupDate:{
    type:String,
    required:true
},
 pickupTime:{
    type:String
 },
 dropOffDate:{
    type:String
 },
 dropOfTime:{
    type:Number,
 },
  status:{
  type:Boolean,
  default:false
  }
},
{
  timestamps: true
})
const AppoimentModel= mongoose.model("appoiment",UserSchema)
module.exports= AppoimentModel