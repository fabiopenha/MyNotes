import { createContext } from "react";
import UserService from "../../services/users";

const Context = createContext()

function UserProvider({children}) {
    const {
        register, 
        login, 
        logout,  
        error, 
        text, 
        textLogin, 
        authenticated} = UserService()
    return <Context.Provider value={
        {register,
         login,
         logout, 
         error, 
         text,textLogin, 
         authenticated
         }}>{children}</Context.Provider>

}

export { Context, UserProvider }