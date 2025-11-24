<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Share Regex via Link • 100% Private Collaboration</title>
  <meta name="description" content="How the “Share via Link” feature works: zero servers, full privacy, instant loading — perfect for teams and teaching." />
  <meta property="og:title" content="Share Your Regex: The Magic of Link-Based Collaboration" />
  <meta property="og:description" content="Send complex regex patterns instantly — no login, no tracking." />
  <meta property="og:url" content="{base}/blog/posts/post6" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Share Regex via Link</p>
  </div>

  <article class="prose">
    <h1>Share Your Regex: The Magic of Link-Based Collaboration</h1>
    <p class="post-meta">Published: November 24, 2025</p>

    <p>You just wrote the perfect regex. Now you want to share it.</p>

    <p>Most tools? Paste into chat → formatting breaks → context lost.</p>

    <p>This tool? Click <strong>Share via Link</strong> → done.</p>

    <h2>How It Works</h2>
    <ul>
      <li>Your regex is Base64-url-encoded</li>
      <li>Added as <code>?r=...</code> to the URL</li>
      <li>Open the link → instantly loads your pattern + explanation</li>
      <li>No server. No database. No tracking.</li>
    </ul>

    <h2>Use Cases</h2>
    <ul>
      <li>Code reviews (“Why does this fail?”)</li>
      <li>Teaching regex in workshops</li>
      <li>Stack Overflow answers</li>
      <li>Debugging with teammates</li>
    </ul>

    <h2>100% Private</h2>
    <p>Nothing is stored. The regex lives only in the URL. Delete it → gone forever.</p>

    <h2>Pro Tip</h2>
    <p>Combine with browser “Copy URL” → paste into Slack, Discord, email → instant understanding.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Is there a character limit?</summary>
      <p>URL limit (~2000 chars). For longer, use the tool locally.</p>
    </details>
    <details>
      <summary>Can I password-protect?</summary>
      <p>Not needed — obscurity + short lifespan = secure enough.</p>
    </details>

    <p class="italic-note">Share knowledge. Not data.</p>
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