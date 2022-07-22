<script lang="ts">
    import FormInput from '$lib/components/forms/formInput.svelte';
    import FormTextarea from '$lib/components/forms/formTextarea.svelte';
    import {darkMode} from "$lib/stores/darkMode.js";

    function handleSubmit(event: SubmitEvent) {
        const formData = new FormData(event.target as HTMLFormElement);
        fetch('/api/v1/contact', {
            method: 'POST',
            body: formData,
        });
    }
</script>

<svelte:head>
    <script src="https://js.hcaptcha.com/1/api.js" async defer></script>
</svelte:head>

<div class="my-4">
    <form on:submit|preventDefault={handleSubmit}>
        <FormInput name="name" type="text" label="Name" required={true} placeholder="Enter your name" />
        <FormInput name="email" type="email" label="E-mail" required={true} placeholder="Enter your e-mail" />
        <FormTextarea name="message" label="Message" required={true} placeholder="Enter your message" />
        <div class="h-captcha" data-sitekey={import.meta.env.VITE_HCAPTCHA_SITE_KEY} data-theme={$darkMode ? 'dark' : 'light'}></div>
        <div>
            <button class="float-right bg-blue-500 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-900 p-2 px-3 mx-0.5 text-center rounded-md transition-colors duration-300 ease-in-out text-white" type="submit">Send</button>
            <div class="clear-both"></div>
        </div>
    </form>
</div>
