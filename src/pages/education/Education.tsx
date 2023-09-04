import React from 'react';
import cl from './Education.module.css'
import minesPic from '../../shared/assets/Mines_739x.webp'
import msuPic from '../../shared/assets/msu.png'

const educationData = [
    {
        name: 'Colorado School of Mines',
        location: 'Golden, CO',
        date: '',
        emblem: minesPic,
        degree: 'MS',
        major: 'Economics',
    },
    {
        name: 'Lomonosov Moscow State University',
        location: 'Moscow, Russia',
        date: '',
        emblem: msuPic,
        degree: 'MS',
        major: 'Geology',
    }]

const Education = () => {
    return (
        <div>
            <h3>education</h3>
            <h2>education</h2>
            <div className={cl['ed-container']}>
                {educationData.map(el =>
                    <div key={el.name}
                         className={cl.education}>
                        <div className={cl['logo-container']}>
                            <img
                                src={el.emblem}
                                alt="el.name"
                                className={cl.logo}/>
                        </div>
                        <div className={cl['info-container']}>
                                <h4>{el.name}</h4>
                                <h5>{el.degree} {el.major}</h5>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Education;
