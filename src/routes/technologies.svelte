<script lang="ts">
    import TechSection from '$lib/components/technologies/techSection.svelte';
    import TechIcon from '$lib/components/technologies/techIcon.svelte';
</script>

<svelte:head>
    <title>Milan Vlasák | Technologies I like</title>
</svelte:head>

<h1>Technologies I like</h1>

<p>Here you can find most of the technologies I use. The list is not exhaustive but it covers my usual stack.</p>

<h2 class="my-6">Backend</h2>
<TechSection>
    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" title="Python" />
    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg" title="Django" />
    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original-wordmark.svg" title="FastAPI" />
    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" title="PostgreSQL" />
    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" title="MongoDB" />
    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg" title="GraphQL" />
</TechSection>

<h2 class="my-6">Frontend</h2>
<TechSection>
    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" title="Typescript" />
    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" title="React" />
    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original-wordmark.svg" title="Svelte" />
    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" title="Tailwindcss" />
    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" title="Bootstrap" />
</TechSection>

<h2 class="my-6">DevOps, Tools and Others</h2>
<TechSection>
    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" title="Linux" />
    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original-wordmark.svg" title="Ansible" />
    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" title="Docker" />
    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original-wordmark.svg" title="Pycharm" />
    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" title="Git" />
    <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" title="GitHub" />
</TechSection>


<div class="px-1 pt-4 text-right">
    <small>All icons above are from awesome <a class="underline" href="https://devicon.dev/">Devicon</a> project. Thanks for them!</small>
</div>
