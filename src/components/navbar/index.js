import { Link, useNavigate } from "react-router-dom";
import styles from './Navbar.module.css';
import { useState, useEffect } from "react";
import UserService from "../../services/users";

const Navbar = () => {
    const [user, setUser] = useState(async () => {
        await localStorage.getItem('token')
    })
    const [token, setToken] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        console.log('renderizei')
        if(token === false)
            setUser('')    
            
    }, [setUser, token])
    
    const logOut = async () => {
           await UserService.logout();
           setUser('')
           setToken(false)
           navigate('/')
         }

    return (
    <>
        <nav className={styles.navbar}>
            <div className={styles.navbar_logo}>
                <Link to='/'><h2>My Notes</h2></Link>
            </div>
            <ul>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    {user? 
                        (<a onClick={e => logOut()} className={styles.btn_login}>
                            Logout
                           </a>)
                    : <Link to='/login' className={styles.btn_login}>Login</Link>}
                </li>
            </ul>
        </nav>
    </>
 )
}

export default Navbar;