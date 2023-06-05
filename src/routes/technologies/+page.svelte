<script lang="ts">
    import TechSlider from '$lib/components/technologies/techSlider.svelte';
</script>

<svelte:head>
    <title>Milan Vlasák | My tech stack</title>
    <meta property="og:title" content="My tech stack">
    <meta name="description" property="og:description" content="List of most of the technologies I use. The list is not exhaustive but it covers my usual stack.">

    <link rel="canonical" href="https://milanvlasak.cz/technologies"/>
</svelte:head>

<h1>My tech stack</h1>

<p>Here you can find most of the technologies I use. The list is not exhaustive but it covers my usual stack.</p>

<TechSlider heading="Backend" href="/technologies/backend" offset="1">
    Make home for data and logic.
</TechSlider>

<TechSlider heading="Frontend" href="/technologies/frontend" offset="2">
    Let's give it a face.
</TechSlider>

<TechSlider heading="Sys & DevOps" href="/technologies/devops" offset="3">
    It has to run somewhere.
</TechSlider>

<TechSlider heading="Tools & Others" href="/technologies/tools" offset="4">
    Using the right gear.
</TechSlider>
