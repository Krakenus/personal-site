<script lang="ts">
    export let heading: string;
    export let href: string
    export let offset: number;

    let prefixClass = '';
    if(offset == 2) {
        prefixClass = 'md:w-1/4';
    } else if(offset == 3) {
        prefixClass = 'md:w-2/4';
    } else if(offset == 4) {
        prefixClass = 'md:w-3/4';
    }
</script>

<div class="flex flex-col md:flex-row w-full my-2">
    <div class={prefixClass}></div>
    <div class="rounded-md bg-gray-50 dark:bg-gray-600 p-4 my-2 w-full md:w-1/4">
        <a {href}>
            <div class="">
                <h2>{heading}</h2>
                <div>
                    <slot />
                </div>
            </div>
        </a>
    </div>
</div>
