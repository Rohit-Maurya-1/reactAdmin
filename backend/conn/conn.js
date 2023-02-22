const mongoose= require("mongoose");
require('dotenv').config();
 
const DB= process.env.DATABASE
const connection=  mongoose.connect(DB,{
   useNewUrlParser: true,
   useUnifiedTopology: true

}).then((res)=>{
  console.log('connection successfully')
}).catch((e)=>{
   console.log("server not connected")
})