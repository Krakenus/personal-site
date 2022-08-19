<script lang="ts">
    export let name: string;
    export let value: any;
    export let label: string;
    export let type: 'text' | 'email';
    export let placeholder: string | undefined;
    export let required = false;
</script>

<label class="block my-4">
  <span class:required class="block text-sm font-bold ml-1">
    {label}
  </span>
  <input id={name} {type} {name} {placeholder} {required} bind:value />
</label>
