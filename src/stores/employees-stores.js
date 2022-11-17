import { writable } from "svelte/store";

const employees = writable([]);

const employeesStore = {
	subscribe: employees.subscribe,
	setEmployees: (fetchedEmployees) => {
		employees.set(fetchedEmployees);
	}
};

export default employeesStore;