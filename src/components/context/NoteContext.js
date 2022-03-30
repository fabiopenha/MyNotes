import { createContext } from "react";
import NotesService from "../../services/notes";

const Context = createContext()

function NotesProvider({children}) {
    const { create, deleteNote } = NotesService()
    return <Context.Provider value={
        { create, deleteNote }}>{children}</Context.Provider>

}

export { Context, NotesProvider }