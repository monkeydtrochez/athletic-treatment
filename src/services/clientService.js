import clientsStore from "../stores/clients-store";
import { ref, child, get} from "firebase/database";


export async function initializeClients(database) {
    const dbRef = ref(database);
   await get(child(dbRef, 'clients')).then((snapshot) => {
        if(snapshot.exists()) {
            const clients = snapshot.val();
            clientsStore.setClients(clients);
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.log("Error occured! ",  error)
    });
}