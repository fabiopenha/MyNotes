import Api from "./api";

export default function NotesService() {
    async function index() {
        const data = await Api.get('/notes', {
            headers: {'token': localStorage.getItem('token')}
        })
    }
}