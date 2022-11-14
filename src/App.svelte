<svelte:options tag="cool-page" />
<svelte:element this="style">{@html css}</svelte:element>
<script lang="ts">
  import Counter from "./lib/Counter.svelte";
  /**@ts-ignore*/
  import css from "./assets/app.postcss";

  // example exporting a function callable by the parent page
  export function foo(param: string) {
    console.log("received param: " + param)
  };
</script>

<div class="font-sans">
  Hello!
  <Counter/>
</div>

<style>

</style>
