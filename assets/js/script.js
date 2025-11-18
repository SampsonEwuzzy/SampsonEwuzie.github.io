// ========================================
// POSTS DATA (Add new posts here)
// ========================================
const posts = [
  {
    id: 1,
    title: 'Load Flow Analysis Tutorial',
    category: 'tutorials',
    excerpt: 'Step-by-step MATLAB guide for power systems. $P_i = V_i \\sum V_j (G_{ij}\\cos\\theta_{ij} + B_{ij}\\sin\\theta_{ij})$',
    date: '2025-11-09',
    slug: 'load-flow-analysis'
  },
  {
    id: 2,
    title: 'Solar PV Integration Project',
    category: 'projects',
    excerpt: 'PSCAD simulation for grid stability.',
    date: '2025-11-08',
    slug: 'solar-pv-integration'
  },
  {
    id: 3,
    title: 'Week 1 Reflections on HVDC',
    category: 'reflections',
    excerpt: 'Key takeaways from class on high-voltage transmission.',
    date: '2025-11-07',
    slug: 'reflections-hvdc-transmission-nigeria'
  },
  {
    id: 4,
    title: 'Microgrid Design Tutorial',
    category: 'tutorials',
    excerpt: 'ETAP modeling for islanded systems.',
    date: '2025-11-06',
    slug: 'microgrid-design'
  },
  {
    id: 5,
    title: 'Renewable Energy Project Review',
    category: 'projects',
    excerpt: 'Case study on wind farm integration.',
    date: '2025-11-05',
    slug: 'renewable-energy-review'
  },
  {
    id: 6,
    title: 'Smart Grid Reflections',
    category: 'reflections',
    excerpt: 'Thoughts on IoT in power distribution.',
    date: '2025-11-04',
    slug: 'smart-grid-reflections'
  },

  {
    id: 7,
    title: 'Gauss-Seidel Power Flow Method',
    category: 'tutorials',
    excerpt: 'Iterative solution with $V_i^{(k+1)} = \\frac{1}{Y_{ii}} \\left( \\frac{P_i - jQ_i}{V_i^{(k)*}} - \\sum Y_{ij} V_j^{(k)} \\right)$',
    date: '2025-11-11',
    slug: 'gauss-seidel-power-flow'
  }
];

// Auto-generate slug if missing
function createSlug(title) {
  return title.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
// ========================================
// DARK MODE TOGGLE (SVG Icons)
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  const body = document.body;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

  // SVG Icons
  const sunIcon = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  `;

  const moonIcon = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  `;

  // === ICON LOGIC: Moon = Dark, Sun = Light ===
  toggle.innerHTML = isDark ? moonIcon : sunIcon;

  if (isDark) body.classList.add('dark-mode');

  toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const dark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    toggle.innerHTML = dark ? moonIcon : sunIcon;
  });
});

// ========================================
// HOME CAROUSEL (3 Recent Posts)
// ========================================
if (document.getElementById('post-carousel')) {
  const recentPosts = posts.slice(0, 3).reverse(); // Most recent first
  const carousel = document.getElementById('post-carousel');
  let currentIndex = 0;

  // Build carousel items
  recentPosts.forEach(post => {
    const slug = post.slug || createSlug(post.title);
    const item = document.createElement('div');
    item.className = 'carousel-item post-card';
    item.innerHTML = `
      <h3><a href="posts/${slug}.html">${post.title}</a></h3>
      <p class="post-meta">${post.date} • ${post.category}</p>
      <p>${post.excerpt}</p>
      <a href="posts/${slug}.html" class="read-more">Read Full Post</a>
    `;
    carousel.appendChild(item);
  });

  // Wrap items in .carousel-inner
  const inner = document.createElement('div');
  inner.className = 'carousel-inner';
  while (carousel.firstChild) {
    inner.appendChild(carousel.firstChild);
  }
  carousel.appendChild(inner);

  const totalSlides = recentPosts.length;

  // === ARROW ICONS ONLY (NO OVAL) ===
  const prevBtn = document.createElement('button');
  prevBtn.className = 'carousel-btn prev';
  prevBtn.setAttribute('aria-label', 'Previous slide');
  prevBtn.innerHTML = `
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M19 12H5M12 19l-7-7 7-7"/>
    </svg>
  `;
  prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    inner.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  const nextBtn = document.createElement('button');
  nextBtn.className = 'carousel-btn next';
  nextBtn.setAttribute('aria-label', 'Next slide');
  nextBtn.innerHTML = `
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  `;
  nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    inner.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  carousel.appendChild(prevBtn);
  carousel.appendChild(nextBtn);

  // Auto-advance every 5 seconds
  setInterval(() => nextBtn.click(), 5000);
}

// ========================================
// POSTS PAGE: CATEGORY FILTER + SLUG LINKS
// ========================================
if (document.getElementById('posts-grid')) {
  const grid = document.getElementById('posts-grid');
  const tabs = document.querySelectorAll('.tab-btn');

  function renderPosts(category = 'all') {
    grid.innerHTML = '';
    const filtered = category === 'all' ? posts : posts.filter(p => p.category === category);

    filtered.forEach(post => {
      const slug = post.slug || createSlug(post.title);
      const card = document.createElement('article');
      card.className = 'post-card';
      card.innerHTML = `
        <h2><a href="posts/${slug}.html">${post.title}</a></h2>
        <p class="post-meta">${post.date} • ${post.category.toUpperCase()}</p>
        <p>${post.excerpt}</p>
        <a href="posts/${slug}.html" class="read-more">Read Full Post</a>
      `;
      grid.appendChild(card);
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderPosts(tab.dataset.category);
    });
  });

  renderPosts(); // Initial load
}

// ========================================
// CONTACT FORM (mailto)
// ========================================
if (document.getElementById('contact-form')) {
  document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = encodeURIComponent(document.getElementById('name').value);
    const email = encodeURIComponent(document.getElementById('email').value);
    const message = encodeURIComponent(document.getElementById('message').value);
    const subject = `Contact from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.location.href = `mailto:sampson.ewuzie@outlook.com?subject=${subject}&body=${body}`;
  });
}