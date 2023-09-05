import React, {useState} from 'react';
import {FaStar} from 'react-icons/fa';
import cl from './Rating.module.css'

interface IRatingProps {
    handleRatingUpdate: (id: string, rating: number) => void;
    categoryId: string;
    isActive: boolean;
    average: number;

}

const Rating = ({handleRatingUpdate, categoryId, isActive, average}: IRatingProps) => {
    const [score, setScore] = useState(average || 0);


    const handleClick = (rating: number) => {
        handleRatingUpdate(categoryId, rating);
        setScore(rating)
    };
    console.log(score);

    return (
        <div className={cl['rating-container']}>
            {[...Array(5)].map((el, i) => {
                const rating = i + 1;
                const inputId = rating + categoryId;

                return (
                    <label htmlFor={inputId} key={i}>
                        <input
                            id={inputId}
                            type="radio"
                            className={cl.inp}
                            value={isActive ? rating : average}
                            onClick={() => {
                                isActive &&
                                handleClick(rating)
                            }}/>

                        <div className={rating > score ? cl.rating : cl['rating-given']}>
                            <FaStar/>
                        </div>
                    </label>
                )
            })}
        </div>
    );
};

export default Rating;
