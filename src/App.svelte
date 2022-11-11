<svelte:options tag="cool-page" />
<svelte:element this="style">{@html css}</svelte:element>
<script lang="ts">
  import Counter from "./lib/Counter.svelte";
  /**@ts-ignore*/
  import css from "./assets/app.postcss";
</script>

<div class="font-sans">
  Hello!
  <Counter/>
</div>

<style>

</style>
