import React,{useEffect,useCallback,useState} from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHamburger, faPhone,faVideo,} from "@fortawesome/free-solid-svg-icons";

import DesktopSideBar from '../reusable/chatSideBarDesktop'

import MobileSideBar from '../reusable/chatSideBarMobile'

import ChatBox from '../reusable/chatBox'
import ChatInput from '../reusable/chatInput'

import {useParams} from 'react-router-dom'

import {useDispatch,useSelector } from "react-redux";

import {createChat,sendMsg ,getRoomMessages} from "../store/action/auth";




import './chat.css'
// import your fontawesome library

let Chat = () =>{
  //state for this component
  let [textMsg,setTextMsg] = useState('')
 // let [activeRooms,setActiveRoom] = useState('')
  let [roomMessages,setRoomMessages] = useState()
  let dispatch = useDispatch()
  let {id} = useParams()
  
  let {users,userData, activeRoom,activeRoomMessages} = useSelector(state=>state.auth)
  
  let callExec = async()=>{
   new Promise((res,rej)=>{
    dispatch(createChat(id))
    
    setTimeout(()=>{res()},2000)
    

    }).then(()=>{
      
    dispatch(getRoomMessages(id))

    })

      
    
  }
  useEffect(callExec,[id,dispatch])
 

  let submitHandler =()=>{
     //algorithm for composing and sending message
     
    
    //getting the active client
    let client = users.filter(data=>data._id== id)
    //getting the sender 
    let sender = userData

    //getting the active room
    let date = new Date()
      let newMessage = {
        senderEmail:sender.email,
        recieverEmail:client[0].email,
        message:textMsg,
        roomId:activeRoom,
        time:`${date.getHours()}:${date.getMinutes()}`



      }
      dispatch(sendMsg(newMessage))
      callExec()
      
      setTextMsg('')



  }
  
  let changeHandler = useCallback((e)=>{
    let message = e.target.value
    setTextMsg(message)
  })

  return (<div className="chatContainer">

      <DesktopSideBar className='profile'
      gmail='arierhiprecious@gmail.com'/>
    
      

      <div className="chatscreen">
          <div class='chatHeader'>
              <div className="chatheaderleft">
                  
                <input type='checkbox' id='checks'/>
                
                <label for='checks' className="checkbtn">
                <FontAwesomeIcon icon={faHamburger} style={{color:'#D65282',fontSize:'30px',}} className="menuIcon" /></label>

                <MobileSideBar className="smallscreenmenu"/>

                <img src='./person.jpg' className="userpic"/>
                <div className="clientcontainer">
                  <p className="clientname">Admin</p>
                  <p className="clientstatus">online </p>

                </div>
                

              </div>

              <div className="chatheaderright">
                  <div className="circularIcon">
                      
                    <FontAwesomeIcon icon={faPhone} style={{color:'#D65282',fontSize:'30px',}} />

                  </div>
                  <div className="circularIcon">
                      
                    <FontAwesomeIcon icon={faVideo} style={{color:'#D65282',fontSize:'30px',}} />

                  </div>

              </div>
              

          </div>

          <div style={{height:'100px'}}>
          
  

          </div>



          <div className="mainchatscreen">
          
            <div style={{height:'20px'}}>
            
    

            </div>
            {
              activeRoomMessages.sort((a,b)=>{
                return new Date(a.createdAt)- new Date(b.createdAt)
              }).map(data=>{
                return <ChatBox 
                key ={data._id}
                user={'precious'} 
                text={data.message}
                time={data.time}
                className={data.sender?'mychats':'chats'}
                />

              })
            }
              

              



              
             
                  



          </div>


          <ChatInput className='chatinputcontainer'
          submit={submitHandler} change={changeHandler} value={textMsg}/>



      </div>

     
  </div>)
}

export default Chat;