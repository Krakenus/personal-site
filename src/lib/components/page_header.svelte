<script lang="ts">
    import avatar from '$lib/assets/avatar.jpg';
</script>

<div class="my-2">
    <img src="{avatar}" alt="avatar" class="inline rounded-full border-8 border-gray-300 w-56">
</div>
<p class="font-semibold">Welcome to my personal website!</p>
<nav>
    <p>Here you can find:</p>
    <div class="flex flex-col leading-loose max-w-3xl mx-auto my-2 sm:flex-row sm:justify-around">
        <div><a href="/">Something about me</a></div>
        <div><a href="/technologies">Technologies I like and use</a></div>
        <div><a href="/contact">Ways how to reach me</a></div>
    </div>
</nav>
