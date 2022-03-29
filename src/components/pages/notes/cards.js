import styles from '../notes/Notes.module.css';

 const Card = (props) => {
    return (
        <div className={styles.content_dynamic}>
                        <p className={styles.title}>{props.title}</p>
                        <div className={styles.bodytext}>
                            <p>{props.textBody}</p>
                        </div>
                        <span><p>{props.time}</p></span>
        </div>
    )
}


export default Card;