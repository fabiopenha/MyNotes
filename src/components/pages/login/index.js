import { useContext, useState } from 'react';
import Input from '../../forms/Input';
import styles from '../register/Register.module.css';

import Button from '../../../components/button';
import { Link } from 'react-router-dom';
import { Context } from '../../context/UserContext';

const Login = () => {
    const [user, setUser] = useState();
    const {login, error, textLogin} = useContext(Context);

    const handleChange = (e) =>{
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        
        login(user)

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
                        handleOnChange={handleChange}
                    />
                    <Input 
                        type='password'
                        text= 'Password' 
                        name='password' 
                        placeholder='Insert your password'
                        handleOnChange={handleChange}
                    />
                    { error && 
                        <div className={styles.formError}>{textLogin}</div>}
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