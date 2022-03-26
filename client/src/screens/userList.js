import React,{useEffect,useCallback} from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHamburger} from "@fortawesome/free-solid-svg-icons";

import DesktopSideBar from '../reusable/chatSideBarDesktop'

import MobileSideBar from '../reusable/chatSideBarMobile'

import ChatListItem  from '../reusable/userListItem'


import {useNavigate,useParams} from 'react-router-dom'

import {useDispatch,useSelector } from "react-redux";

import {getUsers,handleDispatchMsg,clearActiveRoom,loadMessages,createChat } from "../store/action/auth";



import './userlist.css'
// import your fontawesome library

let UserList = (props) =>{
  let dispatch = useDispatch()
  let {users} = useSelector(state=>state.auth)
  let navigate = useNavigate()
  
  useEffect(()=>{
     
    
    dispatch(getUsers())
    dispatch(handleDispatchMsg())
   
    
      
  },[])

  let navigateToChatRoom = (data ) =>{
    dispatch(clearActiveRoom())
    navigate(`/chat/${data}`)
  }
  
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

                <p className="clientname" >List of users</p>
               
                

              </div>

              
              

          </div>

          <div style={{height:'100px'}}>
          
  

          </div>

          <div className="mainchat">
            {users.map(data=><ChatListItem 
            key={data._id}
            className='usersList'
              username={data.email}
              id={data._id}
              lastMessage="i want a mobile application"
              imageUrl={data.photo}
              click={navigateToChatRoom}
           />)
            
           }
          </div>

      </div>



  </div>)
}

export default UserList;