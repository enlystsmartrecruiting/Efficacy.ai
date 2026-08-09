# 09 — Tokens

> **★ Ontology:** [VISION.md](VISION.md) — tokens serve Framework · practices · Ecosystem = Enlystnow · 18 doors.
> **This file is the token *index*.** The values live in CSS; this document explains what exists, what it means, and what must never change silently.

## Elected source of truth

| File | Role | Layer |
|------|------|-------|
| [`tokens/fonts.local.css`](tokens/fonts.local.css) | `@font-face` only — local files, **no CDN** | 1 |
| [`tokens/ecosystem.tokens.css`](tokens/ecosystem.tokens.css) | All custom properties + base typography utilities | 2 |
| [`tokens/doors.js`](tokens/doors.js) | Machine registry for the 18 doors | 2 (data) |
| [`patterns/ecosystem-craft.css`](patterns/ecosystem-craft.css) | The 16 craft patterns | 3 |
| [`patterns/ecosystem-motion.js`](patterns/ecosystem-motion.js) | Pattern behaviour | 4 |

**Upstream baseline (reference only, never imported):** the Ecosystem snapshot token files, mirrored at [`_incoming/colors_and_type.css`](_incoming/colors_and_type.css) and [`_incoming/motion_tokens.css`](_incoming/motion_tokens.css), originals at `../06-showreel-snapshot/from-F-Enlystnow-showreel/` (and, if present, `../03-tokens-css/canonical/`). The DS token file is a **superset**: it keeps every upstream token name, adds the 18 doors, `--font-wordmark`, `--ease-door`, `--band-*` and the practice-named aliases. The snapshot files still carry a Bunny `@import` and must never be linked from a page.

## Import order — never reorder

```html
<link rel="stylesheet" href="/00-enlyst-ds/tokens/fonts.local.css" />
<link rel="stylesheet" href="/00-enlyst-ds/tokens/ecosystem.tokens.css" />
<link rel="stylesheet" href="/00-enlyst-ds/patterns/ecosystem-craft.css" />
<script defer src="/00-enlyst-ds/tokens/doors.js"></script>
<script defer src="/00-enlyst-ds/patterns/ecosystem-motion.js"></script>
```

`doors.js` is only needed on pages that build door lists programmatically. Rationale and the full dependency graph: [docs/CONVENTIONS.md](docs/CONVENTIONS.md).

Paths inside `fonts.local.css` are relative **to that file**: `../../01-fonts/by-family/…`, i.e. `Design-Libraries/01-fonts/`. See [docs/FONT_LOADING.md](docs/FONT_LOADING.md) for the current asset status — **the local font files are not yet on disk**, which is the one open blocker in this DS.

## Token families

