<script lang="ts">
    interface Props {
        href: string;
        src: string;
        title: string;
    }

    let { href, src, title }: Props = $props();
</script>

<div>
    <a {href} target="_blank" rel="external noreferrer">
        <img class="w-24 sm:w-32" {src} alt={title} {title}>
    </a>
</div>
