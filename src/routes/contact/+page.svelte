<script lang="ts">
    import SvgLink from '$lib/components/icons/svgLink.svelte';
    import IconRow from '$lib/components/icons/iconRow.svelte';
    import ContactForm from '$lib/components/forms/contactForm.svelte';
</script>

<svelte:head>
    <title>Milan Vlasák | How to reach me</title>
    <meta property="og:title" content="How to reach me">
    <meta name="description" property="og:description" content="Links to my GitHub and social networks.">

    <link rel="canonical" href="https://milanvlasak.cz/contact"/>
</svelte:head>


<h1>How to reach me</h1>

<p>
    Here you can find links to my GitHub where you can find some of my public code repositories.
    I'm not very active on social networks buy you can also visit my LinkedIn and Twitter.
</p>

<p class="mb-4">Or feel free to send me a message using the contact form bellow.</p>

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

<ContactForm />
