import React from "react"
import styles from './chatSideBarMobile.css'
import CircularImage from './circularImage'
import Button from './button'

let MobileSideBar = (props)=>{
    return ( <div className={`${props.className}`}>
    
   
    
         
             <button  style={{width:'110px', height:'60px',
            borderRadius:'5px',
            alignSelf:'center',
            marginBottom:'8px',
            backgroundColor:'#4b2935',
            border:'none',
            color:'white'
}}>Edit profile</button>

             <button style={{width:'110px', height:'60px',
            borderRadius:'5px',
            alignSelf:'center',
            marginBottom:'8px',
            backgroundColor:'#4b2935',
            border:'none',
            color:'white'
}}>home</button>
             <button style={{width:'110px', height:'60px',
            borderRadius:'5px',
            alignSelf:'center',
            marginBottom:'8px',
            backgroundColor:'#4b2935',
            border:'none',
            color:'white'
}}>signout</button>
        

    




       

  </div>)
}


export default MobileSideBar