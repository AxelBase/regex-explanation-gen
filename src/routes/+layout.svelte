<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import "../app.css";

  // === Buy Me a Coffee Configuration ===
  // Replace 'yourpaypal' with your actual PayPal username
  const paypalUsername = 'AxelLab427'; // ← CHANGE THIS!
  const donationAmounts = [1, 3, 5, 10];

  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  // Close dropdown when clicking outside
  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }
</script>

<nav class="navbar navbar-expand-lg fixed-top custom-navbar">
  <div class="container-fluid px-4">
    <div class="d-flex align-items-center gap-3">
      <!-- Logo + Brand -->
      <a class="navbar-brand d-flex align-items-center gap-2 text-white fw-bold" href="{base}/">
        <img src="{base}/AxelLab-Logo.ico" alt="AxelBase Logo" width="32" height="32" class="rounded-circle bg-white p-1">
        AxelBase
      </a>

      <!-- Buy Me a Coffee Dropdown (Desktop) -->
      <div class="position-relative d-none d-md-block" use:clickOutside on:click_outside={closeDropdown}>
        <button
          class="btn bmac-btn d-flex align-items-center gap-2"
          on:click={toggleDropdown}
          aria-expanded={isDropdownOpen}
          aria-label="Support the developer - Buy me a coffee"
        >
          <i class="bi bi-cup-hot-fill"></i>
          Buy me a coffee
          <i class="bi bi-chevron-down small ms-1"></i>
        </button>

        {#if isDropdownOpen}
          <div class="bmac-dropdown shadow-lg" transition:fly={{ y: -10, duration: 250 }}>

            {#each donationAmounts as amount}
              <a
                href="https://paypal.me/{paypalUsername}/{amount}"
                target="_blank"
                rel="noopener noreferrer"
                class="bmac-item"
                on:click={closeDropdown}
              >
                <span class="fw-bold">${amount}</span>
                <i class="bi bi-paypal"></i>
              </a>
            {/each}
          </div>
        {/if}
      </div>
    </div>

    <!-- Mobile Menu Toggle -->
    <button
      class="navbar-toggler border-0 text-white"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation menu"
    >
      <i class="bi bi-list fs-2"></i>
    </button>

    <!-- Navigation Links -->
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <!-- Mobile Buy Me a Coffee Button -->
      <div class="d-md-none my-3">
        <a
          href="https://paypal.me/{paypalUsername}/3"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-light w-100 text-danger fw-bold d-flex align-items-center justify-content-center gap-2"
        >
          <i class="bi bi-cup-hot-fill"></i>
          Buy me a coffee ($3)
        </a>
      </div>

      <ul class="navbar-nav gap-lg-3 align-items-center">
        <li class="nav-item"><a class="nav-link nav-pill" href="{base}/#home">Home</a></li>
        <li class="nav-item"><a class="nav-link nav-pill" href="{base}/#about">About</a></li>
        <li class="nav-item"><a class="nav-link nav-pill" href="{base}/#how-to">How to use</a></li>
        <li class="nav-item"><a class="nav-link nav-pill" href="{base}/#faq">FAQ</a></li>
        <li class="nav-item">
          <a
            class="nav-link nav-pill {$page.url.pathname === `${base}/blog` ? 'active' : ''}"
            href="{base}/blog"
          >Blog</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<main>
  <slot />
</main>

<footer class="releative custom-footer">
  <div class="container d-flex justify-content-between align-items-center py-2">
    <div class="text-white small">
      © {new Date().getFullYear()} AxelBase Regex Explanation Generator
    </div>
    <div class="d-flex gap-3">
      <a href="{base}/privacy" class="footer-link">Privacy</a>
      <a href="{base}/terms" class="footer-link">Terms</a>
    </div>
  </div>
</footer>

<style>
  :global(body) { padding-top: 76px; padding-bottom: 60px; }

  .custom-navbar {
    background: #641c34;
    box-shadow: 0 4px 20px rgba(100, 28, 52, 0.25);
    padding: 0.8rem 0;
  }

  .custom-footer {
    background: #641c34;
    color: white;
    border-top: 1px solid rgba(255,255,255,0.1);
    z-index: 1040;
  }

  .footer-link {
    color: rgba(255,255,255,0.7);
    text-decoration: none;
    font-size: 0.85rem;
    transition: color 0.2s;
  }
  .footer-link:hover { color: #fff; text-decoration: underline; }

  .nav-pill {
    color: rgba(255,255,255,0.85) !important;
    font-weight: 500;
    padding: 0.5rem 1rem !important;
    border-radius: 20px;
    transition: all 0.3s ease;
  }
  .nav-pill:hover, .nav-pill.active {
    background: rgba(255,255,255,0.15);
    color: #fff !important;
    transform: translateY(-1px);
  }

  /* Buy Me a Coffee Button */
  .bmac-btn {
    background: rgba(255,255,255,0.1);
    color: white;
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 20px;
    font-size: 0.9rem;
    padding: 0.4rem 1rem;
    transition: all 0.3s ease;
  }
  .bmac-btn:hover {
    background: #fff;
    color: #641c34;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }

  /* Dropdown */
  .bmac-dropdown {
    position: absolute;
    top: 120%;
    left: 0;
    background: white;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    width: 160px;
    overflow: hidden;
    z-index: 1050;
  }

  .bmac-item {
    padding: 0.75rem 1rem;
    text-decoration: none;
    color: #641c34;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background 0.2s;
    border-bottom: 1px solid #f0f0f0;
  }
  .bmac-item:last-child { border-bottom: none; }
  .bmac-item:hover { background: #fff0f5; }
</style>