import { writable } from "svelte/store";

const products = writable([]);

const productsStore = {
	subscribe: products.subscribe,
	setProducts: (fetchedProducts) => {
		products.set(fetchedProducts);
	}
}

export default productsStore;