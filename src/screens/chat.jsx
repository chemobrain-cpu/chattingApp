import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHamburger, faPhone,faVideo,faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";
import Nav from '../reusable/navigation'

import HeaderText from '../reusable/headerText'

import Card from '../reusable/card'

import Button from '../reusable/button'
import InputCard from '../reusable/inputContainer'


import './chat.css'
// import your fontawesome library

let Chat =() =>{
  
  return (<div className="chatContainer">
    
      <div className="profile">
        <img src='./person.jpg' className="userpic"/>
        <p className="username">arierhiprecious@gmail.com</p>
        
             <ul className="menu">
                 <li>Edit profile</li>

                 <li>home</li>
                 <li>signout</li>
             </ul>

        




           

      </div>

      <div className="chatscreen">
          <div class='chatHeader'>
              <div className="chatheaderleft">
                  
                <input type='checkbox' id='checks'/>
                
                <label for='checks' className="checkbtn">
                <FontAwesomeIcon icon={faHamburger} style={{color:'#D65282',fontSize:'30px',}} className="menuIcon" /></label>

                <div className="smallscreenmenu">
                  <li>Edit profile</li>
                  <li>home</li>
                 <li>signout</li>
                

                </div>

                














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


          <div className="mainchat">
              
              <div className="chats">
                  <div className='message'>
                    <span className="user">admin</span>
                  <p className="text">hello brother</p>
                  <span className="time">9:40pm</span>

                  </div>
                  

              </div>


              <div className="mychats">
                  <div className='message'>
                  <span className="user">admin</span>
                  <p className="text">hello brother</p>
                  <span className="time">9:40pm</span>

              </div>
             
             
                  

              </div>


          </div>


          <div className="chatinputcontainer">
              <input className="chatinput" placeholder="type your message here"/>
              <button className="chatinputbutton">
                <FontAwesomeIcon icon={faCircleArrowRight} style={{color:'#D65282',fontSize:'30px',}} />

              </button>


          </div>

      </div>

     
  </div>)
}

export default Chat;