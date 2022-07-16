<script lang="ts">
    import SvgLink from '$lib/components/icons/svgLink.svelte';
    import IconRow from '$lib/components/icons/iconRow.svelte';
    import ContactForm from '$lib/components/forms/contactForm.svelte';
</script>

<svelte:head>
    <title>How to reach me</title>
</svelte:head>


<h1>How to reach me</h1>

<ContactForm />

<IconRow>
    <SvgLink href="https://github.com/Krakenus"
             title="GitHub"
             src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
    <SvgLink href="https://www.linkedin.com/in/milan-vlasak-cz"
             title="LinkedIn"
             src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original-wordmark.svg" />
    <SvgLink href="https://twitter.com/Krakenus"
             title="Twitter"
             src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" />
</IconRow>
