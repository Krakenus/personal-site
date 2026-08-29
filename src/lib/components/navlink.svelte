<script lang="ts">
    import { resolve } from '$app/paths';
    import { page } from '$app/state';
    import type { Pathname } from '$app/types';

    interface Props {
        href: Pathname;
        children?: import('svelte').Snippet;
    }

    let { href, children }: Props = $props();

    // Compare on the absolute `href`, not on resolve()'s return value: with
    // `paths.relative` (the SvelteKit default) both resolve() and `base` are
    // relative to the current page ("./"), while page.url.pathname is absolute.
    const isActive = $derived(page.url.pathname === href);
</script>

<div class="bordered-content px-4 my-2">
    <a href={resolve(href)}
       class:text-black={isActive}
       class:text-gray-600={!isActive}
       class:dark:text-white={isActive}
       class:dark:text-gray-200={!isActive}
       class="no-underline hover:text-black dark:hover:text-white"
    >{@render children?.()}</a>
</div>
