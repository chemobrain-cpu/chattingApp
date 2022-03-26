import React from "react"


import styles from './userListItem.module.css'
import WhatWeDoCard from "./whatwedocard"
// import your fontawesome library

let ChatListItem =(props) =>{

 
  return (<div onClick={()=>{
    props.click(props.id)
  }}  className={`${props.className}`} >
  <img src={`http\\\\localhost:5000\\public\\${props.imageUrl}`} alt="userpic" className={styles.userpic}/> 
  <div className={styles.textcon}>
        <p className={styles.username}>{props.username}</p>
        <p className={styles.message}>{props.lastMessage}</p>

      </div>


</div>
    )
}

export default ChatListItem;