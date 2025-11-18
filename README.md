# SampsonEwuzie.github.io

Personal website and technical blog of **Sampson Ikechukwu Ewuzie** – M.Eng Candidate in Power Engineering, Market Settlement Manager in the Nigerian Electricity Supply Industry (NESI), and expert in smart grids, HVDC, renewable energy integration, smart metering, revenue protection, and utility-scale energy audits.

Live site: (https://github.com/SampsonEwuzzy/SampsonEwuzie.github.io)

## About This Repository

This repository contains the complete source code for my personal portfolio and technical blog, built as a static site and hosted directly via **GitHub Pages**.

### Key Features
- Fully responsive, clean, modern design (mobile-first)
- Dark / Light mode toggle with persistence
- MathJax v3 integration for beautiful LaTeX rendering of equations (perfect for power systems tutorials)
- Dynamic recent-posts carousel (populated automatically from the `posts/` folder)
- Fast loading with critical image preloading and lazy loading for others
- SEO-friendly with proper meta tags and Open Graph support
- Built entirely with vanilla HTML, CSS, and JavaScript – no frameworks, no build step required

### Main Sections
- **Home** – Hero introduction + recent posts carousel
- **About** – Detailed professional background, education, and experience
- **Posts** – Technical tutorials and articles on:
  - Smart grids & distribution automation
  - HVDC and FACTS devices
  - Renewable energy integration
  - PSCAD / EMTDC simulations
  - MATLAB & Python for power systems analysis
  - Smart metering & revenue assurance
- **Contact** – Links to reach out

## Tech Stack
- HTML5
- CSS3 (Flexbox + Grid, CSS variables for theming)
- Vanilla JavaScript (ES6+)
- [MathJax 3](https://www.mathjax.org/) for LaTeX rendering
- [Font Awesome 6](https://fontawesome.com/) for icons
- Hosted on GitHub Pages

## Local Development

Since this is a pure static site, you don't need any build tools.

```bash
# 1. Clone the repository
git clone https://github.com/SampsonEwuzie/SampsonEwuzie.github.io.git
cd SampsonEwuzie.github.io

# 2. Open index.html in your browser (or use a local server)
# Option A: Just double-click index.html
# Option B: Using Python
python -m http.server 8000
# Then visit http://localhost:8000
```

## Adding New Blog Posts

1. Create a new HTML file in the `posts/` folder (e.g., `my-new-tutorial.html`)
2. Use the existing posts as templates (they include proper header, footer, and styling)
3. Add front-matter metadata at the top (title, date, description, tags) – the carousel reads this
4. Your post will automatically appear in the "Recent Highlights" carousel on the homepage (sorted by date)

## License

This project is open source and available under the [MIT License](LICENSE).

Feel free to fork, study, or use as inspiration for your own portfolio!

## Contact

- LinkedIn: https://linkedin.com/in/sampsonewuzie  
- GitHub: https://github.com/SampsonEwuzie  
- Email: see Contact page

Powering knowledge, one post at a time ⚡

© 2025 Sampson Ikechukwu Ewuzieite
