<script lang="ts">
    export let src: string;
    export let title: string;
</script>

<div>
    <img class="w-24 sm:w-32" {src} alt={title} {title}>
</div>
