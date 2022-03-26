import  styles from './inputCard.module.css'


let InputCard = (props) =>{
    return  <div className={styles.inputContainer}>
    <label  className={styles.label}> {props.label}</label>
    <input placeholder={props.placeholder} style={{...props.style}} className ={styles.input} type={props.type}
    onChange = {props.onChangeText}
    value={props.value}/>
  </div>

}

export default InputCard