import React,{useState,useCallback,useEffect} from "react";


const useTextInput  = (validate,preValue)=>{
    const [values,setValues] = useState(preValue)
    const [errors,setErrors] = useState("")
    
        const handleChange = (value)=>{
         
            console.log(value)
            let res = validate(value)
            setErrors(res)
            setValues(value)
        }
        return {
            handleChange,
            values,
            errors
        }
    }




export default useTextInput