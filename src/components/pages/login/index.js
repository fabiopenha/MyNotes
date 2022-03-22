import Input from '../../forms/Input';
import styles from '../../pages/register/Register.module.css';

import Button from '../../../components/button';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className={styles.register_container}>
            <div className={styles.content}>
                <p>My Notes</p>
                <form>
                    <Input 
                        type='email'
                        text= 'E-mail' 
                        name='email' 
                        placeholder='Insert your email'
                    />
                    <Input 
                        type='password'
                        text= 'Password' 
                        name='password' 
                        placeholder='Insert your password'
                    />
                    <div className={styles.btn_container}>
                        <span><Link to='/login'>Create an account or</Link></span>
                        <Link to='/dashboard'><Button text='Login' /></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;