import React,{useEffect} from "react"

import Aos from "aos"
import 'aos/dist/aos.css'

import HeaderText from './headerText'

import Text from './text'

import styles from './testimonialCard.module.css'

// import your fontawesome library
let TestimonialCard =(props) =>{
    useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  
  return (<div className ={styles.container} style={props.style} data-aos='fade-down'>
      <div className={styles.box2}>
        <div className={styles.imageContainer}>
            <img src={props.imageUrl} className={styles.image}/>
                
            
            </div>
            <div className={styles.statement}>
                
                <p className={styles.paragraph}>{props.text}</p>
        
                <p className={styles.username}>{props.username}</p>

            </div>


      </div>
      </div>
            

      
    )
}

export default TestimonialCard;
