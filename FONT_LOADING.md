# Font loading standard — and the curly-y fix

**Status:** Binding · DS v1.1.0 · Updated 2026-08-06
**Role:** the complete font contract: which families, which weights, how they load, and the exact mechanism of the wordmark descender bug.

> ⚠ **This document records the one open blocker in this design system.** The `@font-face` declarations in [`../tokens/fonts.local.css`](../tokens/fonts.local.css) point at ten `.woff2` files that are **not yet on disk**. Everything else in the DS is complete. See §5.

---

## 1. The three families

| Role | Family | Weights loaded | Token |
|------|--------|----------------|-------|
| Display, H1–H3, wordmark | **Instrument Serif** | 400 normal, 400 italic — **nothing else** | `--font-serif`, `--font-wordmark` |
| UI, body, H4 | **Inter** | variable 100–900 | `--font-sans` |
| Micro labels, kickers, telemetry labels, code | **DM Mono** | 400, 500 | `--font-mono` |

No fourth family. No icon font.

---

## 2. The wordmark rule (the curly-y fix)

**The rule:** the wordmark renders in Instrument Serif at **weight 400 only**, with font synthesis disabled.

```css
.brand-wordmark,
[class*="wordmark"] {
  font-family: var(--font-wordmark);
  font-weight: 400;
  font-synthesis: none;
  font-synthesis-weight: none;
}
```

### Why — the actual mechanism

Instrument Serif ships **one upright weight (400)** and one italic. When CSS asks for a heavier weight — `font-weight: 500`, `600`, `bold`, or an inherited `<strong>`/`<h1>` default — the browser cannot select a real bold face. It **synthesises** one by smearing or double-drawing the outline.

The lowercase **y** in *enlyst* has a curved, tightly-curled descender that nearly closes on itself. Synthetic emboldening thickens the stroke until the gap inside that curl fills in, and the descender renders as a **solid ring or blob** instead of an open curl. The word reads as *enlyst* with a broken glyph — the defect the user has repeatedly rejected.

`font-synthesis: none` instructs the browser to refuse the fake bold and fall back to the real 400 face. Setting `font-weight: 400` explicitly means it never asks in the first place. Both are applied, belt and braces, because inherited heading weights are easy to reintroduce.

### The full enforcement set

`../patterns/ecosystem-craft.css` also neutralises three other ways the glyph gets damaged:

```css
-webkit-text-stroke: 0 !important;  /* faux-bolding via stroke */
text-shadow: none !important;        /* glow bleeding into the curl */
filter: none !important;             /* drop-shadow doing the same */
```

### Hard rules

1. **Never** a weight above 400 on the wordmark — not via CSS, not via `<strong>`, not via an inherited heading style.
2. **Never** `-webkit-text-stroke`, `text-shadow` or `filter` on the wordmark.
3. The wordmark is **static**. No spin, no `markGlow`, no transform animation. Motion belongs to chrome and reveals, never to the brand mark.
4. On practice pages the wordmark appears in the **nav only** — no duplicate after the header.
5. `.framework-badge` never animates.
6. **Verify by screenshot, never by assumption.** Reading the CSS is not verification; the y must be looked at.

### How to verify

