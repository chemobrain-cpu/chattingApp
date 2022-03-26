import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './appStorebuttonStyle.module.css'

// import your fontawesome library
let AppStoreButton =(props) =>{
  
  return (<div className={`${styles.buttonCon} ${props.className}`}>
        
  <div className="box1">

    {props.children}
    

  </div>
  <div className="box2">
      <p style={{color:'white',fontSize:10,margin:0}}>{props.textTop}</p>
      <p style={{color:'white',fontSize:20,margin:0}}>{props.textBottom}</p>


  </div>
      
</div>)
}

export default AppStoreButton;