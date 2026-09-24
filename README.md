# thirdfloor314.github.io

My personal portfolio — [thirdfloor314.github.io](https://thirdfloor314.github.io)

Plain HTML, CSS and a little vanilla JavaScript. No framework, no build step, no
dependencies: GitHub Pages serves these files exactly as they are.

```
index.html      the whole page
styles.css      design tokens + layout (light/dark, responsive)
main.js         theme toggle, scroll reveals, demo playback
assets/         beatslides demo clip (webm + mp4) and poster frame
```

## Editing

Open `index.html` and edit the text. Sections are marked with comments
(`<!-- ── hero ── -->` and so on). Adding a project means copying one
`<article class="card">` block in the projects grid.

Colours, spacing and fonts are all CSS custom properties at the top of
`styles.css`; `--accent` changes the highlight colour everywhere.

## Preview locally

```bash
python3 -m http.server -d . 8000   # then open http://localhost:8000
```

Pushing to `main` publishes it.