1. Open [`../preview/ds-index.html`](../preview/ds-index.html) → section **03 · living-brand-nav-only**.
2. Confirm the font-status banner reports Instrument Serif as **loaded** (see §5 — if it reports a fallback, the y you are looking at is Georgia's and proves nothing).
3. Zoom to at least 400% on the word `enlyst`.
4. The descender of the **y** must be an **open curl** with visible negative space inside the hook. A closed ring, a filled blob, or a doubled edge means synthesis is happening somewhere up the cascade.

---

## 3. Local-only loading

Fonts load from local `.woff2` files. **No Bunny, no Google Fonts, no CDN in production.**

Reasons: the practice hosts must not leak visitor IPs to a font CDN; the wordmark must not flash a synthesised fallback during a CDN round-trip; and offline preview must render truthfully.

Each family is split into `latin` and `latin-ext` subsets with matching `unicode-range` declarations, so a page that never uses extended Latin never downloads that file. `font-display: swap` is set on every face.

**The reference files under [`../_incoming/`](../_incoming/) (e.g. `colors_and_type.css`, `motion_tokens.css`) still carry a Bunny `@import`.** They are historical reference and must never be linked from a page. Only `tokens/fonts.local.css` may be loaded.

---

## 4. Required asset manifest

Ten files, at these exact paths, relative to `Design-Libraries/`:

| # | Path | Family | Weight / style | Subset |
|---|------|--------|----------------|--------|
| 1 | `01-fonts/by-family/Instrument-Serif/instrument-serif-400-latin.woff2` | Instrument Serif | 400 normal | latin |
| 2 | `01-fonts/by-family/Instrument-Serif/instrument-serif-400-latin-ext.woff2` | Instrument Serif | 400 normal | latin-ext |
| 3 | `01-fonts/by-family/Instrument-Serif/instrument-serif-400i-latin.woff2` | Instrument Serif | 400 italic | latin |
| 4 | `01-fonts/by-family/Instrument-Serif/instrument-serif-400i-latin-ext.woff2` | Instrument Serif | 400 italic | latin-ext |
| 5 | `01-fonts/by-family/Inter/inter-variable-latin.woff2` | Inter | variable 100–900 | latin |
| 6 | `01-fonts/by-family/Inter/inter-variable-latin-ext.woff2` | Inter | variable 100–900 | latin-ext |
| 7 | `01-fonts/by-family/DM-Mono/dm-mono-400-latin.woff2` | DM Mono | 400 | latin |
| 8 | `01-fonts/by-family/DM-Mono/dm-mono-400-latin-ext.woff2` | DM Mono | 400 | latin-ext |
| 9 | `01-fonts/by-family/DM-Mono/dm-mono-500-latin.woff2` | DM Mono | 500 | latin |
| 10 | `01-fonts/by-family/DM-Mono/dm-mono-500-latin-ext.woff2` | DM Mono | 500 | latin-ext |

From inside the DS package, `tokens/fonts.local.css` reaches these as `../../01-fonts/by-family/…`.

**Do not add an Instrument Serif file at any weight other than 400.** Having a real 600 on disk would let a stray `font-weight: 600` select a genuine bold face and silently change the wordmark — the rule is one weight, enforced by absence.

---

## 5. Current status — OPEN BLOCKER

**As of 2026-08-04, `Design-Libraries/01-fonts/` contains zero `.woff2` files.** All ten declarations above resolve to 404.

This is a known, tracked, *asset* gap — not a specification gap. It was recorded in `Design-Libraries/INDEX.md` during the compile pass: the 27 candidate font paths found under `by-brand/Audit-Archive` were **OneDrive placeholder stubs, not hydrated on disk**.

### Consequences right now

| Effect | Detail |
|--------|--------|
| Rendering | Every surface falls back — Georgia for serif, `system-ui` for sans, `ui-monospace` for mono |
| Wordmark | Renders in **Georgia**, whose `y` has a plain straight descender. The curly-y bug **cannot be observed or verified** until the real font is present. |
| Metrics | Type scale, letter-spacing and the display clamps were tuned for Instrument Serif; fallback rendering will look wrong and must not be judged as a design defect |
| Specification | Unaffected. Weights, subsets, unicode-ranges and paths are all final and correct. |

### What the DS does about it

1. `tokens/fonts.local.css` stays exactly as it is. It is the **production contract**; its paths are correct and must not be softened to a CDN.
2. [`../tokens/fonts.dev-fallback.css`](../tokens/fonts.dev-fallback.css) exists for **local preview only**. It fetches the three families from a CDN so the wordmark can be inspected before the binaries land. It is `noindex`-surface-only and must never ship.
3. [`../preview/ds-index.html`](../preview/ds-index.html) runs a runtime `document.fonts.check()` probe and renders a visible banner stating whether real Instrument Serif is active. A reviewer therefore always knows whether the y they are looking at is trustworthy.

### Resolution steps

1. Obtain the ten `.woff2` files (subset from the upstream family sources; the file naming above is the DS convention, not an upstream one).
2. Place them at the manifest paths.
3. Reload the preview and confirm the banner flips to **loaded**.
4. Screenshot-verify the y at ≥400% zoom.
5. Remove any `fonts.dev-fallback.css` link from any surface that has one.
6. Bump [CHANGELOG.md](CHANGELOG.md).

Until step 3 passes, **no page may be declared elected on the basis of its typography.**
