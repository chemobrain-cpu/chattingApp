import React from "react"
import styles from './chatInput.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHamburger, faPhone,faVideo,faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";


let ChatInput = (props)=>{
    return ( <div className={`${props.className}`}>
    <input className={styles.chatinput} placeholder="type your message here" onChange={props.change} value={props.value}/>
    <button className={styles.chatinputbutton} onClick={props.submit}>
      <FontAwesomeIcon icon={faCircleArrowRight} style={{color:'#79364d',fontSize:'30px',}} />

    </button>


</div>
)
}


export default ChatInput