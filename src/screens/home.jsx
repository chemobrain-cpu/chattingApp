import React from "react"

import { faGooglePlay,faApple,faFacebookMessenger}  from  "@fortawesome/free-brands-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAd,faShieldVirus,faTools,faCompactDisc} from "@fortawesome/free-solid-svg-icons";

import HeaderText from '../reusable/headerText'

import Nav from '../reusable/navigation'

import ABoutCard from '../reusable/aboutCard'

import AppStoreButton from '../reusable/appStoreButton'


import WhatWeDo from '../reusable/whatwedo'

import TestimonialCard from '../reusable/testimonialCard'
import './home.css'

// import your fontawesome library

let Home =() =>{
  
  return (<div >
    
    <Nav
    brand='Bizz'
    menuLink={[{link:'home',url:'/home'},{link:'contact',url:'/contact'}]}
    />
    
    <div style={{height:'15px'}}>
      
    
    </div>
    
    <ABoutCard 
    title="Bizz web and mobile app  agency"  
    contentBottom="we understand your business needs  an online presence as every business do.we're here to help you increase productivity in your business!"
    imageUrl='/design.png'
    >
    
    <div style={{width:'90%',display:'flex',textAlign:'center',justifyContent:'space-around',marginRight:'auto',marginLeft:'auto',marginTop:'5%'}}>
       
       <AppStoreButton  
               textTop='Get it on ' textBottom='Apple store' >
               <FontAwesomeIcon icon={ faApple} style={{color:'white',fontSize:30,marginTop:'10px'}}/>
       </AppStoreButton>
       <AppStoreButton 
          textTop='Get it on ' 
          textBottom='Play Store' >
           <FontAwesomeIcon icon={ faGooglePlay} style={{color:'white',fontSize:30,marginTop:'10px'}} />
       </AppStoreButton>
    
    </div>
    
    </ABoutCard>
    
    <div style={{paddingTop:'10px',paddingBottom:'10px'}}>
      <WhatWeDo 
      icon1={<FontAwesomeIcon icon={faTools} style={{color:'white'}}/>} text1='We design and optimize the best website and mobile apps to meet your business needs'
    
      icon2={<FontAwesomeIcon icon={faShieldVirus} style={{color:'white'}}/>}
      text2='We make use of recent industry technologival stacks like React,React native,nodejs express to make your business stand out and productive' />
    
      <WhatWeDo 
        icon1={<FontAwesomeIcon icon={faCompactDisc} style={{color:'white'}}/>} text1='Turn your ideas into a mobile apps with quality designs'
    
        icon2={<FontAwesomeIcon icon={faAd} style={{color:'white'}}/>}
        text2='We ,ake all kinds of graphics ,flyers,logo,social media as to meet your business need' 
      />
    
    </div>
    
    
    
    <ABoutCard
     imageUrl='appImage.jpg'
     imageStyle={{width:'600px',height:'300px',marginTop:'0%'}}
     title="What we do" 
     contentBottom="we build all kind of web applications from ecommerce web apps,banking apps,crypto trading applications.Any kind of web application you can think of ,we got your back!.">
    
    
    
    </ABoutCard >
    
    
    
    <ABoutCard
    style={{flexDirection:'row-reverse'}}
     imageUrl='aboutCompany.jpg'
     imageStyle={{width:'400px',height:'300px',marginTop:'0%'}}
     title="About Our Company"  
     contentBottom="we are specialised in building unique digital experience from websites to special purpose applications.We also help business reach wider audience through managed digital marketing!">
     
    
    </ABoutCard>
    
    
    
    <HeaderText style={{textAlign:'center',fontSize:'35px',fontWeight:'bold',fontFamily:'monospace'}}>see what people are saying </HeaderText>
    
    
    <div className='testimonial'>
      
      <TestimonialCard 
        text='i must confess that i really love their services.There are indeed the best t think' 
        imageUrl='./person.jpg' 
        username='precious@gmail.com'
      />
    
      <TestimonialCard 
        text='There are always able to deliver..we hired these guys to build a web application for our agency' 
        imageUrl='./person2.jpg' 
        username='paul@gmail.com'
        
      />
      
      <TestimonialCard
          text='There are the best digital marketers i have worked with' 
          imageUrl='./person3.jpg' 
          username='koi@gmail.com'
      />
    
    </div>
    
    
    
    
    <div className ='chatIcon'>
    <FontAwesomeIcon icon={faFacebookMessenger} style={{
      color:'rgb(221, 94, 116)',
      fontSize:70,
     
      zIndex:2,
    }}/>
    
    </div>
  </div>
    )
}

export default Home;
