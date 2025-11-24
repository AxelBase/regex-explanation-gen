<!-- src/lib/components/RegexInput.svelte -->
<script lang="ts">
  import { regexInput } from '$lib/stores/regexStore';

  // Manual debounce for typing
  let timeout: NodeJS.Timeout;
  function debouncedUpdate(value: string) {
    try {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        regexInput.set(value);
      }, 300);
    } catch (e) {
      console.error('Debounce error in RegexInput:', e);
    }
  }

  // Instant on paste/drop
  function handleInstant(e: Event) {
    try {
      const value = (e.target as HTMLTextAreaElement).value;
      regexInput.set(value);
    } catch (e) {
      console.error('Instant update error in RegexInput:', e);
    }
  }

  // Debounced on keyup
  function handleKeyUp(e: KeyboardEvent) {
    try {
      const value = (e.target as HTMLTextAreaElement).value;
      debouncedUpdate(value);
    } catch (e) {
      console.error('KeyUp error in RegexInput:', e);
    }
  }
</script>

<div class="mb-4">
  <label for="regex-input" class="form-label fs-5 fw-medium">
    Enter Regular Expression
  </label>
  <textarea
    id="regex-input"
    class="form-control form-control-lg font-monospace"
    rows="6"
    spellcheck="false"
    autocomplete="off"
    placeholder="e.g. ^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]&#123;2,&#125;)$"
    bind:value={$regexInput}
    on:paste={handleInstant}
    on:drop={handleInstant}
    on:keyup={handleKeyUp}
  ></textarea>
  <div class="form-text text-muted">
    Supports JavaScript, Python, PCRE, and Java flavors • Live explanation below
  </div>
</div>