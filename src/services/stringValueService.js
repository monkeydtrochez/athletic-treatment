
import { ref, child, get} from "firebase/database";

export async function fetchStringValues(database) {
    const dbRef = ref(database);
    
    const result = await Promise.all([
        fetchAboutAreaTexts(dbRef),
        fetchProductAreaTexts(dbRef),
        fetchClientAreaTexts(dbRef),
        fetchContactAreaTexts(dbRef)])
        .then(res => res.reduce((prev, curr) =>  ({...curr, ...prev})));
        
        return new Promise((resolve) => {
            resolve(result);
        })
    }
    
    function fetchContactAreaTexts(dbRef) {
        return new Promise((resolve, reject) => {
            get(child(dbRef, 'contactAreaTexts'))
            .then((snapshot) => {
                if(snapshot.exists()) {
                    const contactAreaTexts = snapshot.val();
                    resolve({ contactAreaTexts });
                } else {
                    reject("Could not find any contact area texts!")
                }
            })
            .catch((error) => {
                console.log("Error occured! ", error);
            });
        });
    }
    
    function fetchClientAreaTexts(dbRef) {
        return new Promise((resolve, reject) => {
            get(child(dbRef, 'clientAreaTexts'))
            .then((snapshot) => {
                if(snapshot.exists()) {
                    const clientAreaTexts = snapshot.val();
                    resolve({ clientAreaTexts });
                } else {
                    reject("Could not find any client area texts!")
                }
            })
            .catch((error) => {
                console.log("Error occured! ", error);
            });
        });
    }
    
    function fetchAboutAreaTexts (dbRef) {
        return new Promise((resolve, reject) => {
            get(child(dbRef, 'aboutAreaTexts'))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const aboutAreaTexts = snapshot.val();
                    resolve({ aboutAreaTexts });
                } else {
                    reject("Could not find any about area texts!");
                }
            }).catch((error) => {
                console.log("Error occured! ", error);
            });
        });
    }
    
    function fetchProductAreaTexts(dbRef) {
        return new Promise((resolve, reject) => {
            get(child(dbRef, 'productAreaTexts'))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const productAreaTexts = snapshot.val();
                    resolve({ productAreaTexts });
                } else {
                    reject("Could not find any product area texts!");
                }
            }).catch((error) => {
                console.log("Error occured! ", error);
            });
        });
    }