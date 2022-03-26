import styles from  './authNav.module.css'


import {useNavigate} from 'react-router-dom'

import Button from './button'

let AuthNav = (props)=>{
    const navigate =  useNavigate()
    return <>
    <div className={styles.authNav}>
        <div className={styles.logoImageBrandCon}>
            <img src='/logo.png' className={styles.authLogoImage} /> 
            <label className={styles.authLogoBrand}>Bizz</label>

        </div>
        <Button buttonText={props.text}  className={styles.signup} style={{width:'100px',backgroundColor:'#D65282'}} click={()=>{
            navigate(`/${props.text}`)
            
        }}>
            {props.text}
        </Button>
        

    </div>
    </>

}

export default AuthNav