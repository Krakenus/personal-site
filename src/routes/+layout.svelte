<script lang="ts">
    import '$lib/styles/app.css';
    import PageHeader from '$lib/components/pageHeader.svelte'
    import PageFooter from '$lib/components/pageFooter.svelte'
</script>

<div class="container mx-auto px-1 pt-1">
    <PageHeader />

    <main class="mt-4">
        <div class="bordered-content bg-neutral-50 p-4">
            <slot />
        </div>
    </main>

    <PageFooter />
</div>
