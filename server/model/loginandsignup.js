const mongoose = require("mongoose")   
const { default: isEmail } = require("validator/lib/isEmail")   
// const { isEmail } = pkg   

const login = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
        trim:true,
        unique:[true,'email is required'],
        validate: [isEmail, "please enter a valid email"]

    },
    password:{
        type:String,
        required: [true, "please enter the password"],
        minlength: [6, "minimum 6 chars needed"]
    },
    conformpassword:{
        type:String,
    },
    td:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'todo',
            required:true
        }]
    
})   
login.set('strictPopulate',false)
const loginandsignup = new mongoose.model("auth",login)   

module.exports = loginandsignup