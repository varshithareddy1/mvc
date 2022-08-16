
const mongoose=require("mongoose")
const Admin=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true

    },
   right:{
    type:String,
    default:"Admin"
   }

})
module.exports= mongoose.model("Admin",Admin);