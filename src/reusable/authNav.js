import React from "react"
import './navigation.css'

import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

import './authNav.css'
import Button from './button'

let AuthNav = ()=>{
    return <>
    <div className="authNav">
        <div className="logoImageBrandCon">
            <img src='/logo.png' className="authLogoImage" /> 
            <label className="authLogoBrand">Bizz</label>

        </div>
        <Button buttonText='signup' style={{}}>
            Signup
        </Button>
        

    </div>
    </>

}

export default AuthNav