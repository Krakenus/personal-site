<script lang="ts">
    import SeoHead from '$lib/components/seoHead.svelte';
    import TechSlider from '$lib/components/technologies/techSlider.svelte';
</script>

<SeoHead
    title="My tech stack"
    description="List of most of the technologies I use. The list is not exhaustive but it covers my usual stack."
    path="/technologies"
/>

<h1>My tech stack</h1>

<p class="mb-2">Here you can find most of the technologies I use. The list is not exhaustive but it covers my usual stack.</p>

<TechSlider heading="Backend" href="/technologies/backend" order={1}>
    Make home for data and logic.
</TechSlider>

<TechSlider heading="Frontend" href="/technologies/frontend" order={2}>
    Let's give it a face.
</TechSlider>

<TechSlider heading="Sys & DevOps" href="/technologies/devops" order={3}>
    It has to run somewhere.
</TechSlider>

<TechSlider heading="Tools & Others" href="/technologies/tools" order={4}>
    Using the right gear.
</TechSlider>
