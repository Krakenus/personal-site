import { server } from '$app/env';
import { writable } from 'svelte/store';

function createDarkModeStore() {
    const initialValue: boolean = server ?
                     false :
                     (localStorage.darkMode || (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches));

    const { subscribe, set, update } = writable<boolean>(initialValue);
    return {
        subscribe,
        toggle: () => update((value: boolean) => {
            const newValue = !value;
            if(newValue) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            localStorage.darkMode = newValue;
            return newValue;
        }),
        reset: () => set(initialValue)
    }
}

export const darkMode = createDarkModeStore();
