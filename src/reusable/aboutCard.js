import React from "react"


import HeaderText from './headerText'

import Text from './text'

import styles from './AboutCard.module.css'

// import your fontawesome library
let ABoutCard =(props) =>{
  
  return (<div className ={styles.container} style={props.style}>
  <div className ={styles.box1} >
    <HeaderText  style= {{
        fontFamily:'monospace',
        fontSize:'35px',
        fontWeight:700,
        marginBottom:'10px',
    }}>{props.title}</HeaderText>
    
    <Text style={{width:'80%',marginRight:'auto',marginLeft:'auto',textAlign:'center'}}> {props.contentBottom}</Text> 

    {props.children}

  </div>
  
  
  <div className ={styles.box2}>
    <img src={props.imageUrl} style={{width:'80%',marginTop:'100px',...props.imageStyle}}/>
  </div>
  </div>
    )
}

export default ABoutCard;
