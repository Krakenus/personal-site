<script lang="ts">
    import FormInput from '$lib/components/forms/formInput.svelte';
    import FormTextarea from '$lib/components/forms/formTextarea.svelte';

    let error = false;
    let success = false;

    let name: string
    let email: string
    let message: string
    let check: number

    function handleSubmit() {
        if(check !== 4) {
            success = false;
            error = true;
            return
        }
        fetch('/api/v1/send-email', {
            method: 'POST',
            body: {
                name: name,
                email: email,
                message: message
            }.toString(),
        }).then((response) => {
            if(response.ok) {
                success = true;
                error = false;
            } else {
                success = false;
                error = true;
            }
        }).catch(() => {
            success = false;
            error = true;
        });
    }
</script>

<div class="my-4">
    <form on:submit|preventDefault={handleSubmit}>
        <FormInput name="name" type="text" label="Name" required={true} placeholder="Enter your name" bind:value={name} />
        <FormInput name="email" type="email" label="E-mail" required={true} placeholder="Enter your e-mail" bind:value={email} />
        <FormTextarea name="message" label="Message" required={true} placeholder="Enter your message" bind:value={message} />
        <FormInput name="check" type="number" label="2 + 2 = ?" required={true} placeholder="Answer" bind:value={check} />
        <div>
            <button class="float-right bg-blue-500 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-900 p-2 px-3 mx-0.5 text-center rounded-md transition-colors duration-300 ease-in-out text-white" type="submit">Send</button>
            <div class="clear-both"></div>
        </div>
    </form>
    {#if error}<p>Message submission failed.</p>{/if}
    {#if success}<p>Message sent. Thank you.</p>{/if}
</div>
