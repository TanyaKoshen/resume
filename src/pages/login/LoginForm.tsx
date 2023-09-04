import React, {FC, useState} from 'react';
import cl from './Login.module.css'
import Button from "../../shared/UI/buttonMain/Button";

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <div className={cl['login-container']}>
        <div className={cl['login-form']}>
            <h2>Login</h2>
            <input
                className={cl.inp}
                onChange={e=>setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='email'
            />
            <input
                className={cl.inp}
                onChange={e=>setPassword(e.target.value)}
                value={email}
                type="password"
                placeholder='password'
            />
            <Button>login</Button>
            <h5 style={{marginTop: '40px'}}>Don't have an account?</h5>
            <Button>register</Button>
        </div>
        </div>
    );
};

export default LoginForm;
