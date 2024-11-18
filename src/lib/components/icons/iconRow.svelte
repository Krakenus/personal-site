<script lang="ts">
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>

<div class="bordered-content flex flex-row flex-wrap justify-evenly justify-items-center bg-white dark:bg-gray-600 my-2 py-4">
    {@render children?.()}
</div>
