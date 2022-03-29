import { Link, useNavigate } from "react-router-dom";
import styles from './Navbar.module.css';
import { Context } from "../context/UserContext";
import { useContext, useEffect, useState } from "react";

const Navbar = () => {
    const {authenticated, logout} = useContext(Context)


    return (
    <>
        <nav className={styles.navbar}>
            <div className={styles.navbar_logo}>
                <Link to='/'><h2>My Notes</h2></Link>
            </div>
            <ul>
                {!authenticated ?
                <>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li className={styles.btn_login}>
                    <Link to='/login'>Login</Link>     
                </li>
                </>
                : <>
                    <li className={styles.btn_logout}><a onClick={e => logout()}>Logout</a></li>
                </>}
            </ul>
        </nav>
    </>
 )
}

export default Navbar;