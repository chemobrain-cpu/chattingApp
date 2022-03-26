
import './button.css'

let Button = (props) =>{
    return <div onClick={props.click} className={`
    ${'authButton'} ${props.className}`}>
        <button style={props.style} className={`
     ${props.buttonClassName}`}>
            {props.children}
        </button>

    </div>




}
export default Button