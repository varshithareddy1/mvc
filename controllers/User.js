//require user modal
const Register=require("../models/User")


const getAllUsers = async(req, res, next) => {
    try{

        const Data=await Register.find({})
    
        if(Data){
    
            res.send(Data)
        }
        else{
    
            res.send("soething bad ")

        }
    
    }
    catch(err){
    
        console.log(err)
    }
      
};

//POST '/tea'
const newUser = async (req, res, next) => {
    try{

        const data=await new Register(req.body)
        const savetodb=data.save()
        if(savetodb){
    
            res.send(data)
        }
        else{
            res.send("some error")
        }
    
        }
        catch(err){
            console.log(err)
        }
    
};


module.exports={
    getAllUsers,newUser
};