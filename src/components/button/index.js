import styles from '../button/Button.module.css';

const Button = (props) => {
    return <button type={props.type} className={styles.main_btn}>{props.text}</button>
}

export default Button;