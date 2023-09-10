import React from 'react';
import {ICategory} from "../model";
import cl from './Scorecard.module.css';
import Rating from "../rating/Rating";


interface IScorecardProps {
    category: ICategory;
    handleRatingUpdate: (id: string, newRating: number) => void;
    isActive: boolean;
}

const Scorecard = ({category, handleRatingUpdate, isActive}: IScorecardProps) => {

    return (
        <div className={cl['score-grid']}>
            <h5>{category.metric}</h5>
            <div>
                <Rating
                    categoryId={category.id}
                    handleRatingUpdate={handleRatingUpdate}
                    isActive={isActive}
                    average={Math.round(category.average)}
                />
            </div>
            {!isActive && <span>({category.average.toFixed(1)})</span>}
            <h4>{category.description}</h4>
        </div>


    );
};

export default Scorecard;
