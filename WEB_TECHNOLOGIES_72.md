# Enlyst Design System — Web Technologies (72-page future)

**Status:** Documentation only (Jul 2026)  
**Audience:** Anyone remaking, aligning, or extending the ~72-page Enlystnow ecosystem  
**Companions:** `README.md` · `MOTION_AND_ATMOSPHERE.md` · `ENLYST_DESIGN_SYSTEM_PAPER.html` · `ENLYSTNOW_MOVING_LOGO_A_TO_Z.html`  
**Page library today:** `../websites/deploy-72/` (+ Showreel, `enlystnow-com`, brand Pages)

This note records **which web technologies the Design System already rests on**, and **which to incorporate later** so a full ~72-page set stays coherent, fast in Pakistan, and true to intensity rules (calm / standard / cinematic).

---

## 1. Goal for ~72 pages

| Need | Implication for tech |
|------|----------------------|
| One family across umbrella, divisions, Foundation, Academy, GovTech, articles, contact, etc. | Shared CSS tokens + shared nav/footer shells — not 72 one-off stacks |
| Mix of marketing heroes and denser content pages | Most pages = calm/standard; cinematic only on showreel / launch heroes |
| Rich footer linking many destinations | Native Popover / Anchor (or one shared mega-footer component) — avoid per-page JS positioning |
| Sector / division doors that resize in grids | Container queries on cards/bento cells |
| Pakistan-reliable fonts & CDN | Bunny Fonts (already); prefer same for any future icon/font CDN |
| Recruiter / product surfaces stay sacred | No cinematic particle/star fields in product chrome |
| file:// and static-host friendly where possible | Prefer HTML + CSS + small vanilla JS for marketing; React where the app already is |

---

## 2. Baseline stack (already Design System)

Use these on **every** page unless there is a documented exception.

| Layer | Technology | Where it lives | 72-page rule |
|-------|------------|----------------|--------------|
| Tokens | CSS custom properties | `colors_and_type.css` | One import path (or shared build) for all pages |
| Type | Instrument Serif · Inter · DM Mono via Bunny Fonts | same CSS `@import` | No Google Fonts swap without review |
| Division accent | `data-division` / `.scope-*` | same CSS | Set once per page or shell |
| Layout motifs | Eyebrow rule · 3px top-border cards | components + CSS | Reuse; don’t invent new card chrome |
| UI icons | Lucide (`lucide-react` or UMD) | React app / HTML prototypes | Prefer Lucide over emoji |
| Brand marks | SVG (sacred originals) | `assets/logos/` | Copies only in pages; never edit originals |
| Product motion | ≤220ms, `cubic-bezier(0.22, 0.61, 0.36, 1)` | README animation section | Default for all content pages |
| Demo motion | Intensity tiers + CSS-3D mark | `motion_tokens.css` · Showreel | Opt-in only |
| Markup | Static HTML5 (marketing) · React+Vite+TS (app) | deploy-72 / enlyst-smart | Don’t force React onto every brochure page |

---

## 3. Surface tiers → technology budget

Assign each of the ~72 pages a **surface tier**. Tech follows the tier.

| Tier | Typical pages | Allowed atmosphere tech | Default intensity |
|------|---------------|-------------------------|-------------------|
| **A · Product / Recruiter** | Recruiter OS, dashboards, forms | Micro-interactions only | `calm` |
| **B · Content / docs** | Articles, about, philosophy, values, policies | None or soft section fade | `calm` |
| **C · Marketing standard** | Division landings, services, Safe Zone, contact | Optional subtle parallax / glow on CTAs | `standard` |
| **D · Hero / showreel** | Umbrella mother, launch splash, Atmosphere Lab | CSS-3D logo, showering stars, particles, View Transitions | `cinematic` (toggle) |
| **E · Framework** | Framework badge pages | Brass glow only; **no spin** | static |

---

## 4. Technologies to incorporate (recommended for the 72)

Documented for future adoption — **not all required on day one**. Prefer native platform APIs over heavy frameworks for marketing pages.

### 4.1 Shared shell & navigation (high priority for 72)

| Technology | Why for 72 pages |
|------------|------------------|
| **Shared nav + mega-footer partial** (SSI, build include, or small JS fetch of a fragment) | One place to maintain ~72 links; footer stays “super rich” without 72 copy-paste bugs |
| **Native Popover API** | Accessible mega-menus / footer columns without custom overlay stacks |
| **CSS Anchor Positioning** | Menus and tooltips tied to triggers across dense footers |
| **`<dialog>`** | Contact / CV / consent modals with one pattern |

### 4.2 Layout & responsiveness

| Technology | Why for 72 pages |
|------------|------------------|
| **CSS Container Queries (`@container`)** | Sector doors, ServiceCards, bento cells adapt by *slot* (footer column vs hero grid) |
| **`dvh` + `env(safe-area-inset-*)`** | Consistent heroes and sticky bars on mobile |
| **CSS Subgrid** (progressive) | Align card titles/meta across uneven sector grids |

### 4.3 Colour & theming

