import React from 'react';
import Scorecard from "./card/Scorecard";
import {ICategory} from "./model";

interface IDAtaMapProps {
    data: ICategory[] | null;
    handleRatingUpdate: (id: string, newRating: number) => void;
    isActive: boolean;
}

const DataMap = ({data, handleRatingUpdate, isActive}: IDAtaMapProps) => {
    return (
        <>
            {data?.map(el => (
                <div
                    key={el.id}>
                    <Scorecard
                        category={el}
                        handleRatingUpdate={handleRatingUpdate}
                        isActive={isActive}
                    />
                </div>))}
        </>)
}

export default DataMap;
