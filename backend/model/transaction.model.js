const mongoose= require("mongoose")
const UserSchema = mongoose.Schema({
 username:{
      type:String,
      required:true
    },
//  username:{
//   type: mongoose.Schema.Types.ObjectId,
//   ref: "User"
// },
   transactionId:{
    type:String,
    required:true
 },
   amount:{
    type:String,
    required:true
},
   date:{
    type:Date
}
}
)
const TransactionModel= mongoose.model("transaction",UserSchema)
module.exports= TransactionModel