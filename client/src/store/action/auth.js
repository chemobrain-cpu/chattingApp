import IO from 'socket.io-client'
//initialising sockets
import axios from 'axios'
export const TOKEN = "TOKEN";

export const USERS = "USERS";
export const ACTIVE_USER = "ACTIVE_USER";

export const ACTIVE_ROOM = "ACTIVE_ROOM";
export const MESSAGES = 'MESSAGES'
export const INJECT_MESSAGE = 'INJECT_MESSAGE'
export const ROOM_MESSAGES = 'ROOM_MESSAGES'
export const CLEAR_CHAT = 'CLEAR_CHAT'
export const CLEAR_MESSAGES = 'CLEAR_MESSAGES'

export const SIGNOUT = 'SIGNOUT'

export const SEND_MESSAGE = 'SEND_MESSAGE'


export const socket = IO("http://localhost:5000",{
  
})

export const isToken = () =>{
  return async(dispatch,getState)=>{

    let tokenFromStorage = localStorage.getItem('token')
    if(tokenFromStorage){
      let expiryDate = tokenFromStorage.expiresIn
      let token = tokenFromStorage.token
      if(expiryDate){
        dispatch({type:TOKEN,payload:token})

      }
    //else do nothing
     
    }


    
  }
}
export const login = (credentials) =>{
  
 
  return async(dispatch)=>{
    try{
      let response = await fetch('http://localhost:5000/login',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(credentials)

      })
      if(response.status == 200){
     
       //if theres user then i should get back a token
       let data = await response.json()
       //dispatch user and token
       dispatch({type:TOKEN,payload:data.token})

       dispatch({type:ACTIVE_USER,payload:data.user})
       return 'signed in sucessfully'
      
      }
      if(response.status == 301){
        //algorithm
        //if theres user then i should get back a token
        let data = await response.json()
        return data.message
 
        
       }
       if(response.status == 404){
        //algorithm
        //if theres user then i should get back a token
        let data = await response.json()
        return data.message
 
       }

    }catch(err){
      alert(err.message)
      console.log(err.message)

    }

    
  }
}
export const signup = (credentials) =>{
  let formData = new FormData()
 

  formData.append("photo",credentials.photo)
  
  formData.append("email",credentials.email)
  
  formData.append("password",credentials.password)
  
  return async(dispatch,getState)=>{
    try{
      
      let response = await fetch('http://localhost:5000/signup',{
        method:'POST',
       
        body:formData,

      })
      if(response.status == 201){
       let data = await response.json()
       return 'signin'

       
      }
      if(response.status == 405){
        let data = await response.json()
        return 'signin'
 
        
       }

    }catch(err){
      throw new Error(err.message)

    }

    
  }
}


export const adminLogin = (credentials) =>{
  
 
  return async(dispatch)=>{
    try{
      let response = await fetch('http://localhost:5000/adminlogin',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(credentials)

      })
      if(response.status == 200){
     
       //if theres user then i should get back a token
       let data = await response.json()
       //dispatch user and token
       dispatch({type:TOKEN,payload:data.token})

       dispatch({type:ACTIVE_USER,payload:data.user})
       

       return 'signed in sucessfully'
      

       
      }
      if(response.status == 301){
        //algorithm
        //if theres user then i should get back a token
        let data = await response.json()
        return data.message
 
        
       }
       if(response.status == 404){
        //algorithm
        //if theres user then i should get back a token
        let data = await response.json()
        return data.message
 
        
       }

    }catch(err){
      alert(err.message)

    }

    
  }
}

