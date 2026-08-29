<script lang="ts">
    import '$lib/styles/app.css';
    import PageHeader from '$lib/components/pageHeader.svelte'
    import PageFooter from '$lib/components/pageFooter.svelte'
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>

<div class="container mx-auto px-1 pt-1">
    <PageHeader />

    <main class="mt-4">
        <!-- dark:bg-gray-800 restates .bordered-content's dark background. Under Tailwind 3
             the unlayered .bordered-content rule outranked bg-neutral-50 on specificity;
             under Tailwind 4 cascade layers, the utility wins, so it must be explicit. -->
        <div class="bordered-content bg-neutral-50 dark:bg-gray-800 p-4">
            {@render children?.()}
        </div>
    </main>

    <PageFooter />
</div>
