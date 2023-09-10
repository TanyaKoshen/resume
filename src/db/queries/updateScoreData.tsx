import {ICategory} from "../../pages/score/model";
import {collection, getDocs, query, updateDoc} from "firebase/firestore";
import db from "../dbConnect";

export const updateScoreData = (newData: ICategory[]) => {
    const q = query(collection(db, 'categories'));
    getDocs(q)
        .then((querySnapshot) => {
            const doc = querySnapshot.docs[0];
            const docRef = doc.ref;
            updateDoc(docRef, { categories: newData });

        })
        .then(() => console.log('Document updated successfully'))
        .catch((err) => console.error('Error updating document:', err));
}
