const todoConnection = require("./model/todocollection");
const authConnection = require("./model/loginandsignup");
const middleware = require("./middleware")
const mongoose = require("mongoose");
const jwt = require ("jsonwebtoken");
const cors=require('cors')
const express = require("express");
const loginandsignup = require("./model/loginandsignup");

const app = express()
app.use(cors())
app.use(express.json());
const DB_URL =`mongodb://127.0.0.1:27017/todoLIST`;
mongoose.connect(DB_URL).then((db,err) => {
    if (err) throw err
    else{
        console.log("DB is connected")
    }
});

app.post("/register",async(req,res)=>{
    try{
        const {name,email,password,conformpassword} = req.body
        let emailExists = await authConnection.findOne({email});
        if(emailExists){
            return res.status(400).send("Email is already existed")
        }
        if(password !== conformpassword){
            return res.status(400).send("invalid password")
        }
        else {
            await authConnection.create(req.body)
            return res.status(200).send("Registered successfully")
        }
    }
    catch (e) {
        console.log(e)
    }
});

app.post("/login",async(req,res)=>{
    try{
        let{email,password} = req.body
        let exists = await authConnection.findOne({email})
        if (!exists) {
            return res.status(404).send("user not existed")
        }
        if (exists.password !== password){
            return res.status(400).send("passwod incorrect")
        }
        let payload = {
            user:{
                id:exists.id
            }
        }
        jwt.sign(payload, "jwtSecret", {expiresIn:"54m"},(err,token) =>{
            if(err) throw err
            return res.json({token,payload})
        })
    }
    catch (e) {
        console.log(e)
    }
})


app.get("/one/:id", middleware, async (req, res) => {
   
    try {
        let id = req.params.id;
        const user = await loginandsignup.findById(id).populate('td');
        if (!user) {
            return res.status(404).send("User not found");
        }

        res.send(user); // Send the entire user object with populated 'todo' array
    } catch (err) {
        res.status(500).send(err.message);
    }
});



app.post("/addtodo",async(req,res)=>{
    try{
        
        // await todoConnection.create(req.body);
        var { todo,data } = req.body
        var todo1 = new todoConnection(
            {todo,data}
        )
        var com =  await todo1.save()
        var fun=await loginandsignup.findById(data)
        fun.td.push(com)
        console.log(fun)
        await fun.save()
        res.send("data is added to DB")
    }   catch (e) {
        console.log(e)
    }
});

app.patch("/updatetodo/:id",async(req,res)=>{
    try{
        await todoConnection.findByIdAndUpdate(req.params.id,req.body)
        res.send("data is updated")
    } catch (e) {
        console.log(e)
    }
});

app.delete("/deletetodo/:id",async(req,res)=>{
    try{
        await todoConnection.findByIdAndDelete(req.params.id)
        res.send("document is deleted")
    } catch (e){
        console.log(e)
    }
        

});

app.get("/updatetodo/:id",async(req,res)=>{
    let edittodo;
    try{
        edittodo = await todoConnection.findById(req.params.id,req.body)
        res.send(edittodo)
    }catch (e) {
        console.log(e)
    }
    if(!edittodo){
        res.status(400).json({
            message:"No data found"
        })
    }
    // return res.send(200).json(edittodo)
})

app.listen(7171,()=>{
    console.log("server started at port 7171")
})