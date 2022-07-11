<script lang="ts">
    import {page} from '$app/stores';

    export let href: string;
</script>

<div class="bordered-content px-4 my-2">
    <a {href}
       class:text-black={$page.url.pathname === href}
       class:text-gray-600={$page.url.pathname !== href}
       class="no-underline hover:text-black"
    ><slot /></a>
</div>
