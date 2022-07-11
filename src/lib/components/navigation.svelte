<script lang="ts">
    import Navlink from '$lib/components/navlink.svelte';
</script>

<nav>
    <div class="grid grid-cols-1 sm:grid-cols-3 leading-loose mx-auto my-2 justify-center justify-items-center content-center items-center">
        <Navlink href="/">About me</Navlink>
        <Navlink href="/technologies">Technologies I like</Navlink>
        <Navlink href="/contact">How to reach me</Navlink>
    </div>
</nav>
