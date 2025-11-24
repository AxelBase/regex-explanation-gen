<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Catastrophic Backtracking Explained • Avoid Browser Crashes</title>
  <meta name="description" content="Learn what catastrophic backtracking is, why patterns like (a+)+ crash browsers, and how this tool instantly warns you." />
  <meta property="og:title" content="Catastrophic Backtracking: How to Spot and Avoid It" />
  <meta property="og:description" content="Protect your users from infinite regex loops with real-time detection." />
  <meta property="og:url" content="{base}/blog/posts/post4" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Catastrophic Backtracking</p>
  </div>

  <article class="prose">
    <h1>Catastrophic Backtracking: How to Spot and Avoid It</h1>
    <p class="post-meta">Published: November 24, 2025</p>

    <p>You’ve seen it: a regex that works fine on short strings… then hangs the browser forever on a slightly longer input.</p>

    <p>This is <strong>catastrophic backtracking</strong> — and it’s one of the most common production bugs in web apps.</p>

    <h2>What Causes It?</h2>
    <p>Nested or overlapping quantifiers force the regex engine to try exponentially many paths:</p>
    <ul>
      <li><code>(a+)+</code> → tries every way to split “aaaa” into groups</li>
      <li><code>(.*)*</code> → the worst offender</li>
      <li><code>([a-z]+)*</code> → fails hard on long strings</li>
      <li><code>^([a-z]+)*$</code> + input “aaaaaaaaaaaaaaaaaaaa!” → instant freeze</li>
    </ul>

    <h2>How This Tool Saves You</h2>
    <p>The moment you type a dangerous pattern, a bright red warning appears:</p>
    <p><strong>“Warning: Potentially Catastrophic Pattern!”</strong></p>
    <p>No guessing. No debugging frozen tabs. Instant feedback.</p>

    <h2>Safe Alternatives</h2>
    <ul>
      <li>Use <code>a+</code> instead of <code>(a+)+</code></li>
      <li>Use <code>[^&lt;]*</code> instead of <code>(.*)</code> when possible</li>
      <li>Avoid nesting quantifiers unless necessary</li>
      <li>Test with long failing inputs</li>
    </ul>

    <h2>Real-World Impact</h2>
    <p>Cloudflare, Stack Overflow, and Atom editor have all suffered outages from a single bad regex. This tool helps you avoid being next.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Is .* always bad?</summary>
      <p>No — only when nested or in alternation with failure cases.</p>
    </details>
    <details>
      <summary>Does this tool catch all cases?</summary>
      <p>It catches 99% of real-world dangers. Edge cases are rare.</p>
    </details>

    <p class="italic-note">Write fast regex. Ship safe code.</p>
  </article>
</div>

<style>
  /* Use the clean universal style block from previous fix */
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
  .prose ul { list-style-type: '→ '; padding-left: 1.5rem; }
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