import React,{useCallback} from "react"
import './navigation.css'
import {useNavigate} from 'react-router-dom'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

let Nav =(props) =>{
  let navigate = useNavigate()
  //this property will be gotten from 'redux
  let isUserAuthenticated = 'false'


  let handleEvent = useCallback(()=>{
    if(isUserAuthenticated){
      
    navigate('/login',{replace:true})
    
    navigate('/chat',{replace:true})
    }
    
  },[])


  return (
    <div className='container'>
       <nav className='container'>
         <input type='checkbox' id='check'/>
         
      <label for='check' className="checkbtn">
      <FontAwesomeIcon icon={faHamburger} /></label>
    
        
      <img src='/logo.png' className='logoImage'/> 
      <label className='logo'>{props.brand}</label>

      <ul>
        <li onClick={handleEvent} >
        <a href='/home' Class ='active'>
       {props.menuLink[0].link}</a>
       
       </li>
        
       <li  ><a href='/login' Class ='active'>
       {props.menuLink[1].link}</a>
       
       </li>
      </ul>
    </nav>

    </div>
   
  
  )
}

export default Nav;
