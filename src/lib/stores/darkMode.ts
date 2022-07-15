import { server } from '$app/env';
import { writable } from 'svelte/store';

function createDarkModeStore() {
    const systemThemeDark = server ? false : window.matchMedia('(prefers-color-scheme: dark)').matches;
    const userTheme = server ? undefined : localStorage.theme;
    const initialValue = userTheme === 'dark' || (userTheme === undefined && systemThemeDark);

    const switchDarkModeClass = (enabled: boolean) => {
        if(enabled) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    if(!server) {
        switchDarkModeClass(initialValue);
    }
    const { subscribe, set, update } = writable<boolean>(initialValue);
    return {
        subscribe,
        toggle: () => update((value: boolean) => {
            const newValue = !value;
            switchDarkModeClass(newValue);
            localStorage.theme = newValue ? 'dark' : 'light';
            return newValue;
        }),
        reset: () => {
            switchDarkModeClass(systemThemeDark);
            localStorage.removeItem('theme');
            set(systemThemeDark);
        }
    }
}

export const darkMode = createDarkModeStore();
