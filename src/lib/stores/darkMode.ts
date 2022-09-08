import { browser } from '$app/environment';
import { writable } from 'svelte/store';

function createDarkModeStore() {
    const systemThemeDark = browser ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;
    const userTheme = browser ? localStorage.theme : undefined;
    const initialValue = userTheme === 'dark' || (userTheme === undefined && systemThemeDark);

    const switchDarkModeClass = (enabled: boolean) => {
        if(enabled) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    if(browser) {
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
