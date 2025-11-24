<!-- src/lib/components/LoadingSpinner.svelte -->
<script lang="ts">
  export let progress: number = 0;
  export let inputLength: number = 0;

  // Rough ETA based on length (empirical: ~1ms per char max)
  let etaMessage = '';
  $: {
    if (inputLength > 5000) etaMessage = 'may take up to 10 seconds';
    else if (inputLength > 1000) etaMessage = 'may take up to 3 seconds';
    else etaMessage = '';
  }
</script>

<div class="text-center py-5">
  <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
    <span class="visually-hidden">Parsing regex...</span>
  </div>
  <div class="progress mt-3" style="height: 20px;">
    <div class="progress-bar bg-success" role="progressbar" style="width: {progress}%">{Math.round(progress)}%</div>
  </div>
  <p class="mt-3 text-muted">
    Parsing {inputLength > 500 ? 'large ' : ''}regex ({inputLength} chars) {etaMessage ? ` – ${etaMessage}` : '...'}
  </p>
</div>