| Technology | Why for 72 pages |
|------------|------------------|
| **OKLCH in tokens** (alongside hex) | Cleaner 100/58/26 mark ramps and pale tints across divisions |
| **`color-mix()`** | Hover/pale variants without hand-maintaining dozens of hexes |
| Keep **`data-division`** as the accent switch | Already scales to every page |

### 4.4 Motion & atmosphere (gated)

| Technology | Tier | Notes |
|------------|------|--------|
| **CSS-3D / dual-face mark** | D | Settled on Showreel — Enlystnow is the living hero |
| **Showering stars / meteor field** (Canvas 2D first) | D only | Division-tinted via `--glow-color-rgb`; behind the mark; off in calm / reduced-motion |
| **Scroll-driven animations** (`animation-timeline: view()`) | C–D | Section reveals without IntersectionObserver sprawl; respect reduced-motion |
| **View Transitions API** | C–D | Soft page/division swaps when linking among the 72 |
| **WebGL / WebGPU particles** | Lab → D only | Only if Canvas 2D cannot deliver; always provide Canvas/CSS fallback |
| **Rive or Lottie** | Rare D | One branded “door open” moment max — not per section |

### 4.5 Performance & delivery (matters at 72×)

| Technology | Why for 72 pages |
|------------|------------------|
| **One shared CSS token file** (+ page-specific thin sheets) | Avoid 72× duplicated brand CSS |
| **Native lazy `loading="lazy"`** + explicit dimensions | Image-heavy division pages |
| **`content-visibility: auto`** | Long article / multi-section pages |
| **Static hosting first** | Most of deploy-72 should stay static-export friendly |
| Cap cinematic JS | One atmosphere context per page; pause when `document.visibilityState === 'hidden'` |

### 4.6 Accessibility (non-optional across 72)

| Technology / practice | Rule |
|-----------------------|------|
| **`prefers-reduced-motion`** | Force calm — no stars, no spin, no scroll timelines |
| **Explicit Intensity control** | On any page that ships cinematic FX |
| Semantic landmarks + skip link | Shared shell |
| Focus: 2px `var(--accent)` outline | Already DS |

---

## 5. Candidate: showering-stars background

**Status:** Proposed Atmosphere Lab experiment (not production-default).

| Spec | Decision |
|------|----------|
| Purpose | Cinematic sky energy *behind* Enlystnow |
| Primary tech | Canvas 2D meteor streaks (lightweight, Pakistan-friendly) |
| Colour | `rgba(var(--glow-color-rgb), …)` + optional brass spark |
| Intensity | Off in `calm` · sparse dust in `standard` · shower in `cinematic` |
| Placement | Layer 3 (Atmosphere) — never above Information or the logo hero |
| Reduced motion | Hard off |
| 72-page use | **At most** umbrella mother + 1–2 launch pages; not on articles, about, Recruiter, or Framework badge |

Suggested lab path when built: `experiments/atmosphere-lab/06-showering-stars.html`.

---

## 6. Do not make part of the Design System default

These may appear in one-off demos; they must **not** become the baseline for 72 pages:

- Full-viewport continuous `filter: blur`
- Autoplay background video as the brand sky
- Particle / star fields as the *main* hero (Enlystnow mark owns motion)
- Random neon purple glow unrelated to division tokens
- Per-page unique CSS frameworks (Bootstrap/Tailwind one-offs that ignore tokens)
- Editing sacred logo SVGs in place
- Cinematic intensity as Recruiter or docs default

---

## 7. Suggested rollout for the 72

1. **Shell first** — shared header (unique links) + mega-footer wired to the page inventory.  
2. **Tokens everywhere** — every remade page imports `colors_and_type.css` (and motion tokens only if tier C/D).  
3. **Container queries + Popover/Anchor** — for dense footer and sector grids.  
4. **View Transitions** — once internal linking among remade pages is stable.  
5. **Showering stars** — lab → optional Showreel / umbrella only.  
6. **OKLCH / color-mix** — token migration when touching `colors_and_type.css` next.

---

## 8. Quick decision tree

```
New page in the ~72?
├─ Recruiter / app chrome     → Baseline only · calm · no stars
├─ Article / about / policy   → Baseline · calm · shared shell
├─ Division / services        → Baseline + container queries · standard
├─ Umbrella / launch hero     → Baseline + CSS-3D logo · cinematic optional
│                                └─ showering stars only if intensity = cinematic
└─ Framework badge page       → Baseline · gold · static mark · no spin
```

---

## 9. Related paths

| Path | Role |
|------|------|
| `colors_and_type.css` | Settled tokens |
| `motion_tokens.css` | Experimental motion / glow |
| `MOTION_AND_ATMOSPHERE.md` | When FX are allowed |
| `../Showreel/` | Cinematic reference implementation |
| `../websites/deploy-72/` | Current ~72-page library to align |
| `../websites/enlystnow-com/` | Local remake subset |
| `ENLYST_DESIGN_SYSTEM_PAPER.html` | Whole-system narrative |
| `ENLYSTNOW_MOVING_LOGO_A_TO_Z.html` | Moving logo tech record |

---

*Update this document when a proposed technology is promoted from lab → DS default, or when the 72-page inventory gains a new surface tier.*
