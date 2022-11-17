import employeesStore from "../stores/employees-stores";
import { ref, child, get} from "firebase/database";


export async function initializeEmployees(database) {
    const dbRef = ref(database);
   await get(child(dbRef, 'employees')).then((snapshot) => {
        if(snapshot.exists()) {
            const employees = snapshot.val();
            employeesStore.setEmployees(employees);
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.log("Error occured! ",  error)
    });
}