const mongoose = require('mongoose')



const UserSchema =new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    token:{
        type:String,

    },
    status:{
        type:String,
        default:'offline'
    }
    
})

const AdminSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    token:{
        type:String,

    },
    admin:{
        type:String,
        default:'admin'

    },
    status:{
        type:String,
        defalut:'offline'
    }
    
})
const ChatSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    senderEmail:{
        type:String,
        required:true
    },
    recieverEmail:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
        
    },
    roomId:{
        type:String
    }
    
})

const MessageSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    senderEmail:{
        type:String,
        required:true
    },
    recieverEmail:{
        type:String,
        required:true
    },
    message:{
        type:String,
    },
    roomId:{
        type:String
    },
    time:{
        type:String
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
    
})



let Message  = mongoose.model("Message",
MessageSchema)


let Chat  = mongoose.model("Chat",
ChatSchema)



let User   = mongoose.model("User",UserSchema)


let Admin  = mongoose.model("Admin",AdminSchema)

module.exports.Admin = Admin

module.exports.User = User

module.exports.Chat = Chat

module.exports.Message = Message