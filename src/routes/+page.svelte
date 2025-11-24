<script lang="ts">
  import { base } from '$app/paths';
  import RegexInput from '$lib/components/RegexInput.svelte';
  import FlavorSelector from '$lib/components/FlavorSelector.svelte';
  import ExampleGallery from '$lib/components/ExampleGallery.svelte';
  import ExplanationOutput from '$lib/components/ExplanationOutput.svelte';
  import CatastrophicWarning from '$lib/components/CatastrophicWarning.svelte';
  import ActionButtons from '$lib/components/ActionButtons.svelte';
  import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';
  import { isParsing, regexInput, parseProgress } from '$lib/stores/regexStore';
</script>

<section id="home" class="section-container pt-4">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10 col-xl-9">
        
        <div class="text-center mb-5 animate-fade-down">
          <h1 class="display-4 fw-bold mb-3 claret-text">Regex Explanation Generator</h1>
          <p class="lead text-muted">
            Type or paste any regular expression and get an instant, human-readable explanation.
          </p>
        </div>

        <div class="card shadow-lg bubbly-card animate-fade-up">
          <div class="card-body p-4 p-md-5">
            <FlavorSelector />
            
            <div class="my-4">
                <RegexInput />
            </div>

            <div class="mb-4">
                <ExampleGallery />
            </div>

            <CatastrophicWarning />

            {#if $isParsing}
              <div class="py-5 text-center">
                 <LoadingSpinner progress={$parseProgress} inputLength={$regexInput.length} />
              </div>
            {:else}
              <div class="mt-4">
                  <ExplanationOutput />
              </div>
              <div class="mt-4">
                  <ActionButtons />
              </div>
            {/if}
          </div>
        </div>

        <div class="text-center mt-4 text-muted small">
           <span class="badge rounded-pill bg-claret-light text-claret">Offline Capable</span> 
           <span class="mx-2">•</span> 
           Supports JavaScript, Python, PCRE, and Java
        </div>

      </div>
    </div>
  </div>
</section>

<section id="about" class="section-container">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-9 text-center">
        <h2 class="mb-display fw-bold claret-text mb-4">About AxelBase Regex Explanation Generator</h2>
        <p class="lead text-secondary mb-5">
          The only regex tool that doesn’t just test — it <em>teaches</em>.
        </p>

        <p class="mx-auto" style="max-width: 720px;">
          In 2025, regular expressions remain one of the most powerful — and most misunderstood — tools in a developer’s arsenal. 
          Most people copy-paste patterns from Stack Overflow, pray they work, and move on. 
          When something breaks, they’re lost in a sea of backslashes, asterisks, and cryptic error messages.
        </p>

        <p class="mx-auto mt-4" style="max-width: 720px;">
          <strong>AxelBase</strong> was built to end that cycle.
          This isn’t just another regex tester. It’s a <strong>real-time, human-readable explanation engine</strong> that turns even the most complex patterns into clear, plain-English breakdowns — instantly.
        </p>

        <p class="mx-auto mt-4" style="max-width: 720px;">
          Every single character you type is parsed with a custom TypeScript engine running entirely in your browser. 
          No data ever leaves your device. No backend. No tracking. No analytics. 
          Just pure, privacy-first regex education.
        </p>

        <div class="row mt-5 g-5">
          <div class="col-md-4">
            <div class="feature-icon bg-white shadow-sm rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style="width:70px; height:70px;">
              <i class="bi bi-shield-lock-fill text-claret fs-3"></i>
            </div>
            <h5 class="fw-bold">Zero Data Collection</h5>
            <p class="small text-muted">
              100% client-side. Your regex — even sensitive ones with passwords, tokens, or PII — never touch a server.
            </p>
          </div>
          <div class="col-md-4">
            <div class="feature-icon bg-white shadow-sm rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style="width:70px; height:70px;">
              <i class="bi bi-lightning-charge-fill text-claret fs- fs-3"></i>
            </div>
            <h5 class="fw-bold">Instant & Smart</h5>
            <p class="small text-muted">
              Millisecond parsing with progress feedback, catastrophic backtracking detection, and flavor-aware explanations (JS, Python, PCRE, Java).
            </p>
          </div>
          <div class="col-md-4">
            <div class="feature-icon bg-white shadow-sm rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style="width:70px; height:70px;">
              <i class="bi bi-people-fill text-claret fs-3"></i>
            </div>
            <h5 class="fw-bold">Built for Teams</h5>
            <p class="small text-muted">
              Share any pattern via a link. Perfect for code reviews, onboarding, teaching, or debugging with colleagues.
            </p>
          </div>
        </div>

        <p class="mt-5 text-muted">
          Open source • MIT licensed • Self-hostable • No lock-in • Forever free
        </p>
        <p class="italic-note fw-medium text-secondary">
          Because understanding regex shouldn’t feel like deciphering alien code.
        </p>
      </div>
    </div>
  </div>
</section>
<section id="how-to" class="section-container bg-white-soft">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-9">
        <h2 class="text-center mb-5 fw-bold claret-text">How to Use AxelBase</h2>

        <div class="d-flex flex-column gap-5">
          <div class="d-flex align-items-start gap-4">
            <div class="step-number bg-claret text-white">1</div>
            <div>
              <h5 class="fw-bold">Choose Your Regex Flavor</h5>
              <p class="text-muted">
                Use the dropdown to select <strong>JavaScript</strong>, <strong>Python</strong>, <strong>PCRE</strong>, or <strong>Java</strong>. 
                The parser instantly adapts to that engine’s syntax rules — including lookbehinds, possessive quantifiers, and Unicode properties.
              </p>
            </div>
          </div>

          <div class="d-flex align-items-start gap-4">
            <div class="step-number bg-claret text-white">2</div>
            <div>
              <h5 class="fw-bold">Enter Your Regex Pattern</h5>
              <p class="text-muted">
                Type or paste any pattern. Use the <strong>Examples Gallery</strong> below the input to load real-world patterns instantly (email, URL, UUID, password rules, etc.). 
                Toggle flags (<code>i</code>, <code>m</code>, <code>s</code>, <code>u</code>, <code>x</code>) with the gear icon.
              </p>
            </div>
          </div>

          <div class="d-flex align-items-start gap-4">
            <div class="step-number bg-claret text-white">3</div>
            <div>
              <h5 class="fw-bold">Get Instant Explanation</h5>
              <p class="text-muted">
                As you type, the tool generates a <strong>plain-English summary</strong> at the top, followed by a <strong>token-by-token breakdown</strong>. 
                Hover any explanation line to highlight the exact characters it refers to. 
                Complex nested groups, alternations, and lookarounds are fully expanded.
              </p>
            </div>
          </div>

          <div class="d-flex align-items-start gap-4">
            <div class="step-number bg-claret text-white">4</div>
            <div>
              <h5 class="fw-bold">Stay Safe with Warnings</h5>
              <p class="text-muted">
                Dangerous patterns like <code>(a+)+</code>, <code>(.*)*</code>, or nested quantifiers trigger a <strong>bright red catastrophic backtracking warning</strong> with safe alternatives suggested automatically.
              </p>
            </div>
          </div>

          <div class="d-flex align-items-start gap-4">
            <div class="step-number bg-claret text-white">5</div>
            <div>
              <h5 class="fw-bold">Share or Export</h5>
              <p class="text-muted">
                Click <strong>Share via Link</strong> to generate a URL containing your pattern (Base64-encoded, no server). 
                Or use <strong>Copy Explanation</strong> to paste beautiful markdown into tickets, docs, or PRs.
              </p>
            </div>
          </div>
        </div>

        <div class="text-center mt-5">
          <p class="text-muted fst-italic">
            Pro tip: Bookmark complex patterns — the URL is the entire state!
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="faq" class="section-container">
  <div class="container">
    <h2 class="text-center mb-5 fw-bold claret-text">Frequently Asked Questions</h2>
    <div class="row justify-content-center">
      <div class="col-lg-9">
        <div class="accordion shadow-lg" id="faqAccordion">

          <div class="accordion-item border-0 mb-3 rounded-3 overflow-hidden">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                Is my regex private and secure?
              </button>
            </h2>
            <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                <strong>Yes — 100%.</strong> This tool runs entirely in your browser. 
                No regex, test string, or usage data ever leaves your device. 
                Even shared links are encoded client-side. 
                We have no servers, no logs, no analytics. 
                Safe for passwords, API keys, PII, or internal patterns.
              </div>
            </div>
          </div>

          <div class="accordion-item border-0 mb-3 rounded-3 overflow-hidden">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                Why does the explanation differ between flavors?
              </button>
            </h2>
            <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                Because regex engines are <em>not</em> standardized! 
                JavaScript lacks lookbehinds and named groups (in older versions), Python supports verbose mode, PCRE has recursion — the tool accurately reflects each engine’s real behavior so you write correct code the first time.
              </div>
            </div>
          </div>

          <div class="accordion-item border-0 mb-3 rounded-3 overflow-hidden">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                Does it detect catastrophic backtracking?
              </button>
            </h2>
            <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                Yes — instantly. Patterns like <code>(a+)+</code>, <code>(.*)*</code>, or nested quantifiers trigger a <strong>red warning banner</strong> with explanations and safe alternatives. 
                This has saved countless production outages (Cloudflare, Stack Overflow, and Atom all fell victim).
              </div>
            </div>
          </div>

          <div class="accordion-item border-0 mb-3 rounded-3 overflow-hidden">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                Can I use this offline?
              </button>
            </h2>
            <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                Absolutely. Add to home screen (PWA) or deploy your own copy. 
                All assets are cached, and everything works without internet after first load.
              </div>
            </div>
          </div>

          <div class="accordion-item border-0 mb-3 rounded-3 overflow-hidden">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                Is it really free? Can I contribute?
              </button>
            </h2>
            <div id="faq5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                100% free • MIT licensed • open source. 
                If you love it, buy me a coffee via the navbar. 
                Want to improve it? Fork on GitHub — pull requests welcome for new flavors, UI polish, or test matching!
              </div>
            </div>
          </div>

        </div>
        <p class="text-center mt-4 text-muted fst-italic">
          Still have questions? Open an issue on GitHub — I answer fast.
        </p>
      </div>
    </div>
  </div>
</section>
<style>
    .section-container {
        padding: 80px 0;
        scroll-margin-top: 70px; /* Accounts for fixed navbar */
    }

    .claret-text {
        color: #641C34;
    }

    .bg-claret-light {
        background-color: rgba(100, 28, 52, 0.1);
    }

    .text-claret {
        color: #641C34;
    }

    .bg-white-soft {
        background-color: rgba(255, 255, 255, 0.6);
        border-radius: 30px;
        margin: 20px 0;
    }

    .step-number {
        background: #641C34;
        color: white;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        flex-shrink: 0;
    }

    /* Animation Keyframes */
    @keyframes fadeDown {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .animate-fade-down {
        animation: fadeDown 0.8s ease-out;
    }

    .animate-fade-up {
        animation: fadeUp 0.8s ease-out;
    }
</style>