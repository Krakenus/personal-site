<script lang="ts">
    import '$lib/styles/app.css';
    import PageHeader from '$lib/components/page_header.svelte'
    import PageFooter from '$lib/components/page_footer.svelte'
</script>

<div class="container mx-auto px-1 pt-1">
    <header class="text-center mb-2">
        <PageHeader />
    </header>

    <main class="text-center sm:text-left mt-4">
        <slot />
    </main>

    <footer class="mt-1">
        <PageFooter />
    </footer>
</div>
