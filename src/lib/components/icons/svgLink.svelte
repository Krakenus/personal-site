<script lang="ts">
    export let href: string;
    export let src: string;
    export let title: string;
</script>

<div>
    <a {href}>
        <img class="w-24 sm:w-32" {src} alt={title} {title}>
    </a>
</div>
