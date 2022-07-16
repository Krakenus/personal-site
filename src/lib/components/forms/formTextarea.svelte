<script lang="ts">
    export let name: string;
    export let label: string;
    export let placeholder: string | undefined;
    export let required = false;
</script>

<div class="my-4">
  <label for={name} class="block text-sm font-bold">{label}</label>
  <textarea rows="8" id={name} {name} {placeholder} {required}></textarea>
</div>
