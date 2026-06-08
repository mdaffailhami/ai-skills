---
name: html-rich-output
description: Use ONLY when the user explicitly asks to create an HTML artifact, output, or file, or references the "html-rich-output" skill directly.
---

# HTML Rich Output

## When to activate

Only use this skill when the user explicitly asks for:
- "make an HTML artifact", "create an HTML file", "use the html-rich-output skill", etc
- "create a visual plan/report/review/explainer/diagram/deck"
- Any variant that clearly signals they want rich HTML, not Markdown

Do NOT use for normal conversation, short answers, or standard terminal output.

## Output location

Save generated HTML files to the platform-specific global cache:

- Linux: `~/.cache/html-rich-output/outputs/`
- macOS: `~/Library/Caches/html-rich-output/outputs/`
- Windows: `%localappdata%\html-rich-output\outputs\`

Use descriptive lowercase-hyphenated filenames (e.g. `plan-comment-threads.html`).

**After saving the file,** always:
1. Print the full file path in your chat response so the user can copy it.
2. Auto-open the file in the default browser using the platform command:

- Linux: `xdg-open "<file>"`
- macOS: `open "<file>"`
- Windows: `start "<file>"`

## Core rules

### Self-contained
- **Single `.html` file.** No npm, no build step.
- Tailwind v4 via Play CDN is required. Add this in `<head>`:

```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

- Other external resources (Google Fonts, chart library CDN, icon CDN, etc) are allowed when they genuinely improve the output. Prefer inline when equivalent, but don't hesitate to use CDN if it produces a better result.
- System fonts by default. Define them in the `@theme` block:

```html
<style type="text/tailwindcss">
  @theme {
    --font-sans: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    --font-serif: ui-serif, Georgia, 'Times New Roman', serif;
    --font-mono: ui-monospace, 'SF Mono', Menlo, monospace;
  }
</style>
```

### Design tokens via `@theme`
Define semantic color tokens in the `@theme` block so Tailwind generates utility classes (`bg-surface`, `text-muted`, `border-border`, `bg-accent`, `text-heading`, etc). This eliminates custom CSS entirely — all styling happens through token-aware utility classes.

See the full palette definition under **Theme support** below (light + dark variants are required).

### Scannable layout
- **TL;DR box first** — one-paragraph summary with a colored left border, placed above the fold. Use a `border-l-4 border-l-accent` card.
- **Numbered sections** — sequential (`01`, `02`...) with clear headings, generously spaced.
- **Chunk content** — use `<details>` for secondary detail, tabbed panes for alternate views, short paragraphs (max 3 sentences).
- **Color-code** — use severity badges (`.text-success`, `.text-danger`, `.text-warn` backgrounds) on risks, findings, and statuses.

### Responsive
Always use Tailwind responsive prefixes: `sm:`, `md:`, `lg:`. Add `overflow-x-auto` on code blocks, tables, and diagrams. The file must be readable on a phone.

### Theme support (required)
Every generated HTML file must include a floating theme toggle in the bottom-right corner. Use the **design token approach** (not `dark:` utility classes) — define colors once in `@theme` as semantic tokens, then override them under `[data-theme="dark"]`.

**Colors must always be defined as two palettes** — light (default) and dark:

```html
<style type="text/tailwindcss">
  @theme {
    --color-bg: #FAF9F5;
    --color-surface: #FFFFFF;
    --color-text: #3D3D3A;
    --color-heading: #141413;
    --color-muted: #87867F;
    --color-border: #D1CFC5;
    --color-subtle: #F0EEE6;
    --color-accent: #D97757;
    --color-success: #788C5D;
    --color-danger: #B04A3F;
    --color-warn: #B89B6E;
    --font-sans: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    --font-serif: ui-serif, Georgia, 'Times New Roman', serif;
    --font-mono: ui-monospace, 'SF Mono', Menlo, monospace;
  }

  [data-theme="dark"] {
    --color-bg: #141413;
    --color-surface: #1E1E1C;
    --color-text: #D1CFC5;
    --color-heading: #FAF9F5;
    --color-muted: #87867F;
    --color-border: #3D3D3A;
    --color-subtle: #2A2A28;
    --color-accent: #E28A6E;
    --color-success: #8EA86A;
    --color-danger: #C45A4E;
    --color-warn: #C5A46E;
  }
</style>
```

**The colors above are one example.** Choose a palette that fits the content domain (teal for healthcare, navy for finance, sepia for history, etc). Keep the token names semantic but change the hex values to match the topic. Both light and dark palettes must be defined.

**Toggle button** — place at the end of `<body>`. Cycles system → light → dark. Starts on system preference, state lives in memory only (these are throwaway files, no need for persistence):

```html
<button id="theme-toggle"
  class="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-surface border border-border shadow-lg
         flex items-center justify-center text-sm hover:scale-110 transition-transform cursor-pointer"
  aria-label="Toggle theme">
</button>
<script>
(function () {
  var themes = ['system', 'light', 'dark'];
  var icons = { system: '◐', light: '☀', dark: '☾' };
  var current = 'system';

  function apply(t) {
    if (t === 'system') {
      document.documentElement.setAttribute('data-theme',
        window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    } else {
      document.documentElement.setAttribute('data-theme', t);
    }
    document.getElementById('theme-toggle').textContent = icons[t];
  }

  apply(current);

  document.getElementById('theme-toggle').addEventListener('click', () => {
    var idx = themes.indexOf(current);
    current = themes[(idx + 1) % themes.length];
    apply(current);
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (current === 'system') apply('system');
  });
})();
</script>
```

