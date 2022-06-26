import productsStore from "../stores/products-store";
import { ref, child, get} from "firebase/database";


export async function	initializeProducts(database) {
    const dbRef = ref(database);
    
   await get(child(dbRef, 'products')).then((snapshot) => {
        if(snapshot.exists()) {
            const products = snapshot.val();
            productsStore.setProducts(products);
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.log("Error occured! ",  error);
    });
}