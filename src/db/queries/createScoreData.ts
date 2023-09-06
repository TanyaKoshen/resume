import {nanoid} from "nanoid";
import {ICategory} from "../../pages/score/model";
import {collection, addDoc, setDoc} from "firebase/firestore";
import db from "../dbConnect";

export const categories: ICategory[] = [
    {
        id: nanoid(),
        metric: 'usability',
        description: '',
        score: [],
        comments: '',
        average: 0,
    },
    {
        id: nanoid(),
        metric: 'visual design',
        description: '',
        score: [],
        comments: '',
        average: 0,
    },
    {
        id: nanoid(),
        metric: 'content',
        description: '',
        score: [],
        comments: '',
        average: 0,
    },
    {
        id: nanoid(),
        metric: 'responsive web design',
        description: '',
        score: [],
        comments: '',
        average: 0,
    },
    {
        id: nanoid(),
        metric: 'browser compatibility',
        description: '',
        score: [],
        comments: '',
        average: 0,
    },
    {
        id: nanoid(),
        metric: 'app performance',
        description: '',
        score: [],
        comments: '',
        average: 0,
    }
]

export function createScores(){
    const refDoc = collection(db, 'categories');
    addDoc(refDoc, {
        categories
    }).then(res => console.log(res, 'response'))
        .catch(err => console.log(err));
}
