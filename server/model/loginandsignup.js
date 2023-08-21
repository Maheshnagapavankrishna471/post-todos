const mongoose = require("mongoose")
const login = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
        trim:true,
        unique:true,
    },
    password:{
        type:String,
    },
    conformpassword:{
        type:String,
    },
    td:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'todo',
            required:true
        }]
    
});
login.set('strictPopulate',false)
const loginandsignup = new mongoose.model("auth",login);

module.exports = loginandsignup