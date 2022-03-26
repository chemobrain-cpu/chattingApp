import React,{useEffect,useState} from "react"
import axios from 'axios'
import Aos from "aos"
import 'aos/dist/aos.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMessage} from "@fortawesome/free-solid-svg-icons";
import AuthNav from '../reusable/authNav'

import HeaderText from '../reusable/headerText'

import Card from '../reusable/card'

import Button from '../reusable/button'
import InputCard from '../reusable/inputContainer'
import styles from './signup.module.css'

import FormError from  '../reusable/formError';

import {signup } from "../store/action/auth";
import {useDispatch } from "react-redux";

import {useNavigate} from 'react-router-dom'
import {validateTextInput,validateEmail} from "../utils/utilityFun"


let SignupForm =() =>{
  useEffect(()=>{
    Aos.init({duration:3000})
  },[])
  let dispatch = useDispatch()
  

  const navigate = useNavigate()
  let [email,setEmail] = useState('')
  let [password,setPassword] = useState('')
  let [photo,setPhoto] = useState('')

  let [emailError,setEmailError] = useState('')
  let [passwordError,setPasswordError] = useState('')
  let [photoError,setPhotoError] = useState('')
  
  let [touch,setTouch] = useState('')

  let submitHandler = async (e)=>{
    e.preventDefault()
    if(!email || !password || !photo){
      alert('form is not valid valid')
      return
    }
   
    try{
      let response = await dispatch(signup({email,password,photo}))
      if(response=='signin'){
         navigate('/login')

      }
    }catch(err){
      alert('an error occured')
    }

   




  }
  const changeHandler = (e)=>{
    setTouch(true)
    setPhotoError("")
    setEmailError("")
    
    setPasswordError('')
    let value = e.target.value
    if(e.target.type == 'text'){
      //validation
      let errors = validateEmail(value)
      if(errors){
        setEmailError(errors)
        

      }
      setEmail(value)
     
    }else if(e.target.type == 'password'){
      //validation
      let errors = validateTextInput(value)
      if(errors){
        setPasswordError(errors)
        

      }
      setPassword(value)

    }else if(e.target.type == 'file'){
      //validation
      let value = e.target.files[0]
      console.log(e.target.files)
      
     
      setPhoto(value)

    }
  }





  return (<div className={styles.screen}>
  <AuthNav text='login'/>
  
  <div style={{height:'70px'}}>
  

  </div>

  <div className={styles.formContainer}>
  <div className={styles.formLeft} data-aos='fade-up'>
    <img src='./animatedcoder.gif' className={styles.animatedCoder}/>
    
    </div>
    <div className={styles.formCenter} data-aos='fade-up'>
        <Card style={{backgroundColor:'rgb(241, 241, 241)',
        boxShadow:'none',borderRadius:'5px'}}>
          <HeaderText className={styles.header}>fill the form so we can identify you and have a live chat with us </HeaderText>
  
        </Card>
        
        
      
        <Card style={{borderRadius:'5px',backgroundColor:'rgb(247, 247, 247)',display:'block',padding:'25px 10px 25px 10px',boxShadow:'none'}}>
        <HeaderText style={{fontSize:'20px',fontWeight:900,color:'#79364d',marginBottom:'30px',
      marginTop:'-5%'}}>SignUp with Bizz</HeaderText>
          
  
  
          <form onSubmit={submitHandler}encType="multipart/form-data" id='form'>
            <label  className={styles.label}>Email Address</label>
            <input 
             className ={styles.input}
             type='text'
             onChange={changeHandler}
             value={email} />

             {touch && emailError?<FormError text={emailError}/>:""}



             <label  className={styles.label}>Enter password</label>
            <input 
             className ={styles.input} 
             type='password'
             onChange={changeHandler}
             value={password} />

            {touch && passwordError?<FormError text={passwordError}/>:""}


            <label  className={styles.label}>pick an image</label>
            <input 
             className ={styles.input}
             type="file"
             
             onChange={changeHandler}
              required/>


              {touch && photoError?<FormError text={photoError}/>:""}


          </form>

           

  
          
  
     
  
         

       
  
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

export default SignupForm;