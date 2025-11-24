<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | AxelBase Regex Explanation Generator</title>
  <meta name="description" content="We collect zero data. Your regex patterns never leave your browser. 100% private, client-side only." />
  <meta property="og:title" content="Privacy Policy | AxelBase Regex Explanation Generator" />
  <meta property="og:description" content="No tracking. No servers. No data collection. Your regex stays on your device — always." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>
    <p class="post-meta">Effective Date: November 24, 2025</p>

    <p>At <strong>AxelBase Regex Explanation Generator</strong>, your privacy is not just respected — it is <em>guaranteed by design</em>. This tool was built from the ground up to be <strong>100% client-side</strong>, meaning <strong>we collect absolutely no data from you</strong>.</p>

    <h2>No Data Collection — Ever</h2>
    <p>We do <strong>not</strong> collect, store, transmit, or log:</p>
    <ul>
      <li>Any regex patterns you enter</li>
      <li>Your IP address, location, or device information</li>
      <li>Browser type, operating system, or screen size</li>
      <li>Timestamps, session duration, or usage behavior</li>
      <li>Cookies, localStorage (except temporary session state), or any tracking pixels</li>
    </ul>
    <p><em>Your regex never leaves your browser.</em> Even when you share a pattern via URL, it is Base64-encoded locally and decoded only in the recipient’s browser — no server is involved.</p>

    <h2>How the Tool Works</h2>
    <p>All parsing, explanation generation, catastrophic backtracking detection, and flavor comparison happen <strong>entirely in your browser</strong> using pure TypeScript and Web Workers. There is no backend, no database, and no analytics.</p>

    <h2>No Third-Party Services</h2>
    <p>We do not use:</p>
    <ul>
      <li>Google Analytics, Plausible, Umami, or any analytics provider</li>
      <li>Advertising networks or affiliate tracking</li>
      <li>External fonts that phone home (all assets are self-hosted)</li>
      <li>CDNs with tracking capabilities</li>
    </ul>

    <h2>GitHub Pages Hosting</h2>
    <p>This site is statically hosted on GitHub Pages. GitHub may log basic server access for security purposes (e.g., rate limiting), but AxelBase has no access to these logs and does not configure or request them.</p>

    <h2>Your Rights</h2>
    <p>Because we collect nothing, you have nothing to request deletion of. You are in full control at all times.</p>

    <h2>Children’s Privacy</h2>
    <p>This tool is safe and appropriate for users of all ages. No personal information is ever requested or stored.</p>

    <h2>Changes to This Policy</h2>
    <p>We may update this policy if new features are added. Any changes will be clearly dated above.</p>

    <h2>Contact</h2>
    <p>Questions? Open an issue on our <a href="https://github.com/axelbase/regex-explanation-gen" target="_blank" rel="noopener">GitHub repository</a>.</p>

    <p class="italic-note"><strong>Privacy isn’t a feature — it’s the foundation.</strong> Use this tool with complete confidence.</p>
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