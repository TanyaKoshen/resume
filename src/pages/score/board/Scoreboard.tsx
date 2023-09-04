import React from 'react';
import {nanoid} from "nanoid";
import Scorecard from "../card/Scorecard";
import {ICategory} from "../model";

const Scoreboard = () => {

    const categories = [
        {
            id: nanoid(),
            metric: 'usability',
            description: '',
            score: null,
            comments: '',
        },
        {
            id: nanoid(),
            metric: 'visual design',
            description: '',
            score: null,
            comments: ''
        },
        {
            id: nanoid(),
            metric: 'content',
            description: '',
            score:  null,
            comments: ''
        },
        {
            id: nanoid(),
            metric: 'responsive web design',
            description: '',
            score:  null,
            comments: ''
        },
        {
            id: nanoid(),
            metric: 'browser compatibility',
            description: '',
            score:  null,
            comments: ''
        },
        {
            id: nanoid(),
            metric: 'app performance',
            description: '',
            score:  null,
            comments: ''
        },


    ]
    return (
        <div>
            {categories.map( category =>
            <div>
                <Scorecard category={category}/>
            </div>
            )}
        </div>
    );
};

export default Scoreboard;
