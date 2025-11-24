<!-- src/routes/blog/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    {
      href: '/blog/posts/post1',
      title: 'Understanding Regular Expressions in 2025',
      description: 'A modern, beginner-friendly introduction to regex: what they are, why they matter, and how to think about them without fear.'
    },
    {
      href: '/blog/posts/post2',
      title: 'How This Regex Explanation Generator Works',
      description: 'Go behind the scenes: client-side parsing, live tokenization, flavor detection, and how we make complex patterns human-readable.'
    },
    {
      href: '/blog/posts/post3',
      title: '10 Most Useful Regex Patterns (With Explanations)',
      description: 'Email, URL, phone numbers, dates, passwords, and more — fully explained with this tool’s breakdown feature.'
    },
    {
      href: '/blog/posts/post4',
      title: 'Catastrophic Backtracking: How to Spot and Avoid It',
      description: 'Learn why `(a+)+` can crash your browser and how this tool instantly warns you about dangerous patterns.'
    },
    {
      href: '/blog/posts/post5',
      title: 'Regex Flavors Demystified: JavaScript vs Python vs PCRE vs Java',
      description: 'Why the same pattern behaves differently across languages — and how to switch flavors in this tool.'
    },
    {
      href: '/blog/posts/post6',
      title: 'Share Your Regex: The Magic of Link-Based Collaboration',
      description: 'How the “Share via Link” feature works, why it’s 100% private, and real-world use cases for teams and teaching.'
    },
    {
      href: '/blog/posts/post7',
      title: 'This Tool is Open Source — Build Your Own Version',
      description: 'A complete walkthrough of the SvelteKit + Bootstrap codebase. Fork it, customize it, deploy it — it’s yours.'
    }
  ];
</script>

<svelte:head>
  <title>Blog • Regex Explanation Generator</title>
  <meta name="description" content="In-depth articles, tutorials, and insights about regular expressions and this open-source explanation tool." />
</svelte:head>

<div class="container py-5">
  <header class="text-center mb-5">
    <h1 class="display-4 fw-bold mb-3">
      <i class="bi bi-journal-text text-primary"></i> Blog
    </h1>
    <p class="lead text-muted col-lg-8 mx-auto">
      Deep dives, tutorials, and best practices for mastering regular expressions using the <strong>Regex Explanation Generator</strong>.
    </p>
    <p class="text-muted small">
      All articles are written for developers, by developers. 
      <a href="https://github.com/axelbase/regex-explanation-gen" target="_blank" rel="noopener" class="text-decoration-underline">
        View source on GitHub
      </a>
    </p>
  </header>

  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    {#each posts as post}
      <div class="col">
        <a href="{base}{post.href}" class="text-decoration-none h-100">
          <div class="card h-100 shadow-sm border-0 hover-lift transition">
            <div class="card-body d-flex flex-column">
              <h3 class="card-title fs-5 fw-bold text-primary mb-3">
                {post.title}
              </h3>
              <p class="card-text text-muted flex-grow-1 small">
                {post.description}
              </p>
              <div class="mt-auto pt-3">
                <span class="text-primary fw-semibold">
                  Read article <i class="bi bi-arrow-right ms-1"></i>
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    {/each}
  </div>
</div>

<style>
  .hover-lift {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .hover-lift:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
  }
  .transition {
    transition: all 0.3s ease;
  }
</style>