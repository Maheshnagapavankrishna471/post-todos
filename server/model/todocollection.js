const mongoose = require("mongoose")
const todoApp = new mongoose.Schema({
    todo:{
        type:String,
        trim:true,
        required:true
    },
    data:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"auth",
        required:true
    }
});
// todoApp.set('strictPopulate',false)
const todoConnection = new mongoose.model("todo",todoApp);
module.exports = todoConnection;