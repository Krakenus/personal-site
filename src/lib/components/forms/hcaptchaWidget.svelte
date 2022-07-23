<script lang="ts">
    import {darkMode} from "$lib/stores/darkMode.js";
    import {onMount} from "svelte";

    onMount(() => {
        // eslint-disable-next-line no-undef
        hcaptcha.render('h-captcha-widget', {
            theme: $darkMode ? 'dark' : 'light',
            size: 'normal',
            sitekey: import.meta.env.VITE_HCAPTCHA_SITE_KEY
        });
    })
</script>

<svelte:head>
    <script src="https://js.hcaptcha.com/1/api.js?render=explicit" async defer></script>
</svelte:head>

<div id="h-captcha-widget"></div>
