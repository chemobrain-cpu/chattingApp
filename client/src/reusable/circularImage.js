import React from "react"



let CircularImage = (props)=>{
   
    return ( 
    <img src={`http://localhost:5000/public/${props.url}`} className={`${props.className}`} style={{     
        border:'5px solid #79364d', 
        fontFamily:'serif',...props.style
    }}
    />)
}


export default CircularImage