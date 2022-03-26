import React from "react"


// import your fontawesome library
let FormError =(props) =>{
  

  return (<>
       <p style={{color:'red',fontWeight:'lighter',fontFamily:'sans-serif'}}  >{props.text}</p>

  </>
    )

}

export default FormError;
