<script lang="ts">
    import IconRow from '$lib/components/icons/iconRow.svelte';
    import SvgIcon from '$lib/components/icons/svgIcon.svelte';
</script>

<svelte:head>
    <title>Milan Vlasák | Technologies I like</title>
</svelte:head>

<h1>Technologies I like</h1>

<p>Here you can find most of the technologies I use. The list is not exhaustive but it covers my usual stack.</p>

<h2 class="my-6">Backend</h2>
<IconRow>
    <SvgIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" title="Python" />
    <SvgIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg" title="Django" />
    <SvgIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original-wordmark.svg" title="FastAPI" />
    <SvgIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" title="PostgreSQL" />
    <SvgIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" title="MongoDB" />
    <SvgIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg" title="GraphQL" />
</IconRow>

<h2 class="my-6">Frontend</h2>
<IconRow>
    <SvgIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" title="Typescript" />
    <SvgIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" title="React" />
    <SvgIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original-wordmark.svg" title="Svelte" />
    <SvgIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" title="Tailwindcss" />
    <SvgIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" title="Bootstrap" />
</IconRow>

<h2 class="my-6">Sys & DevOps</h2>
<IconRow>
    <SvgIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" title="Linux" />
    <SvgIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" title="Bash" />
    <SvgIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" title="Nginx" />
    <SvgIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original-wordmark.svg" title="Ansible" />
    <SvgIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" title="Docker" />
</IconRow>

<h2 class="my-6">Tools and Others</h2>
<IconRow>
    <SvgIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original-wordmark.svg" title="Pycharm" />
    <SvgIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" title="Git" />
    <SvgIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" title="GitHub" />
    <SvgIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" title="VS Code" />
    <SvgIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original-wordmark.svg" title="Arduino" />
</IconRow>


<div class="px-1 pt-4 text-right">
    <small>All icons above are from awesome <a class="underline" href="https://devicon.dev/">Devicon</a> project. Thanks for them!</small>
</div>
