<script lang="ts">
    import FormInput from '$lib/components/forms/formInput.svelte';
    import FormTextarea from '$lib/components/forms/formTextarea.svelte';
</script>

<div>
    <form>
        <FormInput name="name" type="text" label="Name" required={true} placeholder="Enter your name" />
        <FormInput name="email" type="email" label="E-mail" required={true} placeholder="Enter your e-mail" />
        <FormTextarea name="message" label="Message" required={true} placeholder="Enter your message" />
        <button class="bg-blue-500 hover:bg-blue-700 p-2 px-3 mx-0.5 text-center rounded-md transition-colors duration-300 ease-in-out text-white" type="submit">Send</button>
    </form>
</div>
