<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Regex Flavors Explained • JavaScript vs Python vs PCRE vs Java</title>
  <meta name="description" content="Why the same regex works differently across languages — and how to test all flavors instantly with this tool." />
  <meta property="og:title" content="Regex Flavors Demystified" />
  <meta property="og:description" content="Understand the subtle (and not-so-subtle) differences between regex engines." />
  <meta property="og:url" content="{base}/blog/posts/post5" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Regex Flavors Demystified</p>
  </div>

  <article class="prose">
    <h1>Regex Flavors Demystified: JavaScript vs Python vs PCRE vs Java</h1>
    <p class="post-meta">Published: November 24, 2025</p>

    <p>Same pattern. Different language. Suddenly it breaks.</p>

    <p>Welcome to the world of <strong>regex flavors</strong>.</p>

    <h2>Major Differences</h2>
    <ul>
      <li><strong>JavaScript</strong>: No lookbehind, no named groups (until recently), limited Unicode</li>
      <li><strong>Python</strong>: Full lookbehind, named groups, verbose mode</li>
      <li><strong>PCRE</strong>: Conditional patterns, recursion, used in PHP/NGINX</li>
      <li><strong>Java</strong>: Possessive quantifiers, Unicode scripts</li>
    </ul>

    <h2>Real Example</h2>
    <p>Pattern: <code>(?&lt;=@)\w+</code> (lookbehind)</p>
    <ul>
      <li>JavaScript → Invalid</li>
      <li>Python/PCRE/Java → Matches domain in email</li>
    </ul>

    <h2>This Tool Lets You Switch Instantly</h2>
    <p>Use the dropdown → see how your pattern behaves across engines. No setup. No confusion.</p>

    <h2>Best Practices</h2>
    <ul>
      <li>Write for your target engine</li>
      <li>Avoid advanced features unless necessary</li>
      <li>Test in the actual environment</li>
    </ul>

    <h2>FAQ</h2>
    <details>
      <summary>Which flavor should I learn first?</summary>
      <p>JavaScript — it’s the most restrictive and widely used.</p>
    </details>
    <details>
      <summary>Are regexes standardized?</summary>
      <p>No. Each engine has its own quirks.</p>
    </details>

    <p class="italic-note">Write once. Test everywhere.</p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 800px;
    padding: 2rem 1rem 4rem;
  }
  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: .5rem;
    margin-bottom: 1.5rem;
    font-size: .9rem;
    color: var(--text-secondary);
  }
  .breadcrumbs a { color: var(--accent-secondary); }
  .breadcrumbs a:hover { text-decoration: underline; }

  .prose { line-height: 1.8; }
  .prose .post-meta {
    color: var(--text-secondary);
    font-size: .9rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
  }
  .prose h1, .prose h2 { color: var(--accent-secondary); }
  .prose h1 { font-size: 2.5rem; margin-bottom: .5rem; }
  .prose h2 { margin-top: 2.5rem; border-bottom: 1px solid var(--secondary-bg); padding-bottom: .5rem; }

  .prose p, .prose ul li { color: var(--text-primary); }
  .prose ul {
    list-style-type: '→ ';
    padding-left: 1.5rem;
  }
  .prose ul li::marker { color: var(--accent-primary); }
  .prose ul li { padding-left: .5rem; margin-bottom: .5rem; }

  .prose details {
    background: var(--secondary-bg);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    padding: 1rem;
    margin-bottom: 1rem;
  }
  .prose details[open] { background-color: var(--card-bg); }
  .prose summary {
    cursor: pointer;
    font-weight: 600;
    color: var(--accent-secondary);
    list-style: none;
  }
  .prose summary::-webkit-details-marker { display: none; }
  .prose summary::before {
    content: '+';
    margin-right: .75rem;
    color: var(--accent-primary);
    font-weight: bold;
    transition: transform .2s;
  }
  .prose details[open] summary::before { transform: rotate(45deg); }
  .prose details p {
    margin-top: 1rem;
    padding-left: 1.5rem;
    border-left: 2px solid var(--accent-primary);
    color: var(--text-secondary);
  }
  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>