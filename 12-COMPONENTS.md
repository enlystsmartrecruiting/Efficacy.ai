# 12 — Components (spec)

Phase 1 documents grammar; HTML partials ship in phase 2.

> **★ Ontology:** [VISION.md](VISION.md) — craft expresses Ecosystem = Enlystnow; copy stays practice-native.

## Invention & Enlystnow Ecosystem craft

Practice-page components must implement patterns from the **locked 16-invention craft stack** — not generic card grids.

| Pattern | Component hook | DS doc |
|---------|----------------|--------|
| Atmosphere | `.hero-atmosphere` + orbs | [INVENTION_MANDATE §4](docs/INVENTION_MANDATE.md) |
| Chrome windows | `.live-card`, `.live-pan` | same |
| Door planes | `data-door` + `.door-plane` | [07-DOORS.md](07-DOORS.md) |
| Scroll reveal | `.rv` / `.rv.on` | [INVENTION_MANDATE §4](docs/INVENTION_MANDATE.md) |
| Bento / spine / ticker / himat / telemetry | see manifest | [patterns/craft-stack.json](patterns/craft-stack.json) |

Full law: **[docs/INVENTION_MANDATE.md](docs/INVENTION_MANDATE.md)**.  
Live CSS: `patterns/ecosystem-craft.css`. Motion: `patterns/ecosystem-motion.js`.  
Glossary: `patterns/craft-stack-glossary.css`. Preview: `preview/ds-index.html`.

## enlystnow.com shell

1. **Header** — enlyst lockup; primary recruiting nav; link to **Ecosystem** (`/ecosystem/`); path map entry.  
2. **Path map** (`/paths/` or mega-nav) — 4 practices (absolute URLs to other hosts) + 18 doors with **unique door colors**.  
3. **Footer** — practices + doors + Framework method link; does not brand the site as Enlystnow.  
4. **CTA to Ecosystem** — one strong entry (“Experience the ecosystem”).

## Building blocks

| Component | Notes |
|-----------|--------|
| Practice chip | `data-arm`; 3px top border in practice accent |
| Door card / plane | `data-door`; unique `--door-NN`; `--ease-door` hover |
| Eyebrow rule | 28×1.5px accent bar (`.eyebrow-rule`) |
| Framework badge | Static; never spins |
| Intensity root | `data-intensity` **required on `<html>`**; a stage wrapper may override for one sub-region |
| Wordmark | Instrument 400 · `font-synthesis: none` · nav-only on practice pages |

## Cross-domain

Always absolute HTTPS, e.g. `https://enlybiz.com/`, `https://enlysoft.net/`.
