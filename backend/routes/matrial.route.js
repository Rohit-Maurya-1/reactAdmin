const materialController = require("../controller/material.controller")
const express= require("express")
matrial_router= express()

matrial_router.post("/addMaterial",materialController.addMaterial)
matrial_router.get("/getMaterial",materialController.getMaterial)
matrial_router.put("/UpdateMaterial/:id",materialController.UpdateMaterial)
matrial_router.delete("/DeleteMaterial/:id",materialController.DeleteMaterial)
module.exports=matrial_router