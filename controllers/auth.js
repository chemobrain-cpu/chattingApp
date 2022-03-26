const express = require("express")
const router = express.Router()
const app = express()
const bodyParser = require("body-parser")
const path = require("path")
const fs = require("fs")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
let {comparePassword,hashPassword} = require("../utils/utilityFun")
const mongoose = require('mongoose')
let User = require("../databaseModel/user").User
let Admin = require("../databaseModel/user").Admin

let Message = require("../databaseModel/user").Message

let Chat = require("../databaseModel/user").Chat


//const nodemailer = require("nodemailer")


module.exports.login = async(req,res)=>{

 //destructuring the request body

  let {passwordValue,emailValue, } = req.body
  //validation logic
  let userExist = await User.findOne({email:emailValue})
  if(!userExist){
     return res.status(404).json({
          message:'user cannot be identified'
      })
  }
  //then user exist,comparing user password
  let match = await comparePassword(passwordValue,userExist.password)
  if(!match){
      console.log('reached')
    res.status(301).json({
        message:'password not match'
    })

  }
  //generate a token 
  
  const token = jwt.sign({
      user_id:userExist._id,
      user_email:userExist._email
  },process.env.SECRET_KEY,{
      expiresIn:"2h"
  })

  userExist.token = token
  let saved_user = await userExist.save()

  console.log('reachedppp')
  res.status(200).json({
      user:saved_user,
      token:token

  })
  

}


module.exports.signup = async(req,res)=>{
    const {email,password} = req.body
   
    //validation logic
    let userExist = await User.findOne({email:email})
    if(userExist){
        //the correct status code
        return res.status(405).json({
            message:'email already registered'
        })
    }
    //proceed to register user
    const hashedPassword = await hashPassword(password,5)

    let newUser = new User({
        _id:new mongoose.Types.ObjectId(),
        email:email,
        password:hashedPassword,
        photo:req.file.filename
    })

    let savedUser = await newUser.save()
    res.status(201).json({
        message:'sucessful'
    })


}


module.exports.adminLogin = async(req,res)=>{

    //destructuring the request body
   
     let {passwordValue,emailValue, } = req.body
     //validation logic
     let userExist = await Admin.findOne({email:emailValue})
     if(!userExist){
        return res.status(404).json({
             message:'user cannot be identified'
         })
     }
     //then user exist,comparing user password
     let match = await comparePassword(passwordValue,userExist.password)

     if(!match){
         console.log('reached')
       return res.status(301).json({
           message:'password not match'
       })
   
     }
     //generate a token 
     
     const token = jwt.sign({
         user_id:userExist._id,
         user_email:userExist._email
     },process.env.SECRET_KEY,{
         expiresIn:"2h"
     })
   
     userExist.token = token
     let saved_user = await userExist.save()
   
     console.log('reachedppp')
     return res.status(200).json({
         user:saved_user,
         token:token
   
     })
     
   
}
   
   
module.exports.adminSignup = async(req,res)=>{
       const {email,password,secretkey} = req.body

    
       if(!secretkey && secretkey !=='precious'){
        return res.status(405).json({
            message:'email already registered'
        })

       }
       //validation logic
       let userExist = await Admin.findOne({email:email})
       if(userExist){
           //the correct status code
           return res.status(405).json({
               message:'email already registered'
           })
       }
       //proceed to register user
       const hashedPassword = await hashPassword(password,5)
   
       let newUser = new Admin({
           _id:new mongoose.Types.ObjectId(),
           email:email,
           password:hashedPassword,
           photo:req.file.filename
       })
   
       let savedUser = await newUser.save()
       return res.status(201).json({
           message:'sucessful'
       })
   
   
}

module.exports.getUsers = async(req,res,next)=>{
    //validation
 
  const {admin,email}= req.body
  if(admin){
      try{
          let allUsers = await User.find()
          console.log(allUsers)
          return res.status(200).json({data:allUsers})

      }catch(err){
          let error = new Error(err.message)

          next(error)
      }
    }else{
        try{
            let allAdmin = await Admin.find()

            console.log(allAdmin)
            return res.status(200).json({data:allAdmin})
        }catch(err){
            let error = new Error(err.message)
             next(error)

        }
  
    }
      
 
  
  
  }
  
  
  Message.find().then(data=>{
    console.log(data)
  })

  /*
  

User.find().then(data=>{
    console.log(data)
})

Admin.find().then(data=>{
    console.log(data)
})
Admin.deleteMany().then(data=>{
    console.log(data)
  })
  
  User.deleteMany().then(data=>{
    console.log(data)
  })
  
  Chat.deleteMany().then(data=>{
    console.log(data)
  })
  Message.deleteMany().then(data=>{
    console.log(data)
  })
  
  Message.find().then(data=>{
    console.log(data)
  })






/*
{
    _id: new ObjectId("622fc66bc9ae85c11dc29f2b"),
    senderEmail: 'preciousarierhi@gmail.com1',
    recieverEmail: 'preciousarierhi@gmail.com',
    message: 'hey',
    roomId: '0.3071479814461995',
    time: '15:49',
    __v: 0
  }









*/
