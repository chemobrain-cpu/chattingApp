
import './button.css'

let Button = (props) =>{
    return <div className="authButton">
        <button style={props.style}>
            {props.children}
        </button>

    </div>




}
export default Button