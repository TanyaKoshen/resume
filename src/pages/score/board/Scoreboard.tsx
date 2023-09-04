import React, {useState} from 'react';
import {nanoid} from "nanoid";
import Scorecard from "../card/Scorecard";
import cl from './Scoreboard.module.css'
import {ICategory} from "../model";
import Button from "../../../shared/UI/buttonMain/Button";

const categories = [
    {
        id: nanoid(),
        metric: 'usability',
        description: '',
        score: 0,
        comments: '',
        average: 0
    },
    {
        id: nanoid(),
        metric: 'visual design',
        description: '',
        score: 0,
        comments: '',
        average: 0
    },
    {
        id: nanoid(),
        metric: 'content',
        description: '',
        score: 0,
        comments: '',
        average: 0
    },
    {
        id: nanoid(),
        metric: 'responsive web design',
        description: '',
        score: 0,
        comments: '',
        average: 0
    },
    {
        id: nanoid(),
        metric: 'browser compatibility',
        description: '',
        score: 0,
        comments: '',
        average: 0
    },
    {
        id: nanoid(),
        metric: 'app performance',
        description: '',
        score: 0,
        comments: '',
        average: 0
    },
]

const Scoreboard = () => {

    const [data, setData] = useState(categories);
    const [ratings, setRatings] = useState<ICategory[]>([]);


    const handleRatingUpdate = (id: string, newRating: number) => {
        const updData = data.map(category =>
            category.id === id ? {...category, score: newRating} : category
        )
        setData(updData);
    }


    const isAllMetricsRated = data.every(category=> category.score !== 0)
    const handleSubmit = () => {
        if (isAllMetricsRated) {
            setRatings([...data])
            alert('Thanks for your feedback!')
        }
    }

    return (
        <div className={cl.scoreboard}>
            <h4>Your feedback is appreciated!</h4>
            <div className={cl['board-container']}>
                {categories.map(category =>
                    <div
                        key={category.id}>
                        <Scorecard category={category}
                                   handleRatingUpdate={handleRatingUpdate}
                        />
                    </div>
                )}
            </div>
            <Button onClick={handleSubmit} disabled={!isAllMetricsRated}>Submit</Button>
        </div>

    );
};

export default Scoreboard;
