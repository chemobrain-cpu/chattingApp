import React,{useEffect} from "react"

import Aos from "aos"
import 'aos/dist/aos.css'

import HeaderText from './headerText'

import Text from './text'

import styles from './AboutCard.module.css'

// import your fontawesome library
let ABoutCard =(props) =>{
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  
  return (
  <div className ={styles.container} style={props.style} data-aos='fade-right'>
  <div className ={styles.box1} >
    <HeaderText style={{color:'#79364d'}}   className={styles.headerText}>{props.title}</HeaderText>
    
    <Text style={{width:'80%',marginRight:'auto',marginLeft:'auto',textAlign:'center'}}> {props.contentBottom}</Text> 

    {props.children}

  </div>
  
  
  <div className ={styles.box2}>
    <img className={styles.image} src={props.imageUrl} style={{...props.imageStyle}}/>
  </div>
</div>
    )
}

export default ABoutCard;
