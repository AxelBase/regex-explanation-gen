// src/lib/stores/regexStore.ts
import { writable, derived, get } from 'svelte/store';
import { parseRegex } from '$lib/utils/parser';
import { detectCatastrophic } from '$lib/utils/detectCatastrophic';

export const regexInput = writable<string>('');
export const currentFlavor = writable<'javascript' | 'python' | 'pcre' | 'java'>('javascript');
export const isParsing = writable<boolean>(false);
export const parseProgress = writable<number>(0);

export const parsedExplanation = writable<Explanation>({ summary: '', breakdown: [] });

export const isCatastrophic = derived(regexInput, ($input) => {
  try {
    return detectCatastrophic($input);
  } catch (e) {
    console.error('Catastrophic detection error:', e);
    return false;
  }
});

// Async update on input/flavor change
let currentTask: { cancel: () => void } | null = null;

async function updateParse() {
  try {
    if (currentTask) currentTask.cancel();

    const task = { cancel: () => {} };
    currentTask = task;

    const input = get(regexInput);
    const flavor = get(currentFlavor);

    if (!input) {
      parsedExplanation.set({ summary: '', breakdown: [] });
      return;
    }

    isParsing.set(true);
    parseProgress.set(0);

    const result = await parseRegex(input, flavor, (p) => {
      if (task !== currentTask) return;
      parseProgress.set(p);
    });

    if (task === currentTask) {
      parsedExplanation.set(result);
    }
  } catch (e) {
    console.error('Update parse error in regexStore:', e);
    parsedExplanation.set({ summary: '', breakdown: [] });
  } finally {
    if (currentTask) {
      isParsing.set(false);
      parseProgress.set(100);
      currentTask = null;
    }
  }
}

// Trigger on changes
regexInput.subscribe(updateParse);
currentFlavor.subscribe(updateParse);