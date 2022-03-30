import Api from "./api";

export default function NotesService() {    
    const token = localStorage.getItem('token')
    async function create() {
        try{
            const data = await Api.post('/notes',{'title':'nova nota', 'body':'nova nota'}, {
                headers: {'token': JSON.parse(token)}
            })
        } catch(error) {
            let err = error.response.data.error
        }
    }

    async function deleteNote(id) {
        try{
            const data = await Api.delete(`/notes/${id}`, {
                headers: {'token': JSON.parse(token)}
            })
        } catch(error) {
            let err = error.response.data.error
        }
    }
    

    return {create, deleteNote}
}