import React from "react"
import {Route,Routes} from 'react-router-dom'
//configuring redux store

import  ReduxThunk from "redux-thunk";
import { combineReducers,createStore,applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { authReducer } from "./store/reducer/auth";

// importing screens
import Home from './screens/home'

import Form from './screens/loginForm'

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

     
     
     <Route path='/chat' element={<Chat/>}/>

     <Route path='/users' element={<UserList/>}/>

   </Routes>
    

  </div></Provider>)
}

export default App;
