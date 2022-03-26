require('dotenv').config()
const app = require('express')();
const express = require('express')
const bodyParser = require('body-parser')
const {json} = require('body-parser')
const cors = require('cors')
const multer = require('multer')
const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/BizzDB",()=>{
    console.log("connected")
})
const path = require('path')

const {Server} = require('socket.io')

let server = require('http').createServer(app)

//initializing sockets
///const io = socketio(server).sockets
const port = 5000

const User = require("./databaseModel/user")




app.use(cors())

app.use('/public',express.static(path.join(__dirname,'/public/')))

//configuring multer

const multerStorage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public')
    },
    filename:(req,file,cb)=>{
       
        cb(null,Date.now() + '_' + file.originalname)
    }
 })
 
 
 app.use(multer({storage:multerStorage}).single('photo'))







app.use(bodyParser.urlencoded({extended:true}))
app.use(json())




const AuthRoutes = require("./routes/auth");
let io = new Server(server,{
    cors:{
        origin:"*",
        methods:['GET','POST'],
    }
})

app.use(AuthRoutes.router)
//express error middleware
app.use((err,req,res,next)=>{
    //do something
    err.statusCode = err.statusCode || 300
    err.message = err.message || "an error occured on the server"

    res.status(err.statusCode).json({response:err.message})
    
})

require("./routes/socket")(io)
//requiring our socket middleware
server.listen(port,()=>{
    console.log("listening on port 5000")
})
