import { writable } from "svelte/store";
import { browser } from "$app/environment";

const storedStringValues = browser && localStorage.getItem("stringValues") || {};
export const stringValues = writable(storedStringValues);

stringValues.subscribe((value) => 
browser && (localStorage.stringValues = JSON.stringify(value))
);
