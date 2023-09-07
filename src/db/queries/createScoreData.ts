import {nanoid} from "nanoid";
import {ICategory} from "../../pages/score/model";
import {collection, addDoc} from "firebase/firestore";
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


export async function createScores() {
    const categoriesRef = collection(db, 'categories');

    try {
        const docRef = await addDoc(categoriesRef, {
            categories
        });

        return docRef.id;;

    } catch (error) {
        console.error('Error creating document:', error);
    }
}

