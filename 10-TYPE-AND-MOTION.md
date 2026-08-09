# 10 — Type and motion

> **★ Ontology:** [VISION.md](VISION.md)  
> **Invention context:** Motion tiers and type rules serve the locked craft stack. See [docs/INVENTION_MANDATE.md](docs/INVENTION_MANDATE.md) §4 and [patterns/craft-stack.json](patterns/craft-stack.json). Every public enlyst page must deploy **Enlystnow Ecosystem–level** motion (atmosphere, reveals, chrome) — not static brochure layouts. (Legacy shelf name: Showreel.)

## Type

| Role | Family | Token |
|------|--------|-------|
| Display / H1–H3 | Instrument Serif | `--font-serif` — **400 only on brand wordmark** (y-ring bug if heavier) |
| Wordmark | Instrument Serif 400 | `--font-wordmark` · `font-synthesis: none` |
| UI / body | Inter | `--font-sans` |
| Code / micro labels | DM Mono | `--font-mono` |

Load via `tokens/fonts.local.css` only — **no Bunny / Google Fonts CDN** on production.  
**Static logo**; motion elsewhere (orbs, reveals, live-pan, ticker, spine pulse — never Framework badge spin).

## Motion intensity

| Tier | Where |
|------|--------|
| `calm` | Recruiter, docs, forms, dense product UI |
| `standard` | Default enlyst / practice marketing pages |
| `cinematic` | **`/ecosystem/` only** (rare demos) |

- Framework badge: **never spins**.  
- `prefers-reduced-motion: reduce` forces calm-equivalent tokens.  
- Door hover easing: `--ease-door` (`cubic-bezier(0.16, 1, 0.3, 1)`).  
- Implementation: [patterns/ecosystem-motion.js](patterns/ecosystem-motion.js) + keyframes in [patterns/ecosystem-craft.css](patterns/ecosystem-craft.css).
