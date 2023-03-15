<script lang="ts">
    export let heading: string;
    export let href: string
</script>

<a {href}>
    <div class="border dark:border-0 rounded-md p-2 my-2">
        <h2>{heading}</h2>
        <div>
            <slot />
        </div>
    </div>
</a>
