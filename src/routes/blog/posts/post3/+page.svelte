<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>10 Most Useful Regex Patterns in 2025 • With Explanations</title>
  <meta name="description" content="The ultimate cheat sheet: email, URL, phone, date, password, UUID, and more — all fully explained with this tool." />
  <meta property="og:title" content="10 Most Useful Regex Patterns in 2025" />
  <meta property="og:description" content="Copy-paste ready regex patterns with human-readable explanations for real-world use." />
  <meta property="og:url" content="{base}/blog/posts/post3" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>10 Most Useful Regex Patterns</p>
  </div>

  <article class="prose">
    <h1>10 Most Useful Regex Patterns in 2025</h1>
    <p class="post-meta">Published: November 24, 2025</p>

    <p>Here are the patterns every developer uses — now with instant explanations built in.</p>

    <h2>1. Email Address</h2>
    <p><code>^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]&#123;2,}&#125;)$</code></p>
    <p>Matches 99.9% of real emails. Robust but readable.</p>

    <h2>2. URL (http/https)</h2>
    <p><code>^(https?:\/\/)[\w.-]+(\.[a-z]&#123;2,}&#125;)(\/.*)?$</code></p>
    <p>Simple, effective, and safe.</p>

    <h2>3. Strong Password</h2>
    <p><code>^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&amp;])[A-Za-z\d@$!%*?&amp;]&#123;8,}&#125;$</code></p>
    <p>Enforces uppercase, lowercase, number, and symbol.</p>

    <h2>4. Date (YYYY-MM-DD)</h2>
    <p><code>^\d&#123;4&#125;-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01])$</code></p>
    <p>Validates real dates (no Feb 30).</p>

    <h2>5. UUID v4</h2>
    <p><code>^[0-9a-f]&#123;8&#125;-[0-9a-f]&#123;4&#125;-4[0-9a-f]&#123;3&#125;-[89ab][0-9a-f]&#123;3&#125;-[0-9a-f]&#123;12&#125;$</code></p>
    <p>Exact match for standard UUIDs.</p>

    <h2>And 5 More…</h2>
    <p>All available in the tool’s “Quick Examples” gallery. Click any to load instantly.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Are these patterns perfect?</summary>
      <p>No regex is. These are battle-tested and practical.</p>
    </details>
    <details>
      <summary>Can I modify them?</summary>
      <p>Yes — and this tool shows you exactly what changes do.</p>
    </details>

    <p class="italic-note">Stop copying blind patterns. Understand them.</p>
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

  .prose p{ color: var(--text-primary); }

  .prose details { background: var(--secondary-bg); border: 1px solid var(--border-color); border-radius: 6px; padding: 1rem; margin-bottom: 1rem; }
  .prose details[open] { background-color: var(--card-bg); }
  .prose summary { cursor: pointer; font-weight: 600; color: var(--accent-secondary); list-style: none; }
  .prose summary::-webkit-details-marker { display: none; }
  .prose summary::before { content: '+'; margin-right: .75rem; color: var(--accent-primary); font-weight: bold; transition: transform .2s; }
  .prose details[open] summary::before { transform: rotate(45deg); }
  .prose details p { margin-top: 1rem; padding-left: 1.5rem; border-left: 2px solid var(--accent-primary); color: var(--text-secondary); }
  .prose .italic-note { font-style: italic; color: var(--text-secondary); text-align: center; margin-top: 3rem; }
</style>