import { useState, useEffect} from 'react';
import Input from '../../forms/Input';
import styles from '../register/Register.module.css';

import Button from '../../button';
import { Link, useNavigate } from 'react-router-dom';
import UserService from '../../../services/users';

const Register = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        try {
                const user = await UserService.register({
                    name: name,
                    email: email, 
                    password: password, 
                    confirmPassword: confirmPassword
                });
                navigate('/login');
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
                        type='name'
                        text= 'Nome' 
                        name='email' 
                        placeholder='Insert your name'
                        onChange={e => setName(e.target.value)}
                    />

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
                    <Input 
                        type='password'
                        text= 'Confirm Password' 
                        name='confirmPassword' 
                        placeholder='Confirm your password'
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                    { error && 
                        <div className={styles.formError}>Email or password invalid</div>}
                    <div className={styles.btn_container}>
                        <span><Link to='/login'>Login or</Link></span>
                            <Button type='submit' text='Register'/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;