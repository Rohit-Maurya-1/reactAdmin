const mongoose= require("mongoose")
const UserSchema = mongoose.Schema({
   materialName:{
        type:String,
        required:true
    },
})
const MaterialModel= mongoose.model("material",UserSchema)
module.exports= MaterialModel