import React, {useEffect, useState} from 'react';
import cl from './Header.module.css'
import {Link} from "react-router-dom";
import {AiFillGithub} from "react-icons/ai";

const Header = () => {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(()=>{
        const intevalId = setInterval(()=>{
            setCurrentTime(new Date());
        },1000);
        return ()=>clearInterval(intevalId);
    },[]);

    const pagePathName = window.location.pathname === '/'? 'home': window.location.pathname.slice(1)


    return (
        <div className={cl['header-container']}>
            <div className={cl['git-hub-link']}>
                <span  className='git-hub-icon'>
                     <AiFillGithub/>
                </span>

                <a href="https://github.com/TanyaKoshen/resume"
                   target='_blank' rel="noreferrer"
                >GitHub to {pagePathName} page</a>
            </div>
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
