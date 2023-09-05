import React, {useState} from 'react';
import { FaStar } from 'react-icons/fa';
import cl from './Rating.module.css'

interface IRatingProps{
  //  initialRating?: number;
    handleRatingUpdate: (id: string, rating: number)=> void;
    categoryId: string
}

const Rating = ({handleRatingUpdate ,categoryId}:IRatingProps ) => {
    const [score, setScore] = useState( 0);

    const handleClick = (rating: number) => {
        handleRatingUpdate(categoryId,rating);
        setScore(rating)
    }
    return (
        <div className={cl['rating-container']}>
            {[...Array(5)].map((el,i)=> {
               const rating = i + 1;
               const inputId = rating + categoryId
               return (
                   <label htmlFor={inputId} key={i}>
                       <input
                           id={inputId}
                           type="radio"
                           className={cl.inp}
                           value={rating}
                           onClick={()=>handleClick(rating)}
                       />
                       <div className={rating > score? cl.rating: cl['rating-given']}>
                           <FaStar/>
                       </div>

                   </label>
               )
            })}
        </div>
    );
};

export default Rating;
