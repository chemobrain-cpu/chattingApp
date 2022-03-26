import React from "react"
import styles from './chatSideBarDesktop.module.css'
import CircularImage from './circularImage'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToolbox,faHome,faSignOut} from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {signout} from "../store/action/auth";


let DesktopSideBar = (props)=>{
  
  let navigate = useNavigate()
  let dispatch = useDispatch()

  let navigateTo =(value)=>{
    switch (value) {
      case 'edit profile':
        alert('try later')
        break;
      case 'home':
        navigate('/')
        break;

      case 'signout':
        dispatch(signout())
        navigate('/')
        break;

      default:
        break;
    }

  }
    return ( <div className={`${props.className}`}>
    
    <CircularImage url={props.url} className={styles.userPic}/>
    <p className={styles.username}>{props.gmail}</p>
    <div className={styles.menu}>
      <button onClick={()=>navigateTo('edit profile')} className={styles.buttons}><FontAwesomeIcon icon={faToolbox} style={{color:'white',fontSize:'20px',marginRight:'8px'}} />Edit Profile </button>
      <button className={styles.buttons}> <FontAwesomeIcon icon={faHome} style={{color:'wwhite',fontSize:'20px',marginRight:'8px'}} onClick={()=>navigateTo('home')}  />Home</button>
      <button className={styles.buttons}><FontAwesomeIcon icon={faSignOut} style={{color:'white',fontSize:'20px',marginRight:'8px'}} onClick={()=>navigateTo('signout')} />Logout</button>

    </div>
    
    


       

  </div>)
}


export default DesktopSideBar