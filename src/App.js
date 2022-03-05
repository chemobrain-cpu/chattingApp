import React from "react"
import {Route,Routes} from 'react-router-dom'


// importing screens
import Home from './screens/home'

import Form from './screens/loginForm'

import Chat from './screens/chat'

let App =() =>{
  
  return (<div>
   <Routes>
     <Route path='/' element={<Chat/>}/>
     
     <Route path='/login' element={<Form/>}/>

   </Routes>
    

  </div>)
}

export default App;
