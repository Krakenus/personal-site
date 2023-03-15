<script lang="ts">
    import TechCard from '$lib/components/technologies/techCard.svelte';
</script>

<svelte:head>
    <title>Milan Vlasák | My tech stack</title>
    <meta property="og:title" content="My tech stack">
    <meta name="description" property="og:description" content="List of most of the technologies I use. The list is not exhaustive but it covers my usual stack.">

    <link rel="canonical" href="https://milanvlasak.cz/technologies"/>
</svelte:head>

<h1>My tech stack</h1>

<p>Here you can find most of the technologies I use. The list is not exhaustive but it covers my usual stack.</p>

<TechCard heading="Backend" href="/technologies/backend">
    Make home for data and logic.
</TechCard>

<TechCard heading="Frontend" href="/technologies/frontend">
    Let's give it a face.
</TechCard>

<TechCard heading="Sys & DevOps" href="/technologies/devops">
    It has to run somewhere.
</TechCard>

<TechCard heading="Tools & Others" href="/technologies/devops">
    Using the right gear.
</TechCard>
