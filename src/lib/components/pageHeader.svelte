<script lang="ts">
    import DarkModeSwitch from '$lib/components/darkModeSwitch.svelte';
    import Avatar from '$lib/components/avatar.svelte';
    import Navigation from '$lib/components/navigation.svelte';
</script>

<header class="text-center mb-2">
    <DarkModeSwitch />
    <Avatar />
    <p class="font-semibold">Welcome to my personal website!</p>
    <Navigation />
</header>
