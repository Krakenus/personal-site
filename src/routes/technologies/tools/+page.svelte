<script lang="ts">
    import IconRow from '$lib/components/icons/iconRow.svelte';
    import SvgIcon from '$lib/components/icons/svgIcon.svelte';
</script>

<svelte:head>
    <title>Milan Vlasák | Tools & Others</title>
    <meta property="og:title" content="Tools & Others">
    <meta name="description" property="og:description" content="Here are some tools and other things I use.">

    <link rel="canonical" href="https://milanvlasak.cz/technologies/tools" />
</svelte:head>

<h1>Tools & Others</h1>

<p class="mb-2">Here are some tools and other things I use.</p>

<IconRow>
    <SvgIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original-wordmark.svg" title="PyCharm" />
    <SvgIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" title="Git" />
    <SvgIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" title="GitHub" />
    <SvgIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original-wordmark.svg" title="GitLab" />
</IconRow>

<p class="mb-2">Sometimes I play with IoT stuff and programmable electronics</p>

<IconRow>
    <SvgIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original-wordmark.svg" title="Arduino" />
    <SvgIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original-wordmark.svg" title="Raspberry Pi" />
</IconRow>
