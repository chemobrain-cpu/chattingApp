import React from "react"


// import your fontawesome library
let HeaderText =(props) =>{
  

  return (<>
       <h1 style={{fontFamily:'sans-serif',...props.style}} className={props.className} >{props.children}</h1>

  </>
    )

}

export default HeaderText;
