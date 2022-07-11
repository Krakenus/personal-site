<script lang="ts">
    import {page} from '$app/stores';

    export let href: string;
</script>

<div class="bordered-content px-4 my-2">
    <a {href}
       class:text-black={$page.url.pathname === href}
       class:text-gray-600={$page.url.pathname !== href}
       class:dark:text-white={$page.url.pathname === href}
       class:dark:text-gray-200={$page.url.pathname !== href}
       class="no-underline hover:text-black dark:hover:text-white"
    ><slot /></a>
</div>
