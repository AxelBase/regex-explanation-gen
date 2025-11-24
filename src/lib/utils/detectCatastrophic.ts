// src/lib/utils/detectCatastrophic.ts
// Accurate detection of truly dangerous (exponential) patterns only
// Safe patterns like ^.*$ or .*\.txt are NOT flagged

const trulyDangerousPatterns = [
  // Classic nested quantifiers: (a+)+, (.*)+, ([a-z]+)*
  /\([^()]*[*+?][^()]*\)\s*[*+]/,        // (something quantified) followed by * or +
  
  // Multiple greedy dots in sequence: .*.*.* (very bad)
  /(\.\*|\.\*?|\.\+){2,}/,               // Two or more .* or .+ in a row

  // Overlapping quantifiers like a*+ or a++ (possessive, but still risky in repetition)
  /[+*]{2,}/,

  // Deeply nested groups with quantifiers
  /(\([^()]*\)\s*){3,}[*+]/,             // (((group)))* or similar
];

export function detectCatastrophic(pattern: string): boolean {
  if (!pattern || pattern.length < 10) return false;

  try {
    // Remove whitespace and comments for analysis
    const clean = pattern.replace(/\s|#.*/g, '');

    return trulyDangerousPatterns.some(regex => {
      try {
        return regex.test(clean);
      } catch {
        return false;
      }
    });
  } catch (e) {
    console.error('Catastrophic detection failed:', e);
    return false;
  }
}