import React,{useState} from "react"


import styles from './whatwedocard.module.css'
import  Text  from "./text";
// import your fontawesome library
let WhatWeDoCard =(props) =>{
  return (<div style={{...props.style}} className={styles.cardContainer}>
  
      <div className={styles.box1}>
        {props.icon}
      </div>
      <div className={styles.box2}>
      <Text className={styles.paragraph}>
        {props.text}

    </Text>

      </div>

   </div>
    )
}

export default WhatWeDoCard;
