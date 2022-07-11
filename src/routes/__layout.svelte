<script lang="ts">
    import '$lib/styles/app.css';
    import PageHeader from '$lib/components/page_header.svelte'
    import PageFooter from '$lib/components/page_footer.svelte'
</script>

<div class="container mx-auto px-1 pt-1">
    <PageHeader />

    <main class="mt-4">
        <div class="bordered-content bg-white p-4">
            <slot />
        </div>
    </main>

    <PageFooter />
</div>
