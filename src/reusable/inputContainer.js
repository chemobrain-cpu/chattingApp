import  styles from './inputCard.module.css'


let InputCard = (props) =>{
    return  <div className={styles.inputContainer}>
    <label  className={styles.label}> {props.label}</label>
    <input placeholder={props.placeholder} className ={styles.input} type={props.type}/>
  </div>

}

export default InputCard