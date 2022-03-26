import React from "react"
import styles from './whatwedo.module.css'
import WhatWeDoCard from "./whatwedocard"
// import your fontawesome library

let WhatWeDo =(props) =>{
  return (<div style={{...props.style}} className={styles.cardContainer}>
      <WhatWeDoCard  icon={props.icon1} text={props.text1} />

      <WhatWeDoCard   icon={props.icon2} text={props.text2}/>
  
   </div>
    )
}

export default WhatWeDo;