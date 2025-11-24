<!-- src/lib/components/FlavorSelector.svelte -->
<script lang="ts">
  import { currentFlavor } from '$lib/stores/regexStore';

  const flavors = [
    { value: 'javascript', label: 'JavaScript (ECMAScript)' },
    { value: 'python', label: 'Python' },
    { value: 'pcre', label: 'PCRE (PHP, etc.)' },
    { value: 'java', label: 'Java' }
  ];
</script>

<div class="mb-4">
  <label for="flavor-select" class="form-label fw-medium">Regex Flavor</label>
  <select
    id="flavor-select"
    class="form-select form-select-lg"
    bind:value={$currentFlavor}
  >
    {#each flavors as f}
      <option value={f.value}>{f.label}</option>
    {/each}
  </select>
</div>