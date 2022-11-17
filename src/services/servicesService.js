import servicesStore from "../stores/services-store";
import { child, ref, get } from "firebase/database";


export async function initializeServices(database) {
    const dbRef = ref(database);

    await get(child(dbRef, 'services')).then((snapshot) => {
        if(snapshot.exists()) {
            const services = snapshot.val();
            servicesStore.setServices(services); 
        } else  {
            console.log("Could not find any data available for services");
        }
    }).catch((error) => {
        console.log(`Unexpected error occured - ${error}`);
    });
}