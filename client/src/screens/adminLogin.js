import React,{useEffect,useState} from "react"

import Aos from "aos"
import 'aos/dist/aos.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMessage} from "@fortawesome/free-solid-svg-icons";
import AuthNav from '../reusable/authNav'

import HeaderText from '../reusable/headerText'

import Card from '../reusable/card'

import Button from '../reusable/button'
import InputCard from '../reusable/inputContainer'
import styles from  './loginForm.module.css'

import useTextInput from '../customhooks/useTextInput'
import FormError from  '../reusable/formError';
import {validateTextInput,validateEmail} from "../utils/utilityFun"

import {adminLogin,loadMessages} from "../store/action/auth";
import {useDispatch } from "react-redux";

import {useNavigate} from 'react-router-dom'


// import your fontawesome library

let AdminForm =() =>{
  useEffect(()=>{
    Aos.init({duration:3000})
  },[])
  let dispatch = useDispatch()
  
  const {handleChange:emailChange,
    values:emailValue,errors:emailErrors} = useTextInput(validateEmail,"")

  const {handleChange:passwordChange,
    values:passwordValue,
    errors:passwordErrors} = useTextInput(validateTextInput,"")
  
  

  const navigate = useNavigate()

  let formIsValid = ()=>{
   if( passwordErrors == "" && emailErrors == ""){
      return true
    }
    return false
   
  }

  let submitHandler = async()=>{
    if(formIsValid()){
        alert('cannot proceed to submit form')
    }
     //submit to server
     let response =  await dispatch(adminLogin({passwordValue,emailValue}))
     if(response=='password not match'){
      
       return
     }else if(response =='user cannot be identified'){

      navigate('/adminsignup')
       return
    }
     else if (response =='signed in sucessfully' ){
       
       dispatch(loadMessages())
       navigate('/users')
     }

  }



  return (<div className={styles.screen}>
  <AuthNav text='adminsignup'/>
  
  <div style={{height:'70px'}}>
  

  </div>
  <div className={styles.formContainer}>
  <div className={styles.formLeft} data-aos='fade-up'>

    <img src='./animatedcoder.gif' className={styles.animatedCoder}/>
    
    </div>
    <div className={styles.formCenter} data-aos='fade-up'>
        <Card style={{
          backgroundColor:'rgb(241, 241, 241)',
          boxShadow:'none',
          borderRadius:'5px'
}}>
          <HeaderText className={styles.header}>fill the form so we can identify you and have a live chat with us </HeaderText>
  
        </Card>
        
        
      
        <Card style={{borderRadius:'5px',backgroundColor:'rgb(247, 247, 247)',display:'block',padding:'25px 10px 25px 10px',boxShadow:'none'}}>

        <HeaderText style={{fontSize:'20px',fontWeight:900,color:'#D65282',marginBottom:'30px',
      marginTop:'-5%'}}>Sign in to Bizz</HeaderText>
          
  
  
          <InputCard 
            label='Email Address' 
            placeholder='abc @gmail.com' 
            type='text'
            onChangeText={(value)=>{
              emailChange(value.target.value)

            }}
            style={emailErrors?{border:'1px solid red'}:{}}
            value = {emailValue}
            />

              {emailErrors?<FormError text={emailErrors}/>:""}
  
          <InputCard label='Password' placeholder='xxxx' type='password'
          onChangeText={(value)=>{
            passwordChange(value.target.value)

          }}
          style={passwordErrors?{border:'1px solid red'}:{}}
          value = {passwordValue} />
          {passwordErrors?<FormError text={passwordErrors}/>:""}
  
          
  
          

       
  
        <Button click={submitHandler} buttonClassName={styles.submitButton}>
            <FontAwesomeIcon icon={faMessage} style={{fontSize:'30px',marginRight:'10px'}}/>
          Submit
        </Button>
          
  
        </Card>
        
  
    </div>
    <div className='formRight'>
      
    </div>

  </div>


 




  </div>
    )
}

export default AdminForm;