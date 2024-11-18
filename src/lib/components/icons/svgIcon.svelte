<script lang="ts">
    interface Props {
        src: string;
        title: string;
    }

    let { src, title }: Props = $props();
</script>

<div>
    <img class="w-24 sm:w-32" {src} alt={title} {title}>
</div>
