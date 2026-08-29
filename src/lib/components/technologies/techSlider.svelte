<script lang="ts">
    import { resolve } from '$app/paths';
    import type { Pathname } from '$app/types';

    interface Props {
        heading: string;
        href: Pathname;
        order: number;
        children?: import('svelte').Snippet;
    }

    let {
        heading,
        href,
        order,
        children
    }: Props = $props();

    const prefixClass = $derived(
        order === 1 ? 'lg:w-1/4' :
        order === 2 ? 'lg:w-2/4' :
        order === 3 ? 'lg:w-3/4' :
        'lg:w-full'
    );
</script>

<div class="flex flex-col lg:flex-row w-full my-2">
    <div class="bordered-content bg-neutral-200 dark:bg-gray-600 p-4 my-2 w-full {prefixClass}">
        <a href={resolve(href)}>
            <div>
                <h2>{heading}</h2>
                <div class="xl:text-right">
                    {@render children?.()}
                </div>
            </div>
        </a>
    </div>
</div>
