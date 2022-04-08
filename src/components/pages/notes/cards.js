import styles from '../notes/Notes.module.css';
import NotesService from '../../../services/notes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

 const Card = (props) => {

    
    return (
        <div className={styles.content_dynamic} onClick={() => {
            props.selectNote(props.noteId)
        }}>
                        <p className={styles.title}>{props.title}</p>
                        <div className={styles.bodytext}>
                            <p>{props.textBody.slice(0, 120)}</p>
                        </div>
                        <div className={styles.time_content}>
                            <span><p>{props.time}</p></span>
                            <a onClick={ () => props.delete(props.noteId)}>
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