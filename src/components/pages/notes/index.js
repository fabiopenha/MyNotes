
import styles from '../notes/Notes.module.css';
import Input from '../../../components/forms/Input';
import Card from '../notes/cards';
import NotesService from '../../../services/notes';
import EditorText from './editor'
import {useContext, useEffect, useState} from 'react'
import Moment from 'moment';

const Notes = () => {
    const [notes, setNotes] = useState([])
    const [current_note, setCurrentNote] = useState({ title: "", body: "", id: "" });
    const [title, setTitle] = useState('')
    const [token, setToken] = useState(window.localStorage.getItem("token"))

    useEffect(() => {
        fetchNotes()
    }, [])

    async function fetchNotes() {
        const response = await NotesService.index(token);
        if (response.data.length >= 1) {
            setNotes(response.data.reverse())
            setCurrentNote(response.data[0])
        } else {
            setNotes([]);
        }
    }
    
    const createNote = async () => {
        await NotesService.create(token);
        fetchNotes();
    }

    const deleteNote = async (id) => {
        await NotesService.delete(id, token);
        fetchNotes();
      }

    const updateNote = async (oldNote, params) => {
        const updatedNote = await NotesService.update(oldNote._id, params, token);
        const index = notes.indexOf(oldNote);
        const newNotes = notes;
        newNotes[index] = updatedNote.data;
        setNotes(newNotes);
        setCurrentNote(updatedNote.data);
      }

    const selectNote = async (id) => {
        const note = await notes.find((note) => {
          return note._id == id;
        })
        setCurrentNote(note);
        console.log("cliclou menor", note._id)
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
                            selectNote={selectNote}
                            current_note={current_note}
                            delete={deleteNote}
                        / >
                    ))}
                
            
                </div>

            </div>
                    
            <div className={styles.textbox_container}>
            <EditorText 
                note={current_note}
                updateNote={updateNote}
                token={token}
            />
            </div>
        </div>
            
        
    )
}

export default Notes;