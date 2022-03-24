import { Editor } from '@tinymce/tinymce-react';
import styles from '../notes/Notes.module.css';
import Input from '../../../components/forms/Input';


const Notes = () => {
    return (
        <div className={styles.notes_container}>
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
                    
            <div className={styles.textbox_container}>
            <Editor
                initialValue="<p>Digite a sua anotação...</p>"
                init={{
                height: 525,
                menubar: false,
                plugins: [
                    'advlist autolink lists link image', 
                    'charmap print preview anchor help',
                    'searchreplace visualblocks code',
                    'insertdatetime media table paste wordcount'
                ],
                toolbar:
                    'undo redo | formatselect | bold italic | \
                    alignleft aligncenter alignright | \
                    bullist numlist outdent indent | help'
                }}
            />
            </div>
        </div>
            
        
    )
}

export default Notes;