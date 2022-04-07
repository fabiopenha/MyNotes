import { Editor } from '@tinymce/tinymce-react';
import styles from '../notes/Notes.module.css';
import Input from '../../../components/forms/Input';
import Card from '../notes/cards';
import NotesService from '../../../services/notes';
import {useContext, useEffect, useState} from 'react'
import Moment from 'moment';

const Notes = () => {
    const [notes, setNotes] = useState([])
    const [body, setBody] = useState('')
    const [token, setToken] = useState(window.localStorage.getItem("token"))

    useEffect(() => {
        fetchNotes()
    })

    async function fetchNotes() {
        const response = await NotesService.index(token);
        if (response.data.length >= 1) {
            setNotes(response.data.reverse())
        } else {
            setNotes([]);
        }
    }
    
    const createNote = async () => {
        await NotesService.create(token);
        fetchNotes();
    }

    return (
        <div className={styles.notes_container}>
            <div className={styles.notes_aside}>
                <div className={styles.main_content}>
                    <div className={styles.box_note}><Input/></div>
                    <div className={styles.time}>
                        <p>{notes.length > 1?
                            `${notes.length} Notes`:`${notes.length} Note`}
                        </p>
                        <a onClick={() => createNote()} className={styles.createNotes}>Note +</a>
                    </div>
                </div>
                <div className={styles.allcards}>
                
                
                    {notes?.map((item)=>(
                        <Card 
                            key={item._id}
                            title={item.title}
                            textBody={item.body} 
                            time={Moment(item.created_at).format('DD/MM')}
                            token={token}
                            noteId={item._id}
                        / >
                    ))}
                
            
                </div>

            </div>
                    
            <div className={styles.textbox_container}>
            <Editor
                textareaName='content'
                initialValue='Write your content here'
                onEditorChange={(newText) => {setBody(newText)}}
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