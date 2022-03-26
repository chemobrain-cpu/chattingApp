import React from "react"
import styles from './chatSideBarDesktop.module.css'
import CircularImage from './circularImage'
import Button from './button'

let DesktopSideBar = (props)=>{
    return ( <div className={`${props.className}`}>
    
    <CircularImage url='./person.jpg' style={{width:'50px',
        height:'50px',
        borderRadius:'50px',
        marginBottom:'0px',
        marginLeft:'auto',
        marginRight:'auto',
        }}/>
    <p className={styles.username}>{props.gmail}</p>
    
         <ul className={styles.menu}>
             <button style={{width:'100px', height:'50px',
            borderRadius:'5px',
            backgroundColor:'#D65282',
}}>Edit profile</button>

             <button style={{width:'100px', height:'50px',
            borderRadius:'5px',
            backgroundColor:'#D65282',
}}>home</button>
             <button style={{width:'100px', height:'50px',
            borderRadius:'5px',
            backgroundColor:'#D65282',
}}>signout</button>
         </ul>

    




       

  </div>)
}


export default DesktopSideBar