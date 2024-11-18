<script lang="ts">
    interface Props {
        heading: string;
        href: string;
        order: number;
        children?: import('svelte').Snippet;
    }

    let {
        heading,
        href,
        order,
        children
    }: Props = $props();

    let prefixClass = $state('lg:w-full');
    if(order == 1) {
        prefixClass = 'lg:w-1/4';
    } else if(order == 2) {
        prefixClass = 'lg:w-2/4';
    } else if(order == 3) {
        prefixClass = 'lg:w-3/4';
    }
</script>

<div class="flex flex-col lg:flex-row w-full my-2">
    <div class="bordered-content bg-neutral-200 dark:bg-gray-600 p-4 my-2 w-full {prefixClass}">
        <a {href}>
            <div>
                <h2>{heading}</h2>
                <div class="xl:text-right">
                    {@render children?.()}
                </div>
            </div>
        </a>
    </div>
</div>
