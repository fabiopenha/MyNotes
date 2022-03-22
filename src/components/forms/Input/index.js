import styles from '../Input/Input.module.css'

const Input = (props) => {
    return (
        <div className={styles.input_container}>
            <label htmlFor={props.name}>{props.text}: </label>
            <input 
                type={props.type} 
                name={props.name} 
                value={props.value} 
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default Input