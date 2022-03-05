import React from "react"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMessage} from "@fortawesome/free-solid-svg-icons";
import AuthNav from '../reusable/authNav'

import HeaderText from '../reusable/headerText'

import Card from '../reusable/card'

import Button from '../reusable/button'
import InputCard from '../reusable/inputContainer'


// import your fontawesome library

let Form =() =>{
  
  return (<div >
  <AuthNav/>
  
  <div style={{height:'100px'}}>
  

  </div>


  <Card style={{backgroundColor:'rgb(236, 236, 236)',boxShadow:'none',borderRadius:'5px'}}>
    <HeaderText style={{fontSize:'18px',fontWeight:'bold',fontFamily:'monospace',width:'90%',marginRight:'auto',marginLeft:'auto',color:'#962951',textAlign:'center'}}>fill the form so we can identify you and have a live chat with us </HeaderText>

  </Card>
  
  
 
  <Card style={{borderRadius:'5px',backgroundColor:'white',display:'block',padding:'25px 10px 25px 10px'}}>
  <HeaderText style={{fontSize:'20px',fontWeight:900,color:'#D65282',marginBottom:'30px'}}>Sign in to Bizz</HeaderText>
    


    <InputCard label='Email Address' placeholder='abc @gmail.com' type='text'/>

    <InputCard label='Password' placeholder='xxxx' type='password' />

    
    <InputCard label='pick an image(optional)' placeholder='xxxx' type='file' />

   <Button style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <FontAwesomeIcon icon={faMessage} style={{fontSize:'30px',marginRight:'10px'}}/>
     Submit
   </Button>
    

  </Card>
  





  </div>
    )
}

export default Form;