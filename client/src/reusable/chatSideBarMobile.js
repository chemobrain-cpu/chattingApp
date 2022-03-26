import React from "react"
import styles from './chatSideBarMobile.module.css'
import CircularImage from './circularImage'
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToolbox,faHome,faSignOut,faHamburger} from "@fortawesome/free-solid-svg-icons";

import {useSelector,useDispatch} from "react-redux";

import {signout} from "../store/action/auth";


let MobileSideBar = (props)=>{
  let {userData} = useSelector(state=>state.auth)
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
      <div className={styles.labelContainer}>
        
      <label for='checks' className={styles.checkbtn}>
                <FontAwesomeIcon icon={faHamburger} style={{color:'#D65282',fontSize:'30px',zIndex:5}} className={styles.menuIcon} />
            </label>

      </div>
      

             
            <CircularImage url={userData.photo} className={styles.userPic}/>
            <div className={styles.buttonContainer}>
                <button onClick={()=>navigateTo('edit profile')} className={styles.button}> <FontAwesomeIcon icon={faToolbox} style={{color:'white',fontSize:'20px',marginRight:'8px'}} /> Edit profile</button>

                <button onClick={()=>navigateTo('home')} className={styles.button}> <FontAwesomeIcon icon={faHome} style={{color:'wwhite',fontSize:'20px',marginRight:'8px'}} /> home</button>
                <button onClick={()=>navigateTo('signout')} className={styles.button}> <FontAwesomeIcon icon={faSignOut} style={{color:'white',fontSize:'20px',marginRight:'8px'}} /> signout</button>

            </div>
            
    
  </div>)
}


export default MobileSideBar