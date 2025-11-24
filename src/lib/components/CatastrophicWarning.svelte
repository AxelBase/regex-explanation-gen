<!-- src/lib/components/CatastrophicWarning.svelte -->
<script lang="ts">
  import { isCatastrophic } from '$lib/stores/regexStore';
</script>

{#if $isCatastrophic}
  <div class="alert alert-danger d-flex align-items-center" role="alert">
    <i class="bi bi-exclamation-triangle-fill fs-3 me-3"></i>
    <div>
      <strong>Warning: Potentially Catastrophic Pattern!</strong><br />
      This regex contains nested or overlapping quantifiers (e.g., <code>(a+)+</code>, <code>(.*)*</code>) 
      that can cause exponential backtracking and hang the browser on certain inputs.
    </div>
  </div>
{/if}