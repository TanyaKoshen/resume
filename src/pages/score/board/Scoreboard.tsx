import React from 'react';
import {nanoid} from "nanoid";
import Scorecard from "../card/Scorecard";
import cl from './Scoreboard.module.css'

const Scoreboard = () => {

    const categories = [
        {
            id: nanoid(),
            metric: 'usability',
            description: '',
            score: 0,
            comments: '',
        },
        {
            id: nanoid(),
            metric: 'visual design',
            description: '',
            score: 0,
            comments: ''
        },
        {
            id: nanoid(),
            metric: 'content',
            description: '',
            score: 0,
            comments: ''
        },
        {
            id: nanoid(),
            metric: 'responsive web design',
            description: '',
            score: 0,
            comments: ''
        },
        {
            id: nanoid(),
            metric: 'browser compatibility',
            description: '',
            score: 0,
            comments: ''
        },
        {
            id: nanoid(),
            metric: 'app performance',
            description: '',
            score: 0,
            comments: ''
        },
    ]

    return (
        <div  >
            <h4>Your feedback is appreciated!</h4>
            <div className={cl['board-container']}>
                {categories.map(category =>
                    <div

                        key={category.id}>
                        <Scorecard category={category}
                        />
                    </div>
                )}
            </div>
        </div>

    );
};

export default Scoreboard;
