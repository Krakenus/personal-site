<script lang="ts">
    import Navlink from '$lib/components/navlink.svelte';
</script>

<nav>
    <p>Here you can find:</p>
    <div class="flex flex-col leading-loose max-w-3xl mx-auto my-2 sm:flex-row sm:justify-around">
        <Navlink href="/">About me</Navlink>
        <Navlink href="/technologies">Technologies I like</Navlink>
        <Navlink href="/contact">How to reach me</Navlink>
    </div>
</nav>
