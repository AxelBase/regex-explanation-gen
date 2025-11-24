// src/lib/utils/parser.ts
import type { Explanation } from '$lib/types';

const simpleExplanations: Record<string, string> = {
  '^': 'Start of string/line',
  '$': 'End of string/line',
  '.': 'Any character except newline',
  '\\d': 'Digit (0-9)',
  '\\D': 'Non-digit',
  '\\w': 'Word character (a-zA-Z0-9_)',
  '\\W': 'Non-word character',
  '\\s': 'Whitespace',
  '\\S': 'Non-whitespace',
  '*': 'Zero or more',
  '+': 'One or more',
  '?': 'Zero or one',
  '|': 'Alternation (OR)',
  '(': 'Start capturing group',
  ')': 'End capturing group',
  '(?:': 'Start non-capturing group',
  '\\b': 'Word boundary',
  '\\B': 'Non-word boundary',
};

export async function parseRegex(
  pattern: string,
  flavor: string,
  onProgress: (percent: number) => void = () => {}
): Promise<Explanation> {
  const breakdown: { token: string; meaning: string }[] = [];
  let i = 0;

  while (i < pattern.length) {
    let token = '';
    let meaning = '';

    // Handle escaped characters
    if (pattern[i] === '\\') {
      token = pattern.slice(i, i + 2);
      i += 2;
      meaning = simpleExplanations[token] || `Escaped character: ${token[1]}`;
    }
    // Handle quantifiers {n}, {n,}, {n,m}
    else if (pattern[i] === '{') {
      const end = pattern.slice(i).match(/^{(\d+)(?:,(\d*))?}/);
      if (end) {
        const [full, min, max] = end;
        token = full;
        i += full.length;
        if (max === undefined || max === '') meaning = `Exactly ${min} times`;
        else if (max === '') meaning = `At least ${min} times`;
        else meaning = `Between ${min} and ${max} times`;
      } else {
        token = '{';
        i++;
        meaning = '{ (special character – unclosed quantifier)';
      }
    }
    // Handle character classes [abc] [^abc] [a-z]
    else if (pattern[i] === '[') {
      const end = pattern.indexOf(']', i + 1);
      token = end > -1 ? pattern.slice(i, end + 1) : pattern.slice(i);
      i = end > -1 ? end + 1 : pattern.length;
      meaning = token.startsWith('[^') ? 'Any character except these' : 'Any one of these characters';
    }
    // Handle known metacharacters
    else if ('^$.*+?|()'.includes(pattern[i])) {
      token = pattern[i];
      i++;
      meaning = simpleExplanations[token] || `${token} (special character)`;
    }
    // Handle non-capturing group start
    else if (pattern.slice(i, i + 3) === '(?:') {
      token = '(?:';
      i += 3;
      meaning = 'Start non-capturing group';
    }
    // Default: literal character
    else {
      token = pattern[i];
      i++;
      meaning = `Literal character: "${token}"`;
    }

    breakdown.push({ token, meaning });

    // Progress update
    if (i % 100 === 0 || i === pattern.length) {
      onProgress(Math.min(100, (i / pattern.length) * 100));
      await new Promise(r => setTimeout(r, 0));
    }
  }

  // Generate summary
  const summary =
    breakdown.length > 10
      ? `Matches patterns with ${breakdown.slice(0, 5).map(b => b.meaning.toLowerCase()).join(', ')} and more...`
      : breakdown.map(b => b.meaning.toLowerCase()).join(' → ');

  return { summary, breakdown };
}