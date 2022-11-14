<svelte:options tag="counter-that-counts" />
<script lang="ts">
  let count: number = 0;
  const increment = () => {
    count += 1;
    // example sending an event to the parent page
    window.dispatchEvent(
      new CustomEvent("component-hello", { detail: { foo: "bar" } })
    );
  };
</script>

<button on:click={increment} class="btn btn-primary">
  count is {count}
</button>
