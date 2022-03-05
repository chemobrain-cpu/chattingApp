import React from "react"
import styles from './card.module.css'

import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

import './authNav.css'

let Card = (props)=>{
    return <>
    <div className={styles.card} style={props.style}>

        {props.children}
       

    </div>
    </>

}

export default Card