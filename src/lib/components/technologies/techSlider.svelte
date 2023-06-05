<script lang="ts">
    export let heading: string;
    export let href: string
    export let offset: number;

    let prefixClass = '';
    if(offset == 2) {
        prefixClass = 'lg:w-1/4';
    } else if(offset == 3) {
        prefixClass = 'lg:w-2/4';
    } else if(offset == 4) {
        prefixClass = 'lg:w-3/4';
    }
</script>

<div class="flex flex-col lg:flex-row w-full my-2">
    <div class={prefixClass}></div>
    <div class="bordered-content bg-neutral-200 dark:bg-gray-600 p-4 my-2 w-full lg:w-1/4">
        <a {href}>
            <div>
                <h2>{heading}</h2>
                <div class="text-right">
                    <slot />
                </div>
            </div>
        </a>
    </div>
</div>
