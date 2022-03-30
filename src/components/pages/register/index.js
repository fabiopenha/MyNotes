import { useState, useEffect, useContext} from 'react';
import Input from '../../forms/Input';
import styles from '../register/Register.module.css';

import Button from '../../button';
import { Link } from 'react-router-dom';
import { Context } from '../../context/UserContext'

const Register = () => {
    const [user, setUser] = useState();
    const {register, error, text} = useContext(Context);

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
            register(user)

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
                        handleOnChange={handleChange}
                    />

                    <Input 
                        type='email'
                        text= 'E-mail' 
                        name='email' 
                        placeholder='Insert your email'
                        handleOnChange={handleChange}
                    />

                    <Input 
                        type='password'
                        text= 'Password' 
                        name='password' 
                        placeholder='Insert your password'
                        handleOnChange={handleChange}
                    />
                    <Input 
                        type='password'
                        text= 'Confirm Password' 
                        name='confirmPassword' 
                        placeholder='Confirm your password'
                        handleOnChange={handleChange}
                    />
                    { error && 
                        <div className={styles.formError}>{text}</div>}
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