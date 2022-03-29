import { Editor } from '@tinymce/tinymce-react';
import styles from '../notes/Notes.module.css';
import Input from '../../../components/forms/Input';
import Card from '../notes/cards';
import Api from '../../../services/api'
import {useEffect, useState} from 'react'
import Moment from 'moment';
const Notes = () => {
    const [notes, setNotes] = useState([])

    useEffect(()=>{
        const token = localStorage.getItem('token')

        Api.get('/notes', {
            headers: {'token':`${JSON.parse(token)}`}
        }).then(({data})=>{
            setNotes(data)
        })
    },[])



    return (
        <div className={styles.notes_container}>
            <div className={styles.notes_aside}>
                <div className={styles.main_content}>
                    <div className={styles.box_note}><Input/></div>
                    <div className={styles.time}><p>10 Notes</p></div>
                </div>
                <div className={styles.allcards}>
                
                
                    {notes?.map((item)=>(
                        <Card 
                            key={item._id}
                            title={item.title}
                            textBody={item.body} 
                            time={Moment(item.created_at).format('DD/MM')}
                        / >
                    ))}
                
            
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