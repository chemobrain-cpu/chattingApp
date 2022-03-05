import React,{useState} from "react"



// import your fontawesome library
let Text =(props) =>{
  

  return (<>
       
  
    <p style={{lineHeight:'30px',color:'grey',fontWeight:400,fontFamily:'sans-serif',...props.style}}>{props.children}</p> 

  </>
    )

}

export default Text;