import React, {useEffect, useState} from 'react';
import cl from './Header.module.css'
import {Link} from "react-router-dom";

const Header = () => {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(()=>{
        const intevalId = setInterval(()=>{
            setCurrentTime(new Date());
        },1000);
        return ()=>clearInterval(intevalId);
    },[]);

    return (
        <div className={cl['header-container']}>
            <div className={cl.header}>
                <Link to={'score'}
                      className={cl['score-link']}>
                    Scoreboard
                </Link>
                {currentTime.toLocaleTimeString()}
            </div>
        </div>
    );
};

export default Header;
