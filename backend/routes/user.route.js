const userController= require("../controller/user.controller")
const adminController= require("../controller/admin.controller")
const upload= require("../middleware/fileUpload")
// const auth= require("../middleware/auth_verifyToken")
// const authValidation= require("../validation/authValidation")
const express= require("express")
router= express()

//==================================================user admin login and ===================================
router.post("/adminRegister",upload.single("image"),adminController.adminRegister)
router.post("/adminlogin",adminController.adminlogin)
router.get("/getadminData",adminController.getadminData)

//============================================================add user data================================
router.post("/addUser",upload.single("image"),userController.addUser)
router.get("/getUserData",userController.getUserData)
router.put("/userUpdate/:id",userController.userUpdate)
router.delete("/userDelete/:id",userController.userDelete)

module.exports=router