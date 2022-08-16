require("dotenv").config();
const express=require("express")
const app=express()
const port =process.env.PORT || 3000

//require database connection
require('./db/Conn');
//convert body data to json format
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes for user 
const userRoutes=require("./routes/User")
const adminRoutes=require("./routes/Admin");

//routes for user
app.use("/user",userRoutes)
//routes for admin 
app.use("/admin",adminRoutes)


//listen at port 
app.listen(port,()=>{


    console.log(`app running at port http://localhost:${port}`)
})