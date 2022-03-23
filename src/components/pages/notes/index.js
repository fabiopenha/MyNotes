import styles from '../notes/Notes.module.css';
import Input from '../../../components/forms/Input'
const Notes = () => {
    return (
        <aside className={styles.notes_container}>
            <div className={styles.notes_aside}>
                <div className={styles.main_content}>
                    <div className={styles.box_note}><Input/></div>
                    <div className={styles.time}><p>10 Notes</p></div>
                </div>
                <div className={styles.allcards}>
                    <div className={styles.content_dynamic}>
                        <p className={styles.title}>Lorem Ipsum</p>
                        <div className={styles.bodytext}>
                            <p>Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry. 
                            </p>
                        </div>
                        <span><p>17/04</p></span>
                    </div>

                    <div className={styles.content_dynamic}>
                        <p className={styles.title}>Lorem Ipsum</p>
                        <div className={styles.bodytext}>
                            <p>Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry. 
                            </p>
                        </div>
                        <span><p>17/04</p></span>
                    </div>
                    <div className={styles.content_dynamic}>
                        <p className={styles.title}>Lorem Ipsum</p>
                        <div className={styles.bodytext}>
                            <p>Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry. 
                            </p>
                        </div>
                        <span><p>17/04</p></span>
                    </div>
                    <div className={styles.content_dynamic}>
                        <p className={styles.title}>Lorem Ipsum</p>
                        <div className={styles.bodytext}>
                            <p>Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry. 
                            </p>
                        </div>
                        <span><p>17/04</p></span>
                    </div>
                    <div className={styles.content_dynamic}>
                        <p className={styles.title}>Lorem Ipsum</p>
                        <div className={styles.bodytext}>
                            <p>Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry. 
                            </p>
                        </div>
                        <span><p>17/04</p></span>
                    </div>
                    <div className={styles.content_dynamic}>
                        <p className={styles.title}>Lorem Ipsum</p>
                        <div className={styles.bodytext}>
                            <p>Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry. 
                            </p>
                        </div>
                        <span><p>17/04</p></span>
                    </div>
                    
                </div>

            </div>
                    
            
            
            
            <div>
                text
            </div>
        </aside>
            
        
    )
}

export default Notes;