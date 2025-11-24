<!-- src/lib/components/ActionButtons.svelte -->
<script lang="ts">
  import { regexInput, parsedExplanation } from '$lib/stores/regexStore';
  import { createShareUrl, readShareUrl } from '$lib/utils/shareUrl';
  import { onMount } from 'svelte';

  async function copyRegex() {
    await navigator.clipboard.writeText($regexInput);
    alert('Regex copied to clipboard!');
  }

  async function copyExplanation() {
    const text = $parsedExplanation.summary + '\n\n' +
      $parsedExplanation.breakdown.map(b => `${b.token} → ${b.meaning}`).join('\n');
    await navigator.clipboard.writeText(text);
    alert('Full explanation copied!');
  }

  function share() {
    const url = createShareUrl($regexInput);
    navigator.clipboard.writeText(url);
    alert('Shareable link copied to clipboard!\nPaste anywhere to share this regex.');
  }

  onMount(() => {
    const shared = readShareUrl();
    if (shared) {
      regexInput.set(shared);
      window.history.replaceState({}, '', window.location.pathname);
    }
  });
</script>

<div class="d-flex flex-wrap gap-3 mt-4">
  <button class="btn btn-success btn-lg" on:click={copyRegex}>
    <i class="bi bi-clipboard"></i> Copy Regex
  </button>
  <button class="btn btn-info btn-lg text-white" on:click={copyExplanation}>
    <i class="bi bi-journal-text"></i> Copy Explanation
  </button>
  <button class="btn btn-primary btn-lg" on:click={share}>
    <i class="bi bi-share-fill"></i> Share via Link
  </button>
</div>