| Family | Names | Notes |
|--------|-------|-------|
| **Practices** | `--arm-enlyst` `--arm-enlysum` `--arm-enlybiz` `--arm-enlysoft` (+ `-58` `-26` `-pale`) | Legacy aliases `--hr-blue` `--finance-green` `--biz-amber` `--tech-purple` resolve to these |
| **Framework** | `--admin-framework` `--framework-gold` `--admin-framework-pale` `--gold-pale` | `#C4A24A` |
| **Ecosystem / institutional** | `--admin-enlystnow` `--ecosystem-ink` `--admin-enlystnow-pale` `--ecosystem-pale` | `#2A2E35` — deliberately not a fifth consumer accent |
| **18 doors** | `--door-01` … `--door-18` (+ `-pale` `-58` `-26`) | Each unique in base **and** pale. [07-DOORS.md](07-DOORS.md) |
| **Neutrals** | `--obsidian` `--ink` `--ink-2` `--ink-3` `--mid-gray` `--white` `--off-white` `--cream` `--light-gray` `--rule` `--tech-dark` | |
| **Semantic fg/bg** | `--fg-1..3` `--fg-inverse` `--bg-page` `--bg-surface` `--bg-elevated` `--bg-dark` `--border` `--border-strong` | Prefer these over raw neutrals |
| **Accent (resolved)** | `--accent` `--accent-58` `--accent-26` `--accent-pale` | Defaults to enlyst; remapped by `data-arm` / `data-door` |
| **Status** | `--success` `--warning` `--danger` `--info` (+ `-pale`) | |
| **Type families** | `--font-serif` `--font-sans` `--font-mono` `--font-wordmark` | |
| **Type scale** | `--fs-display` `--fs-h1..h4` `--fs-body-lg/body/body-sm` `--fs-caption` `--fs-eyebrow` `--fs-micro` | |
| **Rhythm** | `--lh-tight/snug/base/relaxed` · `--ls-display/h2/h3/eyebrow/mono` | |
| **Space** | `--space-1..32` (4px base) | |
| **Radius** | `--radius-xs..3xl` `--radius-pill` | |
| **Shadow** | `--shadow-xs/sm/md/lg` `--shadow-accent` | |
| **Easing / duration** | `--ease-out` `--ease-door` `--ease-in-out` · `--dur-fast/base/slow` | `--ease-door` is DS-added, for door theatre |
| **Layout** | `--container-max` `--container-wide` `--gutter` `--gutter-mobile` `--nav-height` | |
| **Sky → void** | `--sky-0..3` `--mid-1..2` `--deep-1..3` `--void` `--sky-void` | Elected gradient canvas |
| **Glass** | `--glass-bg/border/blur` `--glass-light-*` `--glass-blue-*` | |
| **Bands** | `--band-cream-*` `--band-dark-*` `--band-sky-*` `--band-theatre-*` | Drives pattern 15 |
| **Motion** | `--motion-intensity` `--motion-scale` `--glow-*` `--parallax-*` `--particle-*` `--motion-dur-*` `--spin-duration` | Governed by `data-intensity` |

## Scope hooks

| Hook | Sets | Status |
|------|------|--------|
| `[data-arm="…"]` | `--accent*`, `--glow-color`, `--glow-color-rgb` | Canonical |
| `[data-division="…"]`, `.scope-…` | same | Legacy alias for snapshot CSS |
| `[data-door="NN"]`, `[data-door="slug"]` | `--accent*` | Canonical |
| `[data-intensity="…"]` | motion tier tokens | Canonical, required on `<html>` |
| `[data-register="…"]` | **nothing** | Semantic only, by design |

## Utility classes shipped by the token layer

Typography — `.display` `.h1` `.h2` `.h3` `.h4` `.body-lg` `.body` `.body-sm` `.caption` `.serif` `.serif-i` `.mono` `.code-inline` `.eyebrow` `.eyebrow-mono` `.eyebrow-rule`

Surface — `.sky-void` `.glass` `.glass-light` `.glass-blue` `.door-swatch` `.framework-badge`

Glow — `.glow-soft` `.glow-mid` `.glow-strong` `.glow-brass` `.text-glow` `.mark-glow`

Wordmark — `.brand-wordmark` / `[class*="wordmark"]`: Instrument Serif **400 only**, `font-synthesis: none`. See [docs/FONT_LOADING.md](docs/FONT_LOADING.md).

## Intentional duplication (not a contradiction)

The wordmark, glass and `.framework-badge` rules appear in **both** `tokens/ecosystem.tokens.css` and `patterns/ecosystem-craft.css`. This is deliberate: the token layer must be usable standalone, and the pattern layer re-declares those three with `!important` to defeat inherited site CSS. Both copies read the **same custom properties**, so their values cannot diverge. Change values in the token file only.

## Hard rules

1. **Never** reuse one accent across multiple doors.
2. **Never** raise the wordmark above weight 400.
3. **Never** import a font CDN in production.
4. **Never** hand-pick a `-58` / `-26` alpha value — derive it from the base hex.
5. Prefer semantic tokens (`--fg-2`, `--bg-surface`) over raw neutrals in new work.
