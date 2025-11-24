<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>How This Regex Explanation Generator Works • Behind the Scenes</title>
  <meta name="description" content="Explore the technical architecture of this 100% client-side regex explanation tool built with SvelteKit and Bootstrap." />
  <meta property="og:title" content="How This Regex Explanation Generator Works" />
  <meta property="og:description" content="A deep dive into the open-source, privacy-first regex parser that runs entirely in your browser." />
  <meta property="og:url" content="{base}/blog/posts/post2" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>How This Regex Tool Works</p>
  </div>

  <article class="prose">
    <h1>How This Regex Explanation Generator Works</h1>
    <p class="post-meta">Published: November 24, 2025</p>

    <p>This isn’t just another regex tester. It’s a <strong>real-time explanation engine</strong> that runs 100% in your browser — with zero backend, zero tracking, and zero data collection.</p>

    <h2>Client-Side Parsing Engine</h2>
    <p>Every character you type is parsed instantly using a custom TypeScript regex tokenizer. It breaks down:</p>
    <ul>
      <li>Anchors (<code>^</code>, <code>$</code>)</li>
      <li>Quantifiers (<code>*</code>, <code>+</code>, <code>?</code>, <code>&#123;n,m&#125;</code>)</li>
      <li>Character classes (<code>[a-z]</code>, <code>\d</code>)</li>
      <li>Groups and alternations</li>
    </ul>

    <p>Each token becomes a human-readable explanation — no external APIs, no RegExp constructor tricks.</p>

    <h2>Live Updates & Progress</h2>
    <p>Thanks to Svelte’s reactivity and async parsing with progress callbacks, even 10,000-character patterns are handled smoothly with a live progress bar.</p>

    <h2>Catastrophic Backtracking Detection</h2>
    <p>Dangerous patterns like <code>(a+)+</code> or <code>(.*)*</code> are detected instantly and flagged with a red warning — preventing browser hangs before they happen.</p>

    <h2>Flavor-Aware Parsing</h2>
    <p>Switch between JavaScript, Python, PCRE, and Java — see how the same pattern behaves differently across engines.</p>

    <h2>Share via Link</h2>
    <p>Click “Share” → your regex is Base64-encoded in the URL. Open it anywhere — it auto-loads. No server. No storage. Pure privacy.</p>

    <h2>Open Source & Deployable</h2>
    <p>Built with SvelteKit + adapter-static. Deploy to GitHub Pages in one command. Fork it, customize it, own it.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Why not use existing libraries?</summary>
      <p>Most are heavy, server-dependent, or don’t explain. This is lightweight and educational.</p>
    </details>
    <details>
      <summary>Can it handle very long regexes?</summary>
      <p>Yes — with smooth progress and no freezes.</p>
    </details>

    <p class="italic-note">Privacy-first. Developer-first. Forever free.</p>
  </article>
</div>

<style>
  .post-layout { max-width: 800px; padding: 2rem 1rem 4rem; }
  .breadcrumbs { display: flex; align-items: center; gap: .5rem; margin-bottom: 1.5rem; font-size: .9rem; color: var(--text-secondary); }
  .breadcrumbs a { color: var(--accent-secondary); }
  .breadcrumbs a:hover { text-decoration: underline; }

  .prose { line-height: 1.8; }
  .prose .post-meta { color: var(--text-secondary); font-size: .9rem; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; }
  .prose h1, .prose h2 { color: var(--accent-secondary); }
  .prose h1 { font-size: 2.5rem; margin-bottom: .5rem; }
  .prose h2 { margin-top: 2.5rem; border-bottom: 1px solid var(--secondary-bg); padding-bottom: .5rem; }

  .prose p, .prose ul li { color: var(--text-primary); }
  .prose ul { list-style-type: 'Right Arrow '; padding-left: 1.5rem; }
  .prose ul li::marker { color: var(--accent-primary); }
  .prose ul li { padding-left: .5rem; margin-bottom: .5rem; }

  .prose details { background: var(--secondary-bg); border: 1px solid var(--border-color); border-radius: 6px; padding: 1rem; margin-bottom: 1rem; }
  .prose details[open] { background-color: var(--card-bg); }
  .prose summary { cursor: pointer; font-weight: 600; color: var(--accent-secondary); list-style: none; }
  .prose summary::-webkit-details-marker { display: none; }
  .prose summary::before { content: '+'; margin-right: .75rem; color: var(--accent-primary); font-weight: bold; transition: transform .2s; }
  .prose details[open] summary::before { transform: rotate(45deg); }
  .prose details p { margin-top: 1rem; padding-left: 1.5rem; border-left: 2px solid var(--accent-primary); color: var(--text-secondary); }
  .prose .italic-note { font-style: italic; color: var(--text-secondary); text-align: center; margin-top: 3rem; }
</style>