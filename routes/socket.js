const mongoose = require('mongoose')
let User = require("../databaseModel/user").User
let Admin = require("../databaseModel/user").Admin

let Chat = require("../databaseModel/user").Chat

let Message = require("../databaseModel/user").Message
module.exports =async(io)=>{
    io.on('connection',async(socket)=>{
     
     
      socket.on('openChat',async(data)=>{
     
       const {senderEmail,recieverEmail}= data
       

       Chat.aggregate([
         {
           $match:{
             recieverEmail:recieverEmail,
             senderEmail: senderEmail
           },

         }
       ]).then(async(chat)=>{
         if(chat.length>0){
           
          socket.emit('startchat',chat)

         }else{
          Chat.aggregate([
            {
              $match:{
                recieverEmail:senderEmail,
                senderEmail:recieverEmail
              },
   
            }
          ]).then(async(latsAttempt)=>{
            if(latsAttempt.length>0){
              
           console.log('the chat is is')
              console.log(latsAttempt)
             socket.emit('startchat',latsAttempt)

            }else{
              let newChat = new Chat({
                _id:new mongoose.Types.ObjectId(),
                senderEmail:senderEmail,
                recieverEmail:recieverEmail,
                roomId:Math.random()
            
              })
              console.log('the chat is is is')
              console.log(newChat)
              socket.emit('startchat', [newChat])
      
              await newChat.save()

            }
          })

         }
       })
      })

      

      
      socket.on('joinusers',(roomId,cb)=>{
        socket.join(roomId)
        console.log('user can now start chatting')
        console.log(roomId)
        cb(roomId)
      })

      socket.on('getSentMessages',async(data,cb)=>{
        
        console.log('initialised')
        //get all messages the user sent
        let myMessages = await Message.find({senderEmail:data.email})
        console.log(myMessages)

        cb(myMessages)
      })
      socket.on('getRecievedMessages',async(data,cb)=>{
        console.log('initialised')
        //get all messages the user sent
        let recieveMessages = await Message.find({recieverEmail:data.email})
         cb(recieveMessages)
      })
      socket.on('sendMessage',async({activeRoom:id,message:data})=>{
        //sending mssages to connected room
        console.log(id)
        console.log(data)

        //save the message to the database storage
        const { senderEmail,recieverEmail,message,roomId,time} = data
  
        let newMessage = new Message({
          _id:new mongoose.Types.ObjectId(),
          roomId:roomId,
          senderEmail:senderEmail,
          recieverEmail:recieverEmail,
          time:time,
          message:message

        })

        await newMessage.save()
        
        /*socket.broadcast.to(newMessage.roomId).emit('dispatchMsg',{...newMessage})
  */
        socket.broadcast.to(id).emit('dispatchMsg',{...newMessage})



      })
     

      
    })
   
}
console.log("XXXXXXx")
Admin.find().then(data=>{
  console.log(data)
})

User.find().then(data=>{
  console.log(data)
})


