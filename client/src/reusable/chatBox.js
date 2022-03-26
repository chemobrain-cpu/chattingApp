import React from "react"
import styles from './chatBox.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHamburger, faPhone,faVideo,faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";

let ChatBox = (props)=>{
    return ( <div className={`${props.className}`}>
        <div className={styles.message}>
        <span className={styles.user}>{props.user}</span>
        <p className={styles.text}>{props.text}</p>
        <span className={styles.time}>{props.time}</span>

    </div>
    


</div>
)
}


export default ChatBox