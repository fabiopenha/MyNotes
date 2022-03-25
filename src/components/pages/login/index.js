import { useState } from 'react';
import Input from '../../forms/Input';
import styles from '../register/Register.module.css';

import Button from '../../../components/button';
import { Link, useNavigate } from 'react-router-dom';
import UserService from '../../../services/users';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate()
    const handleSubmit = async (evt) => {
        evt.preventDefault();
       
        try {
            await UserService.login({email: email, password: password});
            navigate('/notes');
        } catch (error) {
            setError(true)
          }
    }
    return (
        <div className={styles.register_container}>
            <div className={styles.content}>
                <p>My Notes</p>
                <form onSubmit={handleSubmit}>
                    <Input 
                        type='email'
                        text= 'E-mail' 
                        name='email' 
                        placeholder='Insert your email'
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input 
                        type='password'
                        text= 'Password' 
                        name='password' 
                        placeholder='Insert your password'
                        onChange={e => setPassword(e.target.value)}
                    />
                    { error && 
                        <div className={styles.formError}>Email or password invalid</div>}
                    <div className={styles.btn_container}>
                        <span><Link to='/login'>Create an account or</Link></span>
                        <Button type='submit' text='Login' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;