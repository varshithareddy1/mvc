const express=require("express")
const router =express.Router();
//user controller 
const Usercontroller=require("../controllers/User")



//getting all users 
router.get('/', Usercontroller.getAllUsers);
//for adding new user
router.post('/register', Usercontroller.newUser);



module.exports=router;