<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms & Conditions | AxelBase Regex Explanation Generator</title>
  <meta name="description" content="Free, open-source regex tool. Use it, fork it, share it — no restrictions, no warranty." />
  <meta property="og:title" content="Terms & Conditions | AxelBase Regex Explanation Generator" />
  <meta property="og:description" content="MIT-licensed, no warranty, use at your own risk — but built with love." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms & Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms & Conditions</h1>
    <p class="post-meta">Effective Date: November 24, 2025</p>

    <p>Welcome to the <strong>AxelBase Regex Explanation Generator</strong> — a free, open-source, client-side web tool designed to help developers understand regular expressions.</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By using this tool, you agree to these Terms. If you do not agree, please do not use the service.</p>

    <h2>2. Nature of Service</h2>
    <p>This is a <strong>static, client-side web application</strong>. All processing occurs in your browser. We do not provide hosting, backend services, or guarantees of uptime beyond what GitHub Pages offers.</p>

    <h2>3. License & Usage</h2>
    <p>The entire project is released under the <strong>MIT License</strong>. You are free to:</p>
    <ul>
      <li>Use the tool for personal or commercial projects</li>
      <li>Fork, modify, and redistribute the code</li>
      <li>Deploy your own version anywhere</li>
      <li>Remove or modify branding</li>
    </ul>
    <p>No attribution is required, though always appreciated.</p>

    <h2>4. No Warranty</h2>
    <p>This tool is provided <strong>“as is”</strong> without warranty of any kind, express or implied. We do not guarantee:</p>
    <ul>
      <li>Accuracy of explanations (regex is complex!)</li>
      <li>Absence of bugs or security vulnerabilities</li>
      <li>Availability or performance</li>
    </ul>
    <p>Use at your own risk. Test patterns in your actual environment.</p>

    <h2>5. Limitation of Liability</h2>
    <p>In no event shall AxelBase or its contributors be liable for any damages arising from the use or inability to use this tool, even if advised of the possibility of such damage.</p>

    <h2>6. External Links</h2>
    <p>This site may link to external resources (e.g., regex101.com, MDN). We are not responsible for their content or practices.</p>

    <h2>7. Modifications</h2>
    <p>We may update these Terms at any time. Continued use constitutes acceptance of the new terms.</p>

    <h2>8. Governing Law</h2>
    <p>These Terms are governed by the laws of open-source goodwill and common sense.</p>

    <p class="italic-note"><strong>Built for developers, by a developer.</strong><br>Use freely. Improve freely. Share freely.</p>
  </article>
</div>

<style>
  .post-layout { max-width: 800px; padding: 2rem 1rem 4rem; }
  .breadcrumbs { display: flex; align-items: center; gap: .5rem; margin-bottom: 1.5rem; font-size: .9rem; color: var(--text-secondary); }
  .breadcrumbs a { color: var(--accent-secondary); text-decoration: underline; }
  .prose { line-height: 1.8; }
  .prose .post-meta { color: var(--text-secondary); font-size: .9rem; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; }
  .prose h1, .prose h2 { color: var(--accent-secondary); }
  .prose h1 { font-size: 2.5rem; margin-bottom: .5rem; }
  .prose h2 { margin-top: 2.5rem; border-bottom: 1px solid var(--secondary-bg); padding-bottom: .5rem; }
  .prose p, .prose ul li { color: var(--text-primary); }
  .prose ul { list-style-type: 'Arrow Right '; padding-left: 1.5rem; }
  .prose ul li::marker { color: var(--accent-primary); }
  .prose .italic-note { font-style: italic; color: var(--text-secondary); text-align: center; margin-top: 3rem; font-size: 1.1rem; }
</style>