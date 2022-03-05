import React from "react"


import HeaderText from './headerText'

import Text from './text'

import styles from './testimonialCard.module.css'

// import your fontawesome library
let TestimonialCard =(props) =>{
  
  return (<div className ={styles.container} style={props.style}>
      <div className={styles.imageContainer}>
      <img src={props.imageUrl} className={styles.image}/>
          
       
      </div>
      <div className={styles.statement}>
          
          <p className={styles.paragraph}>{props.text}</p>
 
          <p className={styles.username}>{props.username}</p>

      </div>

  
  </div>
    )
}

export default TestimonialCard;
