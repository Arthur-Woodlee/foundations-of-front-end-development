
<body>

  <h1>Front End Foundations</h1>
  <p>A modular, maintainable front-end scaffold built with semantic HTML, token driven SASS and Webpack. This project demonstrates architectural clarity, accessibility best practices and onboarding documentation.</p>

  <h2>Purpose</h2>
  <p>This repository supports my application for the APS6 Front End Developer role at the National Museum of Australia. It showcases reusable components, centralised styling logic and accessibility conscious design.</p>

  <h2>Architecture Overview</h2>
  <ul>
    <li><strong>Modular BEM structure</strong> for scalable component development</li>
    <li><strong>Token driven SASS partials</strong> for consistent theming and responsive logic</li>
    <li><strong>Centralised media queries</strong> in <code>media.scss</code> using semantic breakpoints</li>
    <li><strong>Webpack bundling</strong> for asset management and build optimization</li>
  </ul>

  <h2>Accessibility Features</h2>
  <ul>
    <li>Semantic HTML tags (<code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;button&gt;</code>)</li>
    <li>ARIA roles and labels for screen reader compatibility</li>
    <li>Keyboard accessible toggles with styled focus states</li>
    <li>WCAG aligned contrast and readability considerations</li>
  </ul>

  <h2>Folder Structure</h2>
  <pre><code>
foundations_of_front_end_development/
├── src/
│   ├── entry/
│   │   └── index.js
│   ├── pages/
│   │  └── index.html
│   ├── styles/  
│      └── global/
│      │  ├── _functions.scss
│      │  │
│      │  ├── _typography.scss
│      │  │ 
│      │  ├── _variables.scss
│      ├── layout/
│      │      ├── mixins/
│      │         ├── _list.scss
│      │         │
│      │         ├── _grid.scss
│      │         │
│      │         ├── _media_.scss
│      ├── components/
│      │  │
│      │  ├── card/
│      │     ├── _card.scss
├── dist/
├── webpack.config.js
└── package.json
</code></pre>

  <h2>Getting Started</h2>
  <ol>
    <li>Clone the repository:
      <pre><code>git clone https://github.com/Arthur-Woodlee/foundations-of-front-end-development.git</code></pre>
    </li>
    <li>Open the project folder in <strong>Visual Studio Code</strong>.</li>
    <li>Install dependencies via the integrated terminal:
      <pre><code>npm install</code></pre>
    </li>
    <li>Start the development server using Webpack:
      <pre><code>npx webpack serve</code></pre>
      <p>This will automatically open the app in your default browser on an available port (e.g., <code>http://localhost:5173</code> or similar).</p>
      <p><strong>Note:</strong> <code>webpack serve</code> compiles assets in memory for development — no files are written to disk. To generate actual output files in the <code>dist/</code> directory run <code>npx webpack</code>.</p>
    </li>
    <li>Explore the codebase using the VS Code file explorer, and preview live changes directly in your browser.</li>
  </ol>

  <h2>CI & DevOps Integration</h2>
  <p>This project includes a basic CI pipeline configured via <strong>GitHub Actions</strong> to validate code quality and ensure repeatable builds. The pipeline runs automatically on each push to <code>main</code>, helping catch errors early and enforce architectural consistency.</p>

  <ul>
    <li><strong>ESLint v9</strong> is configured using the flat config format (<code>eslint.config.mjs</code>) to lint JavaScript files in <code>src/scripts/</code>. It enforces clarity, modularity, and browser-safe globals.</li>
    <li><strong>Stylelint v16</strong> uses a flat config (<code>stylelint.config.mjs</code>) with SCSS support to validate styling logic in <code>src/styles/</code>. It enforces BEM-friendly class naming, modern SCSS syntax, and consistent formatting.</li>
    <li><strong>Webpack</strong> is used for bundling assets and serving the project locally via <code>webpack serve</code>. The build script is defined in <code>package.json</code> and triggered automatically in CI.</li>
  </ul>

  <h2>Notes</h2>
  <p>This project is designed to support onboarding, with clear naming conventions, centralized logic and maintainable structure. It reflects my commitment to collaborative development and user-first design.</p>

</body>
