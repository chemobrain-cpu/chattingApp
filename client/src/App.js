import React,{useEffect} from "react"
import {Route,Routes} from 'react-router-dom'
//configuring redux store

import  ReduxThunk from "redux-thunk";
import { combineReducers,createStore,applyMiddleware } from "redux";
import { Provider} from "react-redux";
import { authReducer } from "./store/reducer/auth";

// importing screens
import Home from './screens/home'

import Form from './screens/loginForm'

import SignupForm from './screens/signup'

import AdminForm from './screens/adminLogin'

import AdminSignup from './screens/adminSignup'

import Chat from './screens/chat'

import UserList from './screens/userList'



let App =() =>{
   //creating store
   const rootReducer = combineReducers({
    auth:authReducer
    })

   const store = createStore(rootReducer,applyMiddleware(ReduxThunk))

  


  
  return (<Provider store={store}><div>
   <Routes>
     
      
     <Route path='/' element={<Home/>}/>
     <Route path='/login' element={<Form/>}/>

     <Route path='/signup' element={<SignupForm/>}/>
     <Route path='/adminlogin' element={<AdminForm/>}/>
     <Route path='/adminsignup' element={< AdminSignup/>}/>
     
     <Route path='/chat/:id' element={<Chat/>}/>

     <Route path='/users' element={<UserList/>}/>

     

   </Routes>
    

  </div></Provider>)
}

export default App;
