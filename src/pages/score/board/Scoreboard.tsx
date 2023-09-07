import React, {useEffect, useState} from 'react';
import {nanoid} from "nanoid";
import cl from './Scoreboard.module.css'
import Button from "../../../shared/UI/buttonMain/Button";
import {ICategory} from "../model";
import Modal from "../../../shared/UI/modal/Modal";
import db from '../../../db/dbConnect';
import {collection, onSnapshot, query, updateDoc, getDocs} from "firebase/firestore";
import ViewCard from "../ViewCard";


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

    useEffect(() => {
        const categoriesColRef = query(collection(db, 'categories'));
        onSnapshot(categoriesColRef, (snapshot) => {
            const categoryData = snapshot.docs.map((doc) => doc.data());
            setData(categoryData[0].categories);
            setVotes(categoryData[0].categories[0].score.length);
            setIsLoading(false);

        });
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

    const updateColl = (newData: ICategory[]) => {

        const q = query(collection(db, 'categories'));
        getDocs(q)
            .then((querySnapshot) => {
                    const doc = querySnapshot.docs[0];
                    const docRef = doc.ref;
                    updateDoc(docRef, { categories: newData });

            })
            .then(() => console.log('Document updated successfully'))
            .catch((err) => console.error('Error updating document:', err));


        // const docRef = doc(db, 'categories', '5IDF7RUEynndYm2LK5s3');
        // updateDoc(docRef, {categories: newData})
        //     .then(() => console.log('Document updated successfully'))
        //     .catch(err => console.error('Error updating document:', err));
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
            updateColl(newDataArray);
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


