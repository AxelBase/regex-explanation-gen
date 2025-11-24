// src/lib/types.ts
export type RegexFlavor = 'javascript' | 'python' | 'pcre' | 'java';

export interface Explanation {
  summary: string;
  breakdown: {
    token: string;
    meaning: string;
  }[];
}