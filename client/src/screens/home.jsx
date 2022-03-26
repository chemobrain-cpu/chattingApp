import React,{useEffect} from "react"

import { faGooglePlay,faApple,faFacebookMessenger}  from  "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAd,faShieldVirus,faTools,faCompactDisc} from "@fortawesome/free-solid-svg-icons";

import HeaderText from '../reusable/headerText'

import Nav from '../reusable/navigation'

import ABoutCard from '../reusable/aboutCard'

import AppStoreButton from '../reusable/appStoreButton'


import WhatWeDo from '../reusable/whatwedo'

import TestimonialCard from '../reusable/testimonialCard'
import './home.css'

import Aos from "aos"
import 'aos/dist/aos.css'

import {useSelector} from "react-redux";

import { useNavigate } from "react-router-dom";

let Home =() =>{
  
  let {userData} = useSelector(state=>state.auth)
  let navigate = useNavigate()

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  const breakPoints =[
    {width:1,itemsToShow:1},
    {width:550,itemsToShow:2},
    {width:768,itemsToShow:3},
    {width:1200,itemsToShow:4},
  ]

  let navigateT0 = () =>{
    
      navigate('/login')
    

  }
  
  
  return (<div  >
    
    <Nav
    brand='Bizz'
    />
    
    <div style={{height:'15px'}}>
      
    
    </div>
    
    <ABoutCard 
    title="Bizz Software Builder"  
    contentBottom="we understand your business needs  an online presence as every business do.we're here to help you increase productivity in your business!"
    imageUrl='/design.png'
    
    >
    
    <div className='storeButtonCon' >
       
       <AppStoreButton  
               className='appleButton'
               textTop='Get it on ' textBottom='Apple store' >
               <FontAwesomeIcon icon={ faApple} style={{color:'white',fontSize:30,marginTop:'10px'}}/>
       </AppStoreButton>
       <AppStoreButton 
          className='appleButton'
          textTop='Get it on ' 
          textBottom='Play Store' >
           <FontAwesomeIcon icon={ faGooglePlay} style={{color:'white',fontSize:30,marginTop:'10px'}} />
       </AppStoreButton>
    
    </div>
    
    </ABoutCard>
    
    <div style={{paddingTop:'10px',paddingBottom:'10px'}}>
      <WhatWeDo 
      icon1={<FontAwesomeIcon icon={faTools} style={{color:'#79364d'}}/>} text1='We design and optimize the best website and mobile apps to meet your business needs'
    
      icon2={<FontAwesomeIcon icon={faShieldVirus} style={{color:'#79364d'}} />}
      text2='We make use of recent industry technologival stacks like React,React native,nodejs express to make your business stand out and productive' />
    
      <WhatWeDo 
        icon1={<FontAwesomeIcon icon={faCompactDisc} style={{color:'#79364d'}}/>} text1='Turn your ideas into a mobile apps with quality designs'
    
        icon2={<FontAwesomeIcon icon={faAd} style={{color:'#79364d'}}/>}
        text2='We ,ake all kinds of graphics ,flyers,logo,social media as to meet your business need' 
      />
    
    </div>
    
    
    
    
    
    
    <ABoutCard
    style={{flexDirection:'row-reverse'}}
     imageUrl='app2.jpg'
     imageStyle={{marginTop:'-20px',}}
     title="About Our Company"  
     contentBottom="we are specialised in building unique digital experience from websites to special purpose applications.We also help business reach wider audience through managed digital marketing!">
     
    
    </ABoutCard>
    
  <div className='testimonialSection' data-aos='fade-right'>
  <div style={{textAlign:'center'}}>
    <HeaderText style={{color:'#79364d',    fontFamily:'monospace',
        fontWeight:'900px',
        fontSize:'35px',
        fontWeight:900,
        marginBottom:'10px',marginRight:'auto',marginLeft:'auto'}}   >see what people are saying
      </HeaderText>

    </div>
    
    
    
    <div  className="testimony">
      
      <TestimonialCard 
        text='i must confess that i really love their services.There are indeed the best t think' 
        imageUrl='./person.jpg' 
        username='precious@gmail.com'
      />
      <TestimonialCard 
        text='if you need an amazing applications to meet your needs,contact them' 
        imageUrl='./person2.jpg' 
        username='john@gmail.com'
      />
      <TestimonialCard 
        text='Good software company i can say' 
        imageUrl='./person3.jpg' 
        username='koi@gmail.com'
      />
    
      
    
    </div>


  </div>

  <div className='footer' >
    <div className='contact' data-aos='fade-right'>
      <div style={{textAlign:'center'}}>
      <HeaderText style={{color:'#79364d',    fontFamily:'monospace',
          fontWeight:'900px',
          fontSize:'35px',
          fontWeight:900,
          marginBottom:'10px',marginRight:'auto',marginLeft:'auto'}}   >Contact Us
        </HeaderText>

      </div>

      <div className="input">
        <input/><button>send</button>

      </div>
      
      
      
      <div  className="social">
        <div className='wrapper'>
          <p className="biz">B</p>

        </div>
        <div className='wrapper'>
          <p className='facebook'>f</p>

        </div>
        <div className='wrapper'>
          <p className='twitter'>t</p>
        </div>
      
      </div>


      <div  className="contactMe">
      
        <div className='phone'>
          <p className='myNumber'>Phone:</p>
          <p className='myNumber'>09071991647</p>

        </div>
       
      
      </div>
     


    </div>
    
    <div className='map' data-aos='fade-right'>
      
      <HeaderText style={{color:'#79364d',    fontFamily:'monospace',
            fontWeight:'900px',
            fontSize:'35px',
            fontWeight:900,
            marginBottom:'10px',marginRight:'auto',marginLeft:'auto'}}   >Map Location
          </HeaderText>

          <div className="realMap">

          <div className="textwidget custom-html-widget">     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.1000338199156!2d5.779570814765897!3d5.552186595974376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041ad625025100d%3A0x6f14642d0ae4c417!2sHIMALONE%20GLOBAL%20SERVICES!5e0!3m2!1sen!2sng!4v1625428147727!5m2!1sen!2sng" width="500" height="250" frameborder="0" style={{border:0 }}allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>

          </div>
        
        
       
  
  
    </div>
  
  </div>
 
  
   
    
    <div onClick={()=>navigateT0()} className="chat"><FontAwesomeIcon icon={faFacebookMessenger} style={{color:'#723e4f',fontSize:'70px',zIndex:5}}  /></div>
    
    
    
    
  </div>
    )
}

export default Home;
