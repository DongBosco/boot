const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRouter= require("./routers/userRouter")

dotenv.config()
app.use(express.json())

const server = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("db connected")
        mongoose.set("debug",true);

        app.use("/user",userRouter)
        
        app.get("/", (req,res)=>{
            return res.send("hello")    
        })
        app.listen(4000, ()=>{
            console.log("serverOnPort_4000")
        })
    } catch (error) {
        console.log("db fail")
    }

}

server()
