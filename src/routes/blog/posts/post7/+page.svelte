<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>This Tool is Open Source • Fork, Customize, Deploy</title>
  <meta name="description" content="Full walkthrough of the SvelteKit codebase. Deploy your own version in minutes — for free, forever." />
  <meta property="og:title" content="This Tool is Open Source — Build Your Own" />
  <meta property="og:description" content="Privacy-first, static, beautiful — and now yours to own." />
  <meta property="og:url" content="{base}/blog/posts/post7" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Open Source Tool</p>
  </div>

  <article class="prose">
    <h1>This Tool is Open Source — Build Your Own Version</h1>
    <p class="post-meta">Published: November 24, 2025</p>

    <p>You don’t just use this tool. You can <strong>own</strong> it.</p>

    <p>100% open source. MIT license. No lock-in.</p>

    <h2>Tech Stack</h2>
    <ul>
      <li>SvelteKit (v2+) — blazing fast</li>
      <li>Bootstrap 5 + Icons — beautiful out of the box</li>
      <li>TypeScript — type-safe parsing</li>
      <li>adapter-static — deploys anywhere</li>
    </ul>

    <h2>Deploy in 60 Seconds</h2>
    <pre><code>git clone https://github.com/axelbase/regex-explanation-gen
cd regex-explanation-gen
npm install
npm run dev</code></pre>

    <p>Or deploy free forever:</p>
    <pre><code>npm run build
npx gh-pages -d build</code></pre>

    <h2>Customize Everything</h2>
    <ul>
      <li>Add your branding</li>
      <li>Support more flavors</li>
      <li>Add test string matching</li>
      <li>Dark mode toggle</li>
      <li>Export to PDF</li>
    </ul>

    <h2>Why Open Source?</h2>
    <p>Because regex education should be free, private, and accessible to everyone.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Can I sell a version?</summary>
      <p>Yes — MIT license allows commercial use.</p>
    </details>
    <details>
      <summary>Can I contribute?</summary>
      <p>Yes! Pull requests welcome.</p>
    </details>

    <p class="italic-note">Fork it. Improve it. Make it yours.</p>
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