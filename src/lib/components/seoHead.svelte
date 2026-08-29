<script lang="ts">
    import type { Pathname } from '$app/types';
    import {
        OG_IMAGE,
        OG_IMAGE_ALT,
        OG_IMAGE_HEIGHT,
        OG_IMAGE_WIDTH,
        SITE_NAME,
        SITE_URL
    } from '$lib/site';

    interface Props {
        /** Page title without the site name, e.g. "About me". */
        title: string;
        /** One or two sentences; shown as the body of the link preview. */
        description: string;
        /** Canonical route of this page. */
        path: Pathname;
    }

    let { title, description, path }: Props = $props();

    // Absolute. `resolve()` is deliberately not used here: with `paths.relative`
    // it returns a page-relative path, and og:url / rel=canonical must be absolute
    // for crawlers that fetch the page out of context.
    const url = $derived(path === '/' ? SITE_URL : `${SITE_URL}${path}`);
</script>

<svelte:head>
    <title>{SITE_NAME} | {title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={url} />

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={SITE_NAME} />
    <meta property="og:locale" content="en_US" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={OG_IMAGE} />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content={String(OG_IMAGE_WIDTH)} />
    <meta property="og:image:height" content={String(OG_IMAGE_HEIGHT)} />
    <meta property="og:image:alt" content={OG_IMAGE_ALT} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={OG_IMAGE} />
    <meta name="twitter:image:alt" content={OG_IMAGE_ALT} />
</svelte:head>