export const adminSignup = (credentials) =>{
  let formData = new FormData()
 

  formData.append("photo",credentials.photo)
  
  formData.append("email",credentials.email)
  
  formData.append("password",credentials.password)
  
  formData.append("secretkey",credentials.secretKey)
  
  return async(dispatch,getState)=>{
    try{
      
      let response = await fetch('http://localhost:5000/adminsignup',{
        method:'POST',
        body:formData,
      })
      if(response.status == 201){
       let data = await response.json()
       return 'signin'

       
      }
      if(response.status == 405){
        let data = await response.json()
        return 'signin'
 
        
       }

    }catch(err){
      throw new Error(err.message)

    }

    
  }
}
export const getUsers = () =>{
  
  //check for unique room
  return async(dispatch,getState)=>{
    const {userData} = getState().auth
 
    //check for unique chat
    const uniqueChat =  localStorage.getItem('@uniqueChat')
    if(!uniqueChat){
      localStorage.setItem('@uniqueChat',JSON.stringify([]))

    }
    const uniqueRoom =  localStorage.getItem('@uniqueRoom')
    if(!uniqueRoom){
      localStorage.setItem('@uniqueRoom',JSON.stringify([]))

    }
    try{
      
      
      let data = await fetch('http://localhost:5000/users',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(userData)
      })
      if(data.status == 300){

      }
       if(data.status == 404){
        
      }
      if(data.status == 200){
        let response = await data.json()
        
       dispatch({type:USERS,payload:response.data})

        
      }
     

    }catch(err){
      alert(err.message)
      throw new Error(err.message)

    }

    
  }
}
export const createChat = (id) =>{
 return async(dispatch,getState)=>{
  const {userData,users} = getState().auth
  //getting client from store
  let client = users.filter(data=>data._id.toString() === id)
 
  //creating a chat
  let chats = {
    senderEmail:userData.email,
    recieverEmail:client[0].email,
    
  }
  //check for unique chat

  const uniqueChat =  localStorage.getItem('@uniqueChat')

  let uniqueChatData = JSON.parse(uniqueChat)
  if(uniqueChatData > 0){
    //checking if the user exist
    let containChat = uniqueChatData.filter(data=>data.recieverEmail === client[0].email)
    
    if(containChat.length > 0){
      
    return dispatch(chat(containChat[0]))

    }else{
      
     dispatch(chat({...chats,senderEmail:userData.email}))
     uniqueChat.push(chats)
    localStorage.setItem('@uniqueChat',JSON.stringify(uniqueChat))
    }

  }else{
    
    uniqueChatData.push(chats)

   
    localStorage.setItem('@uniqueChat',JSON.stringify(uniqueChatData))
    return dispatch(chat(chats))
    


  }


}

}
export const chat = (chatCredential)=>{
  console.log(chatCredential)

  return async(dispatch,getState)=>{
    
      socket.emit('openChat',chatCredential)
      socket.on('startchat',(data)=>{
       console.log('start chat with data')
       console.log(data)
        //store room id in localstorage
        const uniqueRoom =  localStorage.getItem('@uniqueRoom')

        let roomChat = {
          senderEmail:data[0].senderEmail,
          recieverEmail:data[0].recieverEmail,
          roomId:data[0].roomId
        }

        let parsedUniqueRoom = JSON.parse(uniqueRoom)

        

        if(parsedUniqueRoom.length === 0){
          
          parsedUniqueRoom.push(roomChat)
          localStorage.setItem('@uniqueRoom',JSON.stringify(parsedUniqueRoom))
         

        }
        if(parsedUniqueRoom.length > 0){
          let room_Exist 

          for(let value of parsedUniqueRoom){
            if(value.roomId == data[0].roomId){
              room_Exist = value

            }
          }
          


          if(!room_Exist){
            parsedUniqueRoom.push(roomChat)
            localStorage.setItem('@uniqueRoom',JSON.stringify(parsedUniqueRoom))
          }



        }
     
       
        
        socket.emit('joinusers',data[0].roomId,(roomId)=>{
          
          dispatch({type:ACTIVE_ROOM,payload:roomId})

        })

        
        

      })

      


  }
  
}
export const loadMessages = () =>{
  
   return async(dispatch,getState)=>{
    const {userData,messages} = getState().auth
    dispatch({type:CLEAR_MESSAGES})
   
    socket.emit('getSentMessages',userData,(myMessages)=>{
      //remodify each message to fit in my Ui
      let modifyMessages = myMessages.map(data=>{
       
          return {
            _id:data._id,
            senderEmail:data.senderEmail,
            recieverEmail:data.recieverEmail,
            message:data.message,
            roomId:data.roomId,
            time:data.time,
            sender:data.senderEmail == userData.email,createdAt:data.createdAt
          }
       
        
      })
      dispatch({type:MESSAGES,payload: modifyMessages})
      


    })
    socket.emit('getRecievedMessages',userData,(sentMessages)=>{
      

      let modifyMessages = sentMessages.map(data=>{
       
      return {
        _id:data._id,
        senderEmail:data.senderEmail,
        recieverEmail:data.recieverEmail,
        message:data.message,
        roomId:data.roomId,
        time:data.time,
        sender:data.senderEmail == userData.email,createdAt:data.createdAt
      }

      
     
      


    })
    dispatch({type:MESSAGES,payload: modifyMessages})

   })

  }
}
    



export const sendMsg = (message) =>{
  //add the message to the active room
 
  return async(dispatch,getState)=>{
    const { activeRoom} = getState().auth
    console.log(activeRoom)
    let obj = {activeRoom,message}
    socket.emit('sendMessage',obj)
    //dispatch an action to add this message to room and messages
    dispatch({type:SEND_MESSAGE,payload:message})

}
}

export const handleDispatchMsg = () =>{
  

  return async(dispatch)=>{
    socket.on('dispatchMsg',data=>{
     
      return dispatch(getDispatchMsg({...data}))
    })


}
}

export const getDispatchMsg = ({roomId,
  senderEmail,recieverEmail,time,message,_id,createdAt}) =>{
    return async (dispatch,getState)=>{
      const {userData} = getState().auth
      //modifying the messages to fit our UI
      let msg = {
        _id,
        senderEmail,
        recieverEmail,
        message,
        roomId,
        time,
        sender:senderEmail == userData.email,
        createdAt

      }

      //dispatch type inject message
      return dispatch({type:INJECT_MESSAGE,payload:msg})

    }

    

  

}
export const getRoomMessages = (id) =>{

  return async(dispatch,getState)=>{
    const { activeRoom,messages,activeRoomMessages} = getState().auth
    console.log(activeRoomMessages)

    if(messages.length > 0){

      for(let member of messages ){

        if(member.roomId == activeRoom){

          let excluded = activeRoomMessages.filter(data=>data._id == member._id)

          if(excluded.length == 0){
            activeRoomMessages.push(member)
  
          }
        }
      }
    
      dispatch({type:ROOM_MESSAGES,payload:activeRoomMessages})
      return

    }
     
  }
}
export const clearActiveRoom = ()=>{
  
  return async(dispatch)=>{
    dispatch({type:CLEAR_CHAT,payload:[]})
  }
  
}

export const signout = ()=>{
  
  return async(dispatch)=>{
    dispatch({type:SIGNOUT,payload:[]})
  }

}
