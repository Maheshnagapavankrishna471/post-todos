const todoConnection = require("./model/todocollection")  
const authConnection = require("./model/loginandsignup")
// const dotenv = require("dotenv")  
const middleware = require("./middleware")
const mongoose = require("mongoose")  
const jwt = require ("jsonwebtoken")  
const cors=require('cors')
const express = require("express")  
const loginandsignup = require("./model/loginandsignup")  



const app = express()
app.use(cors())
// dotenv.config()
app.use(express.json()) 
const DB_URL = 'mongodb+srv://mahesh:1234@cluster0.kniegx7.mongodb.net/?retryWrites=true&w=majority' 
mongoose.connect(DB_URL).then((db,err) => {
    if (err) throw err
    else{
        console.log("DB is connected")
    }
})  

app.post("/register",async(req,res)=>{
    try{
        const {name,email,password,conformpassword} = req.body
        let emailExists = await authConnection.findOne({email})  
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
    catch (err) {
        let mailError = ""  
        let passError = ""  
      
        if (err.code === 11000) {
          mailError = 'Email already exists'  
        } else if (err.errors) {
          mailError = err.errors.email && err.errors.email.message ? err.errors.email.message : ""  
          passError = err.errors.password && err.errors.password.message ? err.errors.password.message : ""  
        }
      
        res.status(400).json({
          mail: mailError,
          pass: passError
        })  
      }
      
})  

app.post("/login",async(req,res)=>{
    try{
        let{email,password} = req.body
        let exists = await authConnection.findOne({email})
       if(email===""&&password===""){
        return res.json({M:"please enter a valid email",m:"passwod incorrect"})
       }
        if (!exists) {
            return res.json({M:"please enter a valid email"})
        }
        else if(exists==null){
            return res.status(404).send("please enter the email")
        }
        if(!exists&&password=="")
        {
            return res.json({M:"please enter a valid email",m:"passwod incorrect"})
        }
        else if(exists.password !== password){
            return res.json({M:"passwod incorrect"})
        }
      
        let payload = {
            user:{
                id:exists.id
            }
        }
        jwt.sign(payload, "jwtSecret", {expiresIn:"54m"},(err,token) =>{
            if(err) throw err
            return res.json({token,payload,id:exists._id,M:"done"})
        })
    }
    catch (e) {
        console.log(e)
    }
})


app.get("/one/:id", middleware, async (req, res) => {
   
    try {
        let id = req.params.id  
        const user = await loginandsignup.findById(id).populate('td')  
        if (!user) {
            return res.status(404).send("User not found")  
        }
        res.send(user)   // Send the entire user object with populated 'todo' array
    } catch (err) {
        res.status(500).send(err.message)  
    }
})  


// app.get("/todos",async(req,res)=>{
//     try{
//         console.log(req.headers,'these are req headers ')
//         let{authtoken} = req.headers
//         const verifyToken = jwt.verify(authtoken,"jwtSecret")

//         const userId = verifyToken.user.id
//         const userTodos = await todoConnection.find({data:userId})

//         return res.status(200).json({
//             message:"working",
//             todos:{
//                 userTodos
//             }
//         })
   
//     }catch(error){
//         return res.status(400).json({
//             message:error.message
//         })
//     }
// })


app.post("/addtodo",async(req,res)=>{
    try{
        // await todoConnection.create(req.body)  
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
})  

app.patch("/updatetodo/:id",async(req,res)=>{
    try{
        await todoConnection.findByIdAndUpdate(req.params.id,req.body)
        res.send("data is updated")
    } catch (e) {
        console.log(e)
    }
})  

// app.delete("/deletetodo/:id",async(req,res)=>{
//     try{
//         await todoConnection.findByIdAndDelete(req.params.id)
//         res.send("document is deleted")
//     } catch (e){
//         console.log(e)
//     }
// })  
// --------
app.delete("/deletetodo/:id", async (req, res) => {
    try {
        const deletedTodo = await todoConnection.findByIdAndDelete(req.params.id)    
        if (!deletedTodo) {
            return res.send("id not found")    
        }
        const user = await loginandsignup.findOne({td:req.params.id })    
        if (user) {
            user.td.pull(req.params.id)    
            await user.save()    
        }
        res.send("Todo deleted successfully")    
    } catch (e) {
        console.log(e)    
        res.status(500).send("Internal server error")    
    }
})    
// ----
app.get("/updatetodo/:id",async(req,res)=>{
    let edittodo  
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