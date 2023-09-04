import React from 'react';
import {ICategory} from "../model";
import cl from './Scorecard.module.css';
import Rating from "../rating/Rating";


interface IScorecardProps{
    category: ICategory;
    handleRatingUpdate: (id: string, newRating: number)=> void;
}

const Scorecard = ({category, handleRatingUpdate}:IScorecardProps ) => {
    return (
        <div className={cl['card-container']}>
            <h5>{category.metric}</h5>
            <div className={cl.avg}>
                <Rating initialRating={category.score}
                        categoryId={category.id}
                        handleRatingUpdate={handleRatingUpdate}
                />
                <span>{category.average}</span>
            </div>

            <h4>{category.description}</h4>
            <div>{category.comments}</div>
        </div>


    );
};

export default Scorecard;
