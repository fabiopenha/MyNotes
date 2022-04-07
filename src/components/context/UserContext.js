import { createContext, useState } from "react";
import UserService from "../../services/users";

const Context = createContext()

function UserProvider({children}) {
    const [token, setToken] = useState(window.localStorage.getItem("token"))
    
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
         authenticated,
         token
         }}>{children}</Context.Provider>

}

export { Context, UserProvider }