<!-- src/lib/components/ExampleGallery.svelte -->
<script lang="ts">
  import { regexInput } from '$lib/stores/regexStore';
  import { examples } from '$lib/utils/examples';

  function loadExample(pattern: string) {
    regexInput.set(pattern);
  }
</script>

<div class="mb-5">
  <h5 class="mb-3">Quick Examples</h5>
  <div class="row g-3">
    {#each examples as ex}
      <div class="col-md-6 col-lg-4">
        <button
          class="btn btn-outline-primary w-100 text-start py-3"
          on:click={() => loadExample(ex.pattern)}
        >
          <div class="fw-bold">{ex.name}</div>
          <code class="small text-muted d-block text-truncate">{ex.pattern}</code>
        </button>
      </div>
    {/each}
  </div>
</div>