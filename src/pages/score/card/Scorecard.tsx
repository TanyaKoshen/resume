import React from 'react';
import {ICategory} from "../model";
import cl from './Scorecard.module.css';
import Rating from "../rating/Rating";


interface IScorecardProps{
    category: ICategory;
}

const Scorecard = ({category}:IScorecardProps ) => {
    return (
        <div className={cl['card-container']}>
            <h4>{category.metric}</h4>
            <Rating initialRating={category.score}/>
            <h4>{category.description}</h4>
            <div>{category.comments}</div>
        </div>


    );
};

export default Scorecard;
