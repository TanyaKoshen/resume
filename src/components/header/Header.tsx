import React, {useState} from 'react';
import Button from '../../shared/UI/button/Button';
import cl from './Header.module.css'
import {Link} from "react-router-dom";

const Header = () => {
    const [active, setActive] = useState('')
    return (
        <div className={cl.header}>
            <div >
                <Link to={'score'}
                      className={cl['score-link']}>
                    Scoreboard
                </Link>
            </div>
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
