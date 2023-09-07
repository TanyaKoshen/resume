import React, {useEffect, useState} from 'react';
import cl from './Header.module.css'
import {Link} from "react-router-dom";
import {AiFillGithub} from "react-icons/ai";
import useResponsive from "../../shared/hooks/useResponsive";



const Header = () => {
    const [isMobile ] = useResponsive();
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intevalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intevalId);
    }, []);


    const pagePathName = window.location.pathname === '/' ? 'home' : window.location.pathname.slice(1);

    const link = 'https://github.com/TanyaKoshen/resume/tree/master/src/pages/'
    const href = pagePathName === 'home' ?  "https://github.com/TanyaKoshen/resume" : link+pagePathName;
const gitLinkName = !isMobile? `GitHub to ${pagePathName} page` : pagePathName
    return (
        <div className={cl['header-container']}>
            <div className={cl['git-hub-link']}>
                <span className='git-hub-icon'>
                     <AiFillGithub/>
                </span>

                <a href={href}
                   target='_blank' rel="noreferrer"
                >{gitLinkName}</a>
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
