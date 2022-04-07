import Api from "./api";
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

export default function UserService() {
    const [authenticated, setAuthenticated] = useState(false)
    const [error, setError] = useState(false)
    const [text, setText] = useState('')
    const [textLogin, setTextLogin] = useState('')
    const navigate = useNavigate()

    useEffect(()=> {
        const token = localStorage.getItem("token")
        const user = localStorage.getItem("user")
        console.log(token, user)
        if (token && user) {
            setAuthenticated(true)
        }
    }, [])

    async function register(user) {
    
        try {
          const data = await Api.post('users/register', user).then((response) => {
            return response.data
          })
          
          navigate('/login')
  
        } catch (error) {
          // tratar erro
          setError(true)
          setText(error.response.data.error)
        }

      }

      async function login(user) {
        
        try {
            const data = await Api.post('users/login', user).then((response) => {
                return response.data
            })

            await authUser(data)

        } catch(error) {
            setError(true)
            setTextLogin(error.response.data.error)
        }

        navigate('/notes')

    }

      async function authUser(data) {
        setAuthenticated(true)
        localStorage.setItem('token', JSON.stringify(data.token))
        localStorage.setItem('user', JSON.stringify(data.user))
    
        navigate('/')
      }

      function logout() {

        setAuthenticated(false)
        localStorage.removeItem('user', null);
        localStorage.removeItem('token', null);

        navigate('/')

    }

    return  {error, text,textLogin, authenticated, register, logout, login }
}