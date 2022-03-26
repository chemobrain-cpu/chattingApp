import React,{useEffect} from "react"

import Aos from "aos"
import 'aos/dist/aos.css'

import styles from './whatwedocard.module.css'
import  Text  from "./text";
// import your fontawesome library
let WhatWeDoCard =(props) =>{
   useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  
  return (<div style={{...props.style}} className={styles.cardContainer} data-aos='fade-up'>
  
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
