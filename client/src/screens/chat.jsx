import React,{useEffect,useCallback,useState} from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHamburger, faPhone,faVideo,} from "@fortawesome/free-solid-svg-icons";

import DesktopSideBar from '../reusable/chatSideBarDesktop'

import MobileSideBar from '../reusable/chatSideBarMobile'

import ChatBox from '../reusable/chatBox'
import ChatInput from '../reusable/chatInput'

import {useParams,useNavigate} from 'react-router-dom'

import {useDispatch,useSelector } from "react-redux";

import {createChat,sendMsg ,getRoomMessages} from "../store/action/auth";

import  styles from './chat.module.css'
// import your fontawesome library

let Chat = () =>{
  //state for this component
  let [textMsg,setTextMsg] = useState('')
  let dispatch = useDispatch()
  let {id} = useParams()
  let navigate = useNavigate()
  
  let {users,userData, activeRoom,activeRoomMessages} = useSelector(state=>state.auth)
  
  let callExec = async()=>{
   new Promise((res,rej)=>{
    if(!userData.email){
      navigate('/login')
      return
    }
    dispatch(createChat(id))
    setTimeout(()=>{res()},1000)
    }).then(()=>{
  
    dispatch(getRoomMessages(id))
    })
  }

    useEffect(callExec,[id,dispatch])
 

    let submitHandler =()=>{
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
  
    return (<div className={styles.chatContainer}>
  
        <DesktopSideBar className={styles.profile}
        gmail={userData.email} url={userData.photo}/>
      
        <div className={styles.chatscreen}>
            <div class={styles.chatHeader}>
                <div className={styles.chatheaderleft}>
                    
                  <input type='checkbox' className={styles.checks} id='checks'/>
                  
                  <label for='checks' className={styles.checkbtn}>
                  <FontAwesomeIcon icon={faHamburger} style={{color:'#79364d',fontSize:'30px',zIndex:5}} className={styles.menuIcon} /></label>
                  
                  <MobileSideBar className={styles.smallscreenmenu}/>
              
  
                  <img src={`http://localhost:5000/public/${userData.photo}`} className={styles.userpic}/>
                  <div className={styles.clientcontainer}>
                    <p className={styles.clientname}>Admin</p>
                    <p className={styles.clientstatus}>online </p>
  
                  </div>
                  
  
                </div>
  
                <div className={styles.chatheaderright}>
                    <div className={styles.circularIcon}>
                        
                      <FontAwesomeIcon icon={faPhone} style={{color:'#79364d',fontSize:'27px',}} />
  
                    </div>
                    <div className={styles.circularIcon}>
                        
                      <FontAwesomeIcon icon={faVideo} style={{color:'#79364d',fontSize:'27px',}} />
  
                    </div>
  
                </div>
                
  
            </div>
            <div style={{height:'15vh'}}>
            
            </div>
  
            <div className={styles.mainchatscreen}>
              {
                activeRoomMessages.sort((a,b)=>{
                  return new Date(a.createdAt)- new Date(b.createdAt)
                }).map(data=>{
                  return <ChatBox 
                  key ={data._id}
                  user={data.senderEmail== userData.email?'':userData.admin?`client`:'admin'} 
                  text={data.message}
                  time={data.time}
                  className={data.senderEmail== userData.email?styles.chats:styles.mychats}
                  />
  
                })
              }
              
            </div>
  
            <ChatInput className={styles.chatinputcontainer}
            submit={submitHandler} change={changeHandler} value={textMsg}/>
        </div>
    </div>)

  
 
}

export default Chat;