This makes every file themable with no `dark:` class proliferation — just semantic tokens that switch values.

---

## Use cases & patterns

This skill is **universal** — it works for any topic: coding, science, history, business, law, education, health, etc. The patterns below apply regardless of subject matter.

### 1. Exploration & Planning
- Side-by-side grid for comparing approaches, theories, or strategies
- Milestone timeline with dots and connecting lines
- Inline SVG diagrams (process flows, causal chains, systems)
- Data tables and inline visualizations
- Risk/uncertainty table with severity tags
- Open-questions section at the bottom

### 2. Reports, Research & Learning
- Collapsible step-by-step walkthrough of a process or chain of events
- Tabbed content for different perspectives, eras, or data sources
- Callout box pattern for important notes
- FAQ at the bottom
- Use inline SVG for scientific diagrams, maps, anatomical illustrations, chemical structures, or any domain-specific visual

### 3. Code Review
- PR header: branch, author, +/− stats, description
- Risk map: horizontal chip list linking to file sections, color-coded
- Annotated diffs with inline comments
- Low-risk files in collapsed `<details>`
- Suggested next steps checklist

### 4. Design & Prototyping
- Visual comparisons (UI designs, architectural styles, color palettes)
- Component or element grids showing all variants in one view
- Design decision matrices
- Interactive what-if calculators or animation sandboxes with sliders

### 5. Slide Decks
- `<section>` tags for slides, minimal inline JS for left/right arrow navigation.

### 6. Diagrams & Visualizations
- Inline SVG with Tailwind's `fill-*` and `stroke-*` utility classes.
- Include `<marker>` defs for arrows.
- Clickable nodes: `<a>` wrapping SVG elements that scroll to detail sections.
- Works for any domain: phylogenetic trees, geological timelines, anatomical diagrams, chemical structures, mathematical graphs, economic charts, historical maps, system architectures.

---

## Reusable Tailwind patterns

**TL;DR box:**
```html
<div class="bg-surface border border-border border-l-4 border-l-accent rounded-xl p-5">
  <b>TL;DR</b> — summary paragraph here.
</div>
```

**Severity badge:**
```html
<span class="text-xs font-mono font-semibold px-2 py-0.5 rounded-lg bg-danger/15 text-danger">HIGH</span>
<span class="text-xs font-mono font-semibold px-2 py-0.5 rounded-lg bg-warn/20 text-warn">MED</span>
<span class="text-xs font-mono font-semibold px-2 py-0.5 rounded-lg bg-success/15 text-success">LOW</span>
```

**Collapsible section:**
```html
<details class="border border-border rounded-xl bg-surface overflow-hidden mb-4">
  <summary class="cursor-pointer px-5 py-4 font-serif text-lg text-heading flex items-center gap-2">
    Step name
    <span class="ml-auto text-xs font-mono text-muted">source reference (optional)</span>
  </summary>
  <div class="px-5 pb-5">...</div>
</details>
```

**Tab pane (minimal JS):**
```html
<div class="border border-border rounded-xl bg-surface overflow-hidden" data-tabs>
  <div class="flex border-b border-border bg-subtle">
    <button class="px-4 py-2.5 text-xs font-mono text-muted border-r border-border data-[on]:bg-surface data-[on]:text-heading data-[on]:border-b-2 data-[on]:border-b-accent" data-t="0">Tab A</button>
    <button class="px-4 py-2.5 text-xs font-mono text-muted border-r border-border data-[on]:bg-surface data-[on]:text-heading data-[on]:border-b-2 data-[on]:border-b-accent" data-t="1">Tab B</button>
  </div>
  <pre class="hidden p-5 text-sm font-mono text-text data-[on]:block overflow-x-auto" data-tab="0">...</pre>
  <pre class="hidden p-5 text-sm font-mono text-text data-[on]:block overflow-x-auto" data-tab="1">...</pre>
</div>
```

**Tab pane JS** (include once at bottom of `<body>`):
```js
document.querySelectorAll('[data-tabs]').forEach(b => {
  const btns = b.querySelectorAll('button'), panes = b.querySelectorAll('pre');
  btns.forEach(btn => btn.addEventListener('click', () => {
    btns.forEach(x => { x.removeAttribute('data-on'); });
    panes.forEach(x => { x.removeAttribute('data-on'); });
    btn.setAttribute('data-on', '');
    panes[+btn.dataset.t].setAttribute('data-on', '');
  }));
});
```

**Data summary strip (4-across stat cards):**
```html
<div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
  <div class="bg-surface border border-border rounded-xl p-5">
    <div class="text-xs font-mono uppercase tracking-wider text-muted mb-1.5">Effort</div>
    <div class="text-lg font-semibold text-accent">~2 weeks</div>
  </div>
</div>
```

---

## Reference template

When structuring output, inspect the bundled template to understand visual conventions (responsive grid, typography scale, spacing rhythm, color usage):

- `templates/feature-explainer.html` — Reports, research, how-it-works explainers (any topic)

Adapt its structure to your domain — replace code snippets with data tables, architecture diagrams with scientific illustrations, etc.
