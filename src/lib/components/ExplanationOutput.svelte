<!-- src/lib/components/ExplanationOutput.svelte -->
<script lang="ts">
  import { derived } from 'svelte/store';
  import { regexInput, currentFlavor, parsedExplanation, isCatastrophic } from '$lib/stores/regexStore';

  const explanation = derived(
    [regexInput, currentFlavor, parsedExplanation],
    ([$input, $flavor, $parsed]) => {
      if (!$input) return { summary: '', breakdown: [] };
      return $parsed;
    }
  );
</script>

<div class="mt-5">
  {#if $explanation.summary}
    <div class="card border-primary mb-4">
      <div class="card-header bg-primary text-white">
        <h4 class="mb-0">Explanation</h4>
      </div>
      <div class="card-body">
        <p class="lead">{ $explanation.summary }</p>
        <hr />
        <h6>Token-by-token breakdown:</h6>
        <table class="table table-sm table-hover">
          <thead>
            <tr>
              <th>Part</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            {#each $explanation.breakdown as item}
              <tr>
                <td><code class="bg-light px-2 py-1 rounded">{item.token}</code></td>
                <td>{item.meaning}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  {:else if $regexInput}
    <div class="alert alert-warning">
      <strong>Error parsing regex or unsupported pattern</strong> for {$currentFlavor} flavor. Check console for details.
    </div>
  {:else}
    <div class="text-center text-muted py-5">
      <i class="bi bi-regex display-1"></i>
      <p class="lead mt-3">Type or paste a regex above to see its explanation</p>
    </div>
  {/if}
</div>