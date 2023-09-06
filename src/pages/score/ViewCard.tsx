import React from 'react';
import cl from "./board/Scoreboard.module.css";
import DataMap from "./DataMap";
import Button from "../../shared/UI/buttonMain/Button";
import {ICategory} from "./model";

interface IViewCardPProps {
    title: string;
    data: ICategory[];
    handleRatingUpdate: (id: string, newRating: number) => void;
    handleSubmit: () => void;
    isActive: boolean;
    isAllMetricsRated: boolean;
    buttonName: string;
    votes?: number;
}

const ViewCard = (
    {
        title,
        data,
        handleRatingUpdate,
        handleSubmit,
        isActive,
        isAllMetricsRated,
        buttonName,
        votes
    }: IViewCardPProps) => {
    return (
        <div>
            <h4>{title}</h4>
            <div className={cl['board-container']}>
                <DataMap data={data} handleRatingUpdate={handleRatingUpdate} isActive={isActive}/>
                {!isActive && <h4>votes: {votes}</h4>}
                <div className={cl['board-btn']}>
                    <Button onClick={handleSubmit} disabled={!isAllMetricsRated}>{buttonName}</Button>
                </div>
            </div>
        </div>
    );
};

export default ViewCard;
