<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>How to Add Equations, Figures & Tables in HTML</title>
    <meta name="description"
        content="Professional guide to embedding MathJax equations, SVG diagrams, captioned tables, and figures in HTML." />

    <!-- MathJax for Equations -->
    <script>
        MathJax = {
            tex: { inlineMath: [['$', '$'], ['\\(', '\\)']] },
            svg: { fontCache: 'global' }
        };
    </script>
    <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>

    <!-- Font Awesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

    <!-- Link to our custom CSS -->
    <link rel="stylesheet" href="style.css" />
</head>

<body>
    <div class="container">

        <!-- Header -->
        <header class="tutorial-header">
            <h1>How to Embed Professional Content in HTML</h1>
            <p class="lead">Equations • Diagrams • Tables • Figures • Captions</p>
            <p class="author">By <strong>Sampson Ikechukwu Ewuzie</strong> | M.Eng Power Systems</p>
        </header>

        <!-- Introduction -->
        <section class="intro">
            <h2>Introduction</h2>
            <p>This tutorial uses <strong>real NBET invoice data (Jan 2025)</strong> to show you how to present
                technical content professionally in HTML.</p>
        </section>

        <!-- 1. Equations with MathJax -->
        <section class="section">
            <h2>1. Equations with MathJax</h2>
            <p>Use <code>&lt;script src="MathJax"&gt;</code> in <code>&lt;head&gt;</code> to render LaTeX equations.</p>

            <div class="example">
                <h3>Power Flow Equation (Active Power)</h3>
                <div class="equation">
                    $$ P_i = \sum_{k=1}^{n} |V_i||V_k||Y_{ik}|\cos(\theta_i - \theta_k - \phi_{ik}) $$
                </div>
                <p><strong>Code:</strong></p>
                <pre><code>$$ P_i = \sum_{k=1}^{n} |V_i||V_k||Y_{ik}|\cos(\theta_i - \theta_k - \phi_{ik}) $$</code></pre>
            </div>

            <div class="example">
                <h3>Inline Equation</h3>
                <p>The voltage at bus \( i \) is \( V_i = |V_i| \angle \theta_i \).</p>
                <p><strong>Code:</strong> <code>\( V_i = |V_i| \angle \theta_i \)</code></p>
            </div>
        </section>

        <!-- 2. SVG Diagrams -->
        <section class="section">
            <h2>2. SVG Diagrams (Inline)</h2>
            <p>Embed vector graphics directly in HTML using <code>&lt;svg&gt;</code>. Fully scalable.</p>

            <figure class="diagram">
                <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
                    <!-- Grid Background -->
                    <defs>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" stroke-width="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />

                    <!-- Buses -->
                    <rect x="50" y="100" width="100" height="60" rx="8" fill="#dbeafe" stroke="#3b82f6" />
                    <text x="100" y="135" text-anchor="middle" font-weight="bold" fill="#1e40af">Slack Bus</text>

                    <rect x="200" y="80" width="100" height="60" rx="8" fill="#fef3c7" stroke="#f59e0b" />
                    <text x="250" y="115" text-anchor="middle" font-weight="bold" fill="#92400e">PV Bus</text>

                    <rect x="350" y="120" width="100" height="60" rx="8" fill="#fee2e2" stroke="#ef4444" />
                    <text x="400" y="155" text-anchor="middle" font-weight="bold" fill="#991b1b">PQ Bus</text>

                    <!-- Lines -->
                    <line x1="150" y1="130" x2="200" y2="110" stroke="#374151" stroke-width="3"
                        marker-end="url(#arrow)" />
                    <line x1="300" y1="110" x2="350" y2="150" stroke="#374151" stroke-width="3"
                        marker-end="url(#arrow)" />

                    <!-- Arrowhead -->
                    <defs>
                        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                            <path d="M0,0 L0,6 L9,3 z" fill="#374151" />
                        </marker>
                    </defs>
                </svg>
                <figcaption>Fig 1: 3-Bus Power System Model (AEDC 33/11 kV Network)</figcaption>
            </figure>

            <p><strong>Why SVG?</strong> Scalable, lightweight, editable in code, perfect for diagrams.</p>
        </section>

        <!-- 3. Tables with Captions -->
        <section class="section">
            <h2>3. Tables with Captions</h2>
            <p>Use <code>&lt;table&gt;</code> + <code>&lt;caption&gt;</code> or <code>&lt;figure&gt;</code> for
                accessibility.</p>

            <figure class="table-wrapper">
                <table>
                    <caption>Table 1: NBET Invoice Summary – Abuja Disco (Jan 2025)</caption>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Value</th>
                            <th>Unit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Total Energy Received</td>
                            <td>2,616,728.25</td>
                            <td>MWh</td>
                        </tr>
                        <tr>
                            <td>Abuja Disco Share</td>
                            <td>363,118.95</td>
                            <td>MWh</td>
                        </tr>
                        <tr>
                            <td>Energy Paid For</td>
                            <td>214,780.00</td>
                            <td>MWh</td>
                        </tr>
                        <tr class="highlight">
                            <td>DRO (Disco Remittance Order)</td>
                            <td>40.74%</td>
                            <td>%</td>
                        </tr>
                        <tr>
                            <td>Amount Due</td>
                            <td>NGN 252,116,001,685.98</td>
                            <td>₦</td>
                        </tr>
                    </tbody>
                </table>
            </figure>
        </section>

        <!-- 4. Figures with Images -->
        <section class="section">
            <h2>4. Figures with Images</h2>
            <p>Use <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> for images, diagrams, or charts.</p>

            <figure class="image-figure">
                <img src="https://i.ibb.co.com/YourImageLinkHere" alt="NBET Invoice January 2025" loading="lazy">
                <figcaption>Fig 2: Official NBET Invoice to Abuja Electricity Distribution Plc (Jan 2025)</figcaption>
            </figure>
        </section>

        <!-- 5. Code Snippets -->
        <section class="section">
            <h2>5. Code Snippets (Preformatted)</h2>
            <p>Use <code>&lt;pre&gt;&lt;code&gt;</code> for syntax-highlighted code.</p>

            <pre><code>// Python: Calculate DRO
energy_received = 363118.95
energy_paid = 214780.00
dro = ((energy_received - energy_paid) / energy_received) * 100
print(f"DRO: {dro:.2f}%")  # Output: 40.74%</code></pre>
        </section>

        <!-- Footer -->
        <footer class="tutorial-footer">
            <p>© 2025 Sampson Ikechukwu Ewuzie | <a href="https://sampsonewuzie.github.io">Portfolio</a></p>
        </footer>
    </div>
</body>

</html>