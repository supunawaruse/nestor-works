import { db } from "@/lib/firebase";
import { collection, query, orderBy, limit, where, getDocs, doc, getDoc } from "firebase/firestore";

export const getCollectionSectionData = async () => {
    const q = query(collection(db, "watches"), orderBy("model"), limit(8));
    const querySnapshot = await getDocs(q);

    const watchesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    return watchesData;
}

export const getNewArrivals = async () => {
    const q = query(collection(db, "watches"), where("isNewArrival", "==", true), limit(8));
    const querySnapshot = await getDocs(q);

    const watchesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    return watchesData;
}

export const getWatchByDocumentId = async (id) => {
    if (!id) {
        throw new Error("Document ID is required");
    }
    const docRef = doc(db, "watches", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            success: true,
            data: docSnap.data()
        };
    } else {
        return {
            success: false,
            message: "No such document!"
        };
    }

};

export const getRelatedProducts = async (category) => {
    const q = query(collection(db, "watches"), where("category", "==", category), limit(5));
    const querySnapshot = await getDocs(q);

    const watchesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    return watchesData;
}