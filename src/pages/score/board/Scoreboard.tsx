import React, {useEffect, useState} from 'react';
import {nanoid} from "nanoid";
import cl from './Scoreboard.module.css'
import Button from "../../../shared/UI/buttonMain/Button";
import {ICategory} from "../model";
import Modal from "../../../shared/UI/modal/Modal";
import ViewCard from "../ViewCard";
import {getScoreData} from "../../../db/queries/getScoreData";
import {updateScoreData} from "../../../db/queries/updateScoreData";

const Scoreboard = () => {

    const [data, setData] = useState<ICategory[]>([]);
    const [ratings, setRatings] = useState<ICategory[]>([]);
    const [isActive, setIsActive] = useState(false);
    const [votes, setVotes] = useState<number>(data[0]?.score?.length);
    const [modalActive, setModalActive] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // created data collection in firestore once, run only once;

     // useEffect(() => {
     //     createScores();
     // }, []);

    useEffect( () => {
        getScoreData(setData, setVotes, setIsLoading)
    }, []);

    function resetRatings(arr: ICategory[]) {
        return arr.map(el => ({...el, score: [], average: 0, id: nanoid()}))
    }

    const avg = (arr: number[]) => {
        return arr.reduce((a, b) => a + b) / arr.length;
    }

    const handleRatingUpdate = (id: string, newRating: number) => {
        const updData = ratings?.map(category => (
            category.id === id ? {...category, score: [ newRating]} : category
        ));
        setRatings(updData);
    }

    // validate if all the metrics are given by user
    const isAllMetricsRated = ratings?.every(category => category.score.length !== 0)

    const updateDataArray = () => {
        const updArr = data.map(category => {
            const rating = ratings.find(el => el.metric === category.metric);
            return rating ? {...category, score: [...category.score, ...rating.score]} : category;
        })
        return updArr.map(el => ({
            ...el, average: avg(el.score)
        }));
    }

    const handleSubmit = () => {
        if (isAllMetricsRated) {
            setIsActive(false);
            const newDataArray: ICategory[] = updateDataArray();
            updateScoreData(newDataArray);
            setVotes(data[0]?.score?.length);
            setModalActive(true);
        }
    }

    const handleLeaveFeedback = () => {
        setRatings(resetRatings(data));
        setIsActive(true);
    }

    useEffect(() => {
        if (modalActive) {
            const timeoutId = setTimeout(() => {
                setModalActive(false)
            }, 2000);
            return () => clearInterval(timeoutId);
        }
    }, [modalActive]);

    if (isLoading) {
        return <h3>Loading data...</h3>;
    }

    return (
        <div className={cl.scoreboard}>
            {isActive
                ?
                <ViewCard
                    title={'Please rate your experience on each category'}
                    isActive={isActive}
                    handleRatingUpdate={handleRatingUpdate}
                    data={ratings}
                    handleSubmit={handleSubmit}
                    isAllMetricsRated={isAllMetricsRated}
                    buttonName={'Submit'}
                />
                :
                <ViewCard
                    title={'Scoreboard'}
                    isActive={isActive}
                    handleRatingUpdate={handleRatingUpdate}
                    data={data}
                    handleSubmit={handleLeaveFeedback}
                    isAllMetricsRated={isAllMetricsRated}
                    buttonName={'Leave Feedback'}
                    votes={votes}/>
            }

            <Modal modalActive={modalActive} setModalActive={setModalActive}>
                <div>
                    <h4>Thank you! </h4>
                    <h4>Your feedback is appreciated!</h4>
                    <div className={cl['board-btn']}>
                        <Button onClick={() => setModalActive(false)}>close</Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Scoreboard;


