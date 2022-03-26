export const isTokenExpired = () =>{

}


export let validateTextInput = (value) =>{
    let errors
    if(value.trim() == ""){
        errors = "field should not be empty"
        return errors
    }
    if( value.length < 5){
        errors = "characters too small"
        return errors

    }
    if( value == "" || value.length == 0 ){
        errors = "characters too small"
        return errors

    }
   
    

}
export let validateEmail = (value) =>{
    let errors
    if(value.trim() == ""){
        errors = "field should not be empty"
        return errors
    }
    if( value.length < 5){
        errors = "characters too small"
        return errors

    }
    if( value == "" || value.length == 0 ){
        errors = "characters too small"
        return errors

    }
    if(value.includes('@') == false){
        errors = "not a valid email"
        return errors

    }
     if(value.includes('.') == false){
        errors = "not a valid email"
        return errors

    }
    if(value.includes('com') == false){
        errors = "not a valid email"
        return errors

    }

}
export let validatePhotoInput = (value) =>{
    let errors
    if(value.trim() == ""){
        errors = "field should not be empty"
        return errors
    }

}