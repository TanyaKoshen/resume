import React, {useEffect, useState} from 'react';
import {nanoid} from "nanoid";
import cl from './Scoreboard.module.css'
import Button from "../../../shared/UI/buttonMain/Button";
import {ICategory} from "../model";
import Modal from "../../../shared/UI/modal/Modal";
import DataMap from "../DataMap";
import db from '../../../db/dbConnect';
// import {getAllScoreData} from "../../../db/queries/getAllScoreData";
import {categories} from "../../../db/queries/createScoreData";
import {collection, onSnapshot, query, doc, updateDoc} from "firebase/firestore";



const Scoreboard = () => {

    const [data, setData] = useState<ICategory[]>([]);
    const [ratings, setRatings] = useState<ICategory[]>([]);
    const [isActive, setIsActive] = useState(false);
    const [votes, setVotes] = useState(0);
    const [modalActive, setModalActive] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    //create init data once;
    // useEffect(() => {
    //     createScores();
    // }, []);

    useEffect(() => {
        const categoriesColRef = query(collection(db, 'categories'));
        onSnapshot(categoriesColRef, (snapshot) => {
            const categoryData = snapshot.docs.map((doc) => doc.data());
            setData(categoryData[0].categories);
            setIsLoading(false);
        });
    }, []);


    function resetRatings(arr: ICategory[]) {
        return arr.map(el => ({...el, score: [], average: 0, id: nanoid()}))
    }

    const avg = (arr: number[]) => {
        if (arr.length) return arr.reduce((a, b) => a + b) / arr.length;
        return 0;
    }

    const handleRatingUpdate = (id: string, newRating: number) => {
        if (ratings) {
            const updData = ratings.map(category =>
                category.id === id ? {...category, score: [...category.score, newRating]} : category
            )
            setRatings(updData);
            const newData = updData.map(el => ({...el, average: avg(el.score)}))
            setData(newData);

            updateDoc(doc(db, 'categories', 'Yd5arqkovud49GfJMZ80'), {newData})
                .then(r => console.log(r))
                .catch(err => console.log(err));
        }
    }
    const isAllMetricsRated = ratings?.every(category => category.score.length !== 0)

    const handleSubmit = () => {
        if (isAllMetricsRated) {
            setRatings(resetRatings(data));
            setIsActive(false);
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
            }, 3000);
            return () => clearInterval(timeoutId);
        }
    }, [modalActive]);

    if (isLoading) {
        return <h3>Loading data...</h3>;
    }

    return (
        <div className={cl.scoreboard}>

            {isActive
                ? <>
                    <h4>Please rate your experience on each category</h4>
                    <div className={cl['board-container']}>
                        <DataMap data={ratings} handleRatingUpdate={handleRatingUpdate} isActive={isActive}/>
                        <div className={cl['board-btn']}>
                            <Button onClick={handleSubmit} disabled={!isAllMetricsRated}>Submit</Button>
                        </div>
                    </div>
                </>
                :
                <>
                    <h4>Scoreboard</h4>
                    <div className={cl['board-container']}>
                        <DataMap data={data} handleRatingUpdate={handleRatingUpdate} isActive={isActive}/>
                        votes: {votes}
                        <div className={cl['board-btn']}>
                            <Button onClick={handleLeaveFeedback}>Leave Feedback</Button>
                        </div>

                    </div>
                </>}
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
