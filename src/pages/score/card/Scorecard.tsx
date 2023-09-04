import React from 'react';
import {ICategory} from "../model";


interface IScorecardProps{
    category: ICategory;
}

const Scorecard = ({category}:IScorecardProps ) => {
    return (
        <div>
            <h3>{category.metric}</h3>
            <h4>{category.description}</h4>
            <h4>{category.score}</h4>
            <div>{category.comments}</div>
        </div>


    );
};

export default Scorecard;
