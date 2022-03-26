import React,{useEffect,useCallback,useState} from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHamburger, faPhone,faVideo,} from "@fortawesome/free-solid-svg-icons";

import DesktopSideBar from '../reusable/chatSideBarDesktop'

import MobileSideBar from '../reusable/chatSideBarMobile'

import ChatBox from '../reusable/chatBox'
import ChatInput from '../reusable/chatInput'

import {useParams,useNavigate} from 'react-router-dom'

import {useDispatch,useSelector } from "react-redux";

import {getUsers,handleDispatchMsg,clearActiveRoom} from "../store/action/auth";

import  styles from './userlist.module.css'
import ChatListItem from '../reusable/userListItem'

// import your fontawesome library

let UserList = () =>{
  //state for this component
  let dispatch = useDispatch()
  let {id} = useParams()
  let navigate = useNavigate()
  
  let {users,userData} = useSelector(state=>state.auth)

  
  useEffect(()=>{
    if(!userData.email){
      navigate('/login')
      return
    }
    
    dispatch(getUsers())
    dispatch(handleDispatchMsg())
   
    
      
  },[])

  let navigateToChatRoom = (data ) =>{
    dispatch(clearActiveRoom())
    navigate(`/chat/${data}`)
  }
 


  return (<div className={styles.chatContainer}>

      <DesktopSideBar className={styles.profile}
      gmail={userData.email} url={userData.photo}/>
    
      <div className={styles.chatscreen}>
          <div class={styles.chatHeader}>
              <div className={styles.chatheaderleft}>
                  
                <input type='checkbox' className={styles.checks} id='checks'/>
                
                <label for='checks' className={styles.checkbtn}>
                <FontAwesomeIcon icon={faHamburger} style={{color:'#79364d',fontSize:'30px',zIndex:5}} className={styles.menuIcon} /></label>

                <h2 className={styles.listHeaderText}>list of users</h2>
                
                
                <MobileSideBar className={styles.smallscreenmenu}/>
            

                
                

              </div>
              

              
              

          </div>
          <div style={{height:'15vh'}}>
          
          </div>

          <div className={styles.mainchatscreen}>
            {users.map(data=><ChatListItem 
            key={data._id}
            className={styles.usersList}
              username={userData.admin?data.email:'admin'}
              id={data._id}
              lastMessage="app builder"
              imageUrl={data.photo}
              click={navigateToChatRoom}
           />)
            
           }
          </div>


         



      </div>
  </div>)
}

export default UserList;