<script lang="ts">
    import SeoHead from '$lib/components/seoHead.svelte';
    import IconRow from '$lib/components/icons/iconRow.svelte';
    import SvgIcon from '$lib/components/icons/svgIcon.svelte';
</script>

<SeoHead
    title="Tools & Others"
    description="Here are some tools and other things I use."
    path="/technologies/tools"
/>

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
