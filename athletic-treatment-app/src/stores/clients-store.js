import { writable } from "svelte/store";

const clients = writable([]);

const clientsStore = {
	subscribe: clients.subscribe,
	setClients: (fetchedClients) => {
		clients.set(fetchedClients);
	}
};

export default clientsStore;