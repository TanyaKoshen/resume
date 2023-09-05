import React, {useState} from 'react';
import {nanoid} from "nanoid";
import Scorecard from "../card/Scorecard";
import cl from './Scoreboard.module.css'
import Button from "../../../shared/UI/buttonMain/Button";

const categories = [
    {
        id: nanoid(),
        metric: 'usability',
        description: '',
        score: [0],
        comments: '',
        average: 0,
    },
    {
        id: nanoid(),
        metric: 'visual design',
        description: '',
        score: [0],
        comments: '',
        average: 0,
    },
    {
        id: nanoid(),
        metric: 'content',
        description: '',
        score: [0],
        comments: '',
        average: 0,
    },
    {
        id: nanoid(),
        metric: 'responsive web design',
        description: '',
        score: [0],
        comments: '',
        average: 0,
    },
    {
        id: nanoid(),
        metric: 'browser compatibility',
        description: '',
        score: [0],
        comments: '',
        average: 0,
    },
    {
        id: nanoid(),
        metric: 'app performance',
        description: '',
        score: [0],
        comments: '',
        average: 0,
    }
]

const Scoreboard = () => {

    const [data, setData] = useState(categories);
    const [ratings, setRatings] = useState(resetRatings);
    const [isActive, setIsActive] = useState(false);

    console.log(data[0], 'DATA')
    console.log(ratings[0], 'ratings')
    console.log(isActive, 'isActive')

    function resetRatings(){
        return data.map(el => ({...el, score: [0], average: 0, id: nanoid()}))
    }

    const avg = (arr: number[]) => {
        return arr.reduce((a,b)=> a + b )/arr.length;
    }


    const handleRatingUpdate = (id: string, newRating: number) => {
        const updData = ratings.map(category =>
            category.id === id ? {...category, score: [...category.score, newRating]} : category
        )
        setRatings(updData);
        setData(updData.map(el=>({...el, average: avg(el.score)})));
    }
    const isAllMetricsRated = ratings.every(category => category.score.reduce((a, b) => a + b) !== 0)

    const handleSubmit = () => {
        if (isAllMetricsRated) {
            setRatings(resetRatings())
            alert('Thanks for your feedback!');
            setIsActive(false)
        }
    }

    const handleLeaveFeedback = () => {
        setIsActive(true);
    }

    return (
        <div className={cl.scoreboard}>
            <h4>Your feedback is appreciated!</h4>
            <div className={cl['board-container']}>
                {isActive
                    ? ratings.map(el =>
                        <div
                            key={el.id}>
                            <Scorecard category={el}
                                       handleRatingUpdate={handleRatingUpdate}
                                       isActive={isActive}
                            />
                        </div>
                    )
                    : data.map(el =>
                        <div
                            key={el.id}>
                            <Scorecard category={el}
                                       handleRatingUpdate={handleRatingUpdate}
                                       isActive={isActive}/>
                        </div>
                    )}

            </div>

            {isActive
                ? <Button onClick={handleSubmit} disabled={!isAllMetricsRated}>Submit</Button>
                : <Button onClick={handleLeaveFeedback}>Leave Feedback</Button>}
        </div>

    );
};

export default Scoreboard;
