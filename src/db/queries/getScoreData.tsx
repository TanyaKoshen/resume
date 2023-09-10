import {collection, onSnapshot, query} from "firebase/firestore";
import db from "../dbConnect";

interface IGetScore{
    setData: ()=>void;
    setVotes: ()=>void;
    setIsLoading: ()=>void;
}

export const getScoreData = (
    setData: Function,
    setVotes: Function,
    setIsLoading: Function
):void => {

    try{
        const categoriesColRef = query(collection(db, 'categories'));
        onSnapshot(categoriesColRef, (snapshot) => {
            const categoryData = snapshot.docs.map((doc) => doc.data());
            setData(categoryData[0].categories);
            setVotes(categoryData[0].categories[0].score.length);
            setIsLoading(false);
        });
    }catch(error){
        console.log(error);
        setIsLoading(false);
    }
}
