<script lang="ts">
    import {page} from '$app/stores';

    export let href: string;
</script>

<div>
    <a {href} class:text-gray-600={$page.url.pathname === href} class="no-underline hover:text-gray-600"><slot /></a>
</div>
