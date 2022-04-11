import {useContext, useEffect, useState} from 'react'
import { Editor } from '@tinymce/tinymce-react';


function EditorText(props) {
    const [currentContent, setCurrentContent] = useState('')
    const [timer, setTimer]= useState(null);
    
    const updateNote = (content) => {
        const title = content.replace(/(<([^>]+)>)/ig, "").slice(0, 30);
        props.updateNote(
            props.note, 
            {
                'title': title, 
                'body': content.replace(/(<([^>]+)>)/ig, "")
            }
        );
    }

    const handleChange = (content) => {
        clearTimeout(timer)
        setCurrentContent(content)
        setTimer(setTimeout(() => updateNote(content),5000))        
    }

    useEffect(()=> {
        setCurrentContent(props.note.body)
    }, [props.note])

    return (
        <Editor     
                    value={currentContent}
                    textareaName='content'
                    initialValue='Once Upon A Time...'
                    onEditorChange={handleChange}
                    init={{
                    entity_encoding: 'raw',
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
    )
}

export default EditorText

