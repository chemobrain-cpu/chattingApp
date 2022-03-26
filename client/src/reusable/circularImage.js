import React from "react"



let CircularImage = (props)=>{
    return ( 
    <img src={props.url} style={{     
        border:'5px solid #D65282', 
        fontFamily:'serif',...props.style
    }}
    />)
}


export default CircularImage