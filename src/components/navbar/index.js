import { Link } from "react-router-dom";
import styles from './Navbar.module.css';

const Navbar = () => (
    <nav className={styles.navbar}>
        <div className={styles.navbar_logo}>
            <Link to='/'><h2>My Notes</h2></Link>
        </div>
        <ul>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login' className={styles.btn_login}>Login</Link>
            </li>
        </ul>
    </nav>
)

export default Navbar;