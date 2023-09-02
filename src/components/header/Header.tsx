import React, {useState} from 'react';
import Button from '../../shared/UI/button/Button';
import cl from './Header.module.css'

const Header = () => {
    const [active, setActive] = useState('')
    return (
        <div className={cl.header}>
            <div
                onClick={()=>setActive('Login')}
                className={cl['header-item']}>
                Login
            </div>
            <div
                onClick={()=>setActive('Sign up')}
                className={cl['header-item']}>
                Sign up
            </div>
        </div>
    );
};

export default Header;
