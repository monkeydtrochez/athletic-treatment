import { writable } from "svelte/store";

const services = writable([]);

const servicesStore = {
    subscribe: services.subscribe,
    setServices: (fetchedServices) => {
        services.set(fetchedServices);
    }
}

export default servicesStore;