import React,{useCallback,useEffect} from "react"
import './navigation.css'
import {useNavigate,NavLink} from 'react-router-dom'
import { FontAwesomeIcon,} from "@fortawesome/react-fontawesome";
import { faHamburger,faList } from "@fortawesome/free-solid-svg-icons";
import {useSelector,useDispatch } from "react-redux";
import {isToken } from "../store/action/auth";


let Nav =(props) =>{
  
  const dispatch = useDispatch()
  
  useEffect(()=>{
    //do something
    dispatch(isToken())
  },[])
  let navigate = useNavigate()
  
  let {token} = useSelector(state=>state.auth)
  

  
  
  //this property will be gotten from 'redux
  let isUserAuthenticated = 'false'


  let handleEvent = useCallback(()=>{
    if(isUserAuthenticated){
     // alert(token)
     if(!token){
       return navigate('/login')
     }
     //if this point is reached, check expiration of token
    // let isExpired = isTokenExpired(token)
     navigate('/chat')
      
    
    }
    
  },[token])


  return (
    <div className='container'>
       <nav className='container'>
         <input type='checkbox' id='check'/>
         
      <label for='check' className="checkbtn">
      <FontAwesomeIcon style={{fontSize:'30px'}} icon={faList} /></label>
    
        
      <img src='/logo.png' className='logoImage'/> 
      <label className='logo'>{props.brand}</label>

      <ul>
        <li  Class ='active'>
        <a  >
        Home
       </a>
       
       </li>
        
       <li  ><a  onClick={handleEvent}>
       Contact</a>
       
       </li>
      </ul>
    </nav>

    </div>
   
  
  )
}

export default Nav;
