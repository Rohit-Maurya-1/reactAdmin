const appoimentController = require("../controller/appoiment.controller")
const express= require("express")
appoiment_router= express()

matrial_router.post("/addAppoiment",appoimentController.addAppoiment)
matrial_router.get("/getAppoiment",appoimentController.getAppoiment)
matrial_router.put("/UpdateAppoiment/:id",appoimentController.UpdateAppoiment)
matrial_router.delete("/DeleteAppoiment/:id",appoimentController.DeleteAppoiment)
module.exports=appoiment_router