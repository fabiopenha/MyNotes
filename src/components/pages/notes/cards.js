import styles from '../notes/Notes.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useState, useContext } from 'react';
import { Context } from '../../context/NoteContext';

 const Card = (props) => {
    
    const {deleteNote} = useContext(Context);
    const [notes, setNotes] = useState(props.notes)
    
    return (
        <div className={styles.content_dynamic}>
                        <p className={styles.title}>{props.title}</p>
                        <div className={styles.bodytext}>
                            <p>{props.textBody}</p>
                        </div>
                        <div className={styles.time_content}>
                            <span><p>{props.time}</p></span>
                            <a onClick={ () => deleteNote(props.noteId)}>
                                <FontAwesomeIcon 
                                    className={styles.icon} 
                                    icon={faTrashAlt} 

                                />
                            </a>

                        </div>
        </div>
    )
}


export default Card;