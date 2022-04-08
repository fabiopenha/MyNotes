import Api from "./api";
console.log(`TOKEN: ${window.localStorage.getItem("token")}`)
const NotesService = {
    index: (token) => Api.get('/notes', {
      headers: {'token': JSON.parse(token) }
    }),
    create: (token) => Api.post('/notes', {'title': 'Nova nota', 'body': 'Nova nota...' }, {
      headers: {'token': JSON.parse(token) }
    }),
    delete: (id, token) => Api.delete(`/notes/${id}`, {
      headers: {'token': JSON.parse(token) }
    }),
    update: (id, params, token) => Api.put(`/notes/${id}`, params, {
      headers: {'token': JSON.parse(token) }
    }),
    search: (query) => Api.get(`/notes/search?query=${query}`, {
      headers: {'token': localStorage.getItem('token') }
    })
  }
  
  export default NotesService;