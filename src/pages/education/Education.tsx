import React from 'react';
import cl from './Education.module.css'
import minesPic from '../../shared/assets/Mines_739x.webp'
import msuPic from '../../shared/assets/M.V.Lomonosov-Moscow-State-University.webp'

const Education = () => {
    return (
        <div className={cl.container} >
            <div className={cl['logo-container']} >
                <img
                    src={minesPic}
                    alt="Mines emblem"
                    className={cl['logo']}/>
            </div>
            <div className={cl['logo-container']}>
                <img
                    src={msuPic}
                    alt="M.V.Lomonosov-Moscow-State-University emblem"
                    className={cl['logo']}
                />
            </div>
        </div>
    );
};

export default Education;
