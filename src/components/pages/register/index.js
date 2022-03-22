import Input from '../../forms/Input';
import styles from '../../pages/register/Register.module.css';

import Button from '../../../components/button';
import { Link } from 'react-router-dom';

const Register = () => {
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
                    <Input 
                        type='password'
                        text= 'Confirm Password' 
                        name='confirmpassword' 
                        placeholder='Confirm your password'
                    />
                    <div className={styles.btn_container}>
                        <span><Link to='/login'>Login or</Link></span>
                        <Link to='/dashboard'><Button text='Register'/></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;