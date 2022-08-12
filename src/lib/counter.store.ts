import { writable } from 'svelte/store';

export const counterStore = writable(0);
export const objectStore = writable({
	name: 'Alfonso'
});
