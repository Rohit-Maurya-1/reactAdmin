const transactionController = require("../controller/transaction.controller")
const express= require("express")
transaction_router= express()
//=================================================transaction===============================================
transaction_router.post("/addTransaction",transactionController.addTransaction)
transaction_router.get("/getTransaction",transactionController.getTransaction)
transaction_router.put("/UpdateTransaction/:id",transactionController.UpdateTransaction)
transaction_router.delete("/DeleteTransaction/:id",transactionController.DeleteTransaction)
module.exports= transaction_router