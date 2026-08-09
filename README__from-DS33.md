# Enlyst Design System

The Enlyst brand is an **operating-partner ecosystem** for early-stage businesses, headquartered in Lahore, Pakistan. It is structured as one umbrella platform, one adoption standard, and four specialist operating divisions — each with its own hue but the same mark geometry.

```
                          ENLYSTNOW
                       (umbrella platform)
                              │
              ┌───────────────┼───────────────┐
              │               │               │
        ENLYST FRAMEWORK   FOUR DIVISIONS    LEGAL ENTITY
        (adoption badge)        │            "Enlyst Smart
                                │             Recruiting Pvt Ltd"
              ┌───────┬─────────┴─────────┬───────┐
              │       │                   │       │
           enlyst   enlysum            enlybiz  enlysoft
           HR &     Finance &          Marketing Cloud &
           Talent   Accounting         & Growth Technology
           #2D5BE3  #1A7A4A            #C4620A  #6B3FA0
```

> **Legal entity vs brand.** "Enlyst Smart Recruiting Pvt Ltd" appears only on contracts, FBR filings, SECP submissions, and payroll. It never appears on consumer-facing surfaces. Use brand marks for everything else.

---

## Sources

This system was reverse-engineered from the following materials, all attached read-only at `Enlyst.org/` (mounted via File System Access):

| Source | Path | What's in it |
|---|---|---|
| **Brand guidelines** (canonical) | `Enlyst.org/enlyst/enlyst-brand-guidelines.html` | The authoritative 6-chapter brand book — logos, colour, type, usage rules, do/don'ts |
| **Logo package** | `Enlyst.org/Media/enlyst-logo-package-v3.html` | Every SVG variant for the five entities — download buttons, code blocks |
| **Final marketing homepage** | `Enlyst.org/enlyst_homepage_final.html` | Reference for current production visual language |
| **Production codebase (React + Tailwind)** | `Enlyst.org/enlyst-smart/enlystnow/` | shadcn/ui + Vite + TypeScript app; pages in `src/pages/*.tsx` |
| **Sub-brand pages** | `Enlyst.org/Enlysum/`, `Enlyst.org/Enlybiz/`, `Enlyst.org/Enlysoft/`, `Enlyst.org/Enlystnow Parent Umbrella Plateform/` | Division-specific HTML pages + SVGs |
| **Brand SVG library** | `Enlyst.org/libraries/brand/{enlyst,enlysum,enlybiz,enlysoft}/` | PNG and SVG logos |

There is no Figma. There is no public web style guide. The brand guidelines HTML file is the single source of truth.

---

## Index

```
.
├── README.md                  ← you are here
├── colors_and_type.css        ← all design tokens + semantic typography utilities
├── assets/
│   └── logos/                 ← every entity, every variant (SVG)
├── preview/                   ← Design System tab cards (Brand chapter)
├── components/                ← compiled components (<Name>.jsx + .d.ts + @dsCard preview)
│   ├── Button/
│   ├── EyebrowRule/
│   ├── Pill/
│   ├── ServiceCard/
│   └── StatusChip/
├── templates/
│   ├── division-one-pager/    ← Division one-pager template (DivisionOnePager.dc.html)
│   └── smart-recruiter-app/   ← UI kit: enlyst Recruiter OS click-through (SmartRecruiterApp.dc.html)
├── strategy/                  ← strategy briefs (Five Enlyst Commercial Templates)
├── thumbnail.html             ← homepage tile (obsidian + Enlystnow mark + division swatch strip)
└── SKILL.md                   ← Claude Code / Agent Skills-compatible package descriptor
```

---

## Components

Compiled React components (`components/<Name>/`), each with a `.jsx`, a `.d.ts`, and an `@dsCard` preview:

- **Button** — primary / dark / outline / ghost, 3 sizes, optional division accent
- **EyebrowRule** — 28×1.5 px coloured bar + mono micro-label, the brand's section-opener signature
- **Pill** — category chip with a 3 px division-coloured left border
- **ServiceCard** — 3 px division-coloured top border, the brand's strongest card motif
- **StatusChip** — capsule with a coloured status dot (live / queued / blocked / draft / info)

## Templates & UI kits

- **Division one-pager** (`templates/division-one-pager/`) — hero, three service cards, closer; switches copy and accent across all four divisions via a `division` prop
- **Smart Recruiter App** (`templates/smart-recruiter-app/`) — click-through UI kit recreating enlyst's live Recruiter OS: login, pipeline Kanban (sourced → screening → offer → placed), and an anonymised candidate dossier with a competency scorecard. Cross-referenced against the production copy live on enlystnow.com.

---

## Content fundamentals

Enlyst is a **Pakistani operating partner**, not a Silicon Valley SaaS. The copy reflects that: it is **direct, declarative, and slightly combative**. Headlines are confident; body copy is plainspoken.

### Voice

- **You-led, not we-led.** Most sentences begin with the reader's situation or pain. "Feeling shackled by outdated software?" not "We provide software."
- **Active and metaphorical.** The brand leans into battle/shield/army metaphors when energy is needed — "Punch inflation in the face", "Bandaging the battle wounds of business", "Don't let regulations knock you out", "Join the Enlyst army". Use sparingly for emphasis, never as filler.
- **Operating-partner authority.** Beside the combative copy sits cool, operational language — "operating partner", "Safe Zone Build", "operational backbone", "cross-division collaboration", "monthly KPI reviews". The combination is the brand: fight + system.
- **Tasks, not features.** Service cards list outcomes ("Accounting & Bookkeeping", "Talent Acquisition") rather than features.

### Casing

- **Brand names are lowercase** in body and UI: `enlyst`, `enlysum`, `enlybiz`, `enlysoft`. The wordmark in SVG is also lowercase.
- The umbrella is **Enlystnow** (initial cap) as a single word.
- The Framework is **Enlyst Framework**, often written `EF` as a monogram on its hexagonal badge.
- Headlines: sentence case (`Bandaging the battle wounds of business.`), often with a trailing period. Avoid Title Case Marketing Speak.
- Eyebrow labels: ALL CAPS, 0.14em letter-spacing — `INTELLIGENCE LAYER`, `OUR FIGHTING SPIRIT`.

### Person

- Mostly **second person ("you", "your")**. First-person plural ("we") only when describing the team's actions ("we map your business", "we run four workstreams"). Avoid "I".

### Vibe

- **Editorial, not techy.** Long-form pages read more like a print magazine spread than a SaaS landing page. Big serif headlines, generous whitespace, italic emphasis.
- **Concrete numbers.** `1.2M+ PKR Lifetime Value`, `90%+ Retention Target`, `4 mo Safe Zone Duration`, `80% Startup-to-Permanent`. Always with units, often in PKR.
- **Pakistani context is part of the brand.** Contact is `admin@enlystnow.com`, phone `03000 340 036`, address Suite No 202, South Building, Lahore Stock Exchange. Fonts are served via Google Fonts.

### Emoji & specials

- **The brand guidelines do not endorse emoji.** Legacy marketing HTML uses 🛡️ 📈 🤝 ⚡ as inline accents in cards, but the canonical brand book uses **SVG icons and monogram glyphs** instead. Prefer SVG / icon glyphs. Reserve emoji for casual social posts only.
- Use `→` (arrow) and `·` (middle dot) as inline punctuation between meta items: `Suite No 202, South Building, Lahore Stock Exchange, Pakistan`.

### Example copy patterns

> **Eyebrow + serif headline + sub:**
> `INTELLIGENCE LAYER`
> *Data-Driven Decisions.*
> Punch inflation in the face with Enlyst's data-driven strategies. Don't let regulations knock you out — we analyze the market, track performance, and provide insights that keep you ahead of the competition.

> **Service card:**
> `enlysum · Finance Simplified`
> *Finance & Accounting*
> No more late nights deciphering complex regulations or wrestling with spreadsheets. We take care of accounting, payroll, and taxes.

> **Closer:**
> *Ready to stop fighting alone?* Join the Enlyst army.

---

## Visual foundations

### Colour

The system is **one neutral pair + five hues** (four divisions + one prestige gold for the Framework). Hues are used at three opacity levels in the mark (100% / 58% / 26%) and at 100% as UI accents.

| Token | Hex | Role |
|---|---|---|
| Obsidian | `#1A1A1A` | Primary text, dark surfaces |
| Off-White | `#F7F6F3` | **Primary page background** (signature) |
| Cream | `#F4F3F0` | Alt page surface |
| Rule | `#E2E0DB` | Dividers, borders |
| HR Blue | `#2D5BE3` | enlyst |
| Finance Green | `#1A7A4A` | enlysum |
| Biz Amber | `#C4620A` | enlybiz |
| Tech Purple | `#6B3FA0` | enlysoft |
| Framework Gold | `#C4A24A` | Enlyst Framework badge only |
| Tech Dark | `#080C12` | enlysoft dark-first surfaces only |

**Pale UI tints** (`#EEF2FD`, `#EBF5EF`, `#FDF3EC`, `#F2EEF9`) are for badges, hover fills, and pull-quote backgrounds — never in the mark.

### Type

| Family | Use |
|---|---|
| **Instrument Serif** 400 / 400i | All display, H1–H3, pull quotes, division wordmarks (except enlysoft). Italic carries emphasis. |
| **Inter** 300/400/500/600/700 | Body, UI, nav, buttons, captions. |
| **DM Mono** 400/500 | Code, file names, version labels, eyebrow micro-labels, **and the enlysoft wordmark (only exception)**. |

Hero/display tracks **−0.035em letter-spacing**; H2 tracks −0.025em; body is 0; eyebrow uppercase tracks +0.14em.

Recommended sizes: Display 72–88px / H2 40–56px / H3 26–32px / Body large 17–18px / Body 15–16px / Caption 12–13px / Eyebrow 10–11px.

**Fonts ship via Bunny Fonts** (`fonts.bunny.net`) — reliable in Pakistan, unlike `fonts.googleapis.com`. The CSS import is built into `colors_and_type.css`. No toggle: this is the single, permanent font source everywhere in this system.

### Spacing & layout

- 4px base, scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128.
- Section vertical rhythm: **112px** padding-y on desktop, 64px on mobile.
- Container max-width **1200px** (text), **1440px** (full-bleed hero).
- Gutter **64px** desktop, **24px** mobile.
- Nav height **64px**, sticky, with `backdrop-filter: blur(10px)` and a 0.96-alpha cream background.

### Backgrounds

Enlyst is **almost flat**. No gradients in normal use. The aesthetic is:

- **Cream (`#F7F6F3`) as the default page**, with alternating sections in either obsidian (dark) or a slightly cooler cream (`#F0EFEC`) for rhythm.
- **No background images** as decoration; all imagery is editorial photography sitting in defined containers (`border-radius: 10px`, `box-shadow: 0 28px 72px rgba(0,0,0,0.14)`).
- The only "decorative" device is **offset solid colour blocks** behind hero images (10% / 8% opacity of a division hue) — see the hero in the marketing site for the pattern.
- The mark itself acts as a graphic device on dark sections — large, low-opacity, off-screen.

### Cards

- **Border:** 1px solid `#E8E6E1`.
- **Radius:** 10px (general), 8px (compact / table-like).
- **Padding:** 32–36px on desktop cards, 22–28px on dense cards.
- **Shadow:** none at rest. On hover, raise with `box-shadow: 0 8px 32px rgba(0,0,0,0.07)` and `transform: translateY(-3px)`.
- **Identifier device:** division cards carry a **3px coloured top border** in the division hue (`border-top: 3px solid var(--accent)`). This is the strongest motif of the design system.

### Borders & rules

- `1px solid #E2E0DB` is the universal rule.
- Inside cards, sub-dividers use `1px solid #E8E6E1` (lighter).
- On dark sections, use `rgba(232,230,225,0.12)` for ghost rules.
- **Hairline horizontal rules** prefix every section eyebrow label: a 28×1.5px coloured bar (`background: var(--accent)`) with 10px gap before the text. This is the system's most recognizable layout signature.

### Shadows (restrained)

- `--shadow-xs` `0 1px 2px rgba(17,17,17,0.04)` — buttons / inputs
- `--shadow-sm` `0 2px 8px rgba(17,17,17,0.05)` — small floating elements
- `--shadow-md` `0 8px 32px rgba(17,17,17,0.07)` — card hover
- `--shadow-lg` `0 28px 72px rgba(17,17,17,0.14)` — hero imagery
- `--shadow-accent` `0 8px 24px rgba(45,91,227,0.35)` — coloured CTA bubbles (the only saturated shadow)

### Buttons

- **Primary:** division hue background, white text, 4px radius, 14–16px padding-y, 14px font, 500 weight. Hover: `opacity: 0.88`.
- **Secondary / outline:** transparent, 1.5px solid `#E2E0DB`, hover border darkens to `var(--obsidian)`.
- **Dark CTA:** obsidian `#1A1A1A` background, cream text.
- **Nav CTA:** obsidian background, cream text, 9px×20px padding, 4px radius, micro size (12px font).

### Animation

- **Restrained.** No bounce, no scale-up entrances, no parallax.
- All transitions ≤ **220ms** (`--dur-base`) with `cubic-bezier(0.22, 0.61, 0.36, 1)` ease-out.
- Card hover lifts **3px** with shadow fade-in.
- `scroll-behavior: smooth` on the html root for in-page anchors.
- Nav fades on scroll via `backdrop-filter: blur(10px)`.

### Interactive states

- **Hover:** `opacity 0.88` on primary buttons, `opacity 0.82` on dark buttons, `border-color: var(--obsidian)` on outline buttons. Cards lift 3px + soft shadow. Text links change `color: var(--obsidian)` from grey.
- **Press:** opacity drops to 0.7. No transform on press.
- **Focus:** 2px solid `var(--accent)` outline with 2px offset.
- **Disabled:** 50% opacity, no cursor change.

### Transparency & blur

- Used **only** on sticky nav (`backdrop-filter: blur(10px)` over a 0.96-alpha cream background).
- And on the mark itself (58% / 26% stripe opacities — the brand's signature).
- No frosted-glass cards. No translucent overlays elsewhere.

### Imagery

When photography is used (sparingly, mainly hero and analytics sections):
- **Editorial photojournalism** — business professionals, candid environments. No staged stock.
- **Warm-neutral grade.** Slight warm tilt, no heavy filters, full colour (not B&W or duotone).
- **Aspect:** 4:3 to 16:10. Always inside a `border-radius: 10px` container with `--shadow-lg`.
- **Object position** typically `center top` to keep faces in frame.

### Layout rules

- **Sticky nav**, 64px tall, full-width, blurred.
- **Asymmetric hero grids** — `1fr 480px` (left text, right image). Image carries a floating obsidian badge bottom-left and an accent-coloured badge top-right.
- **Metric strips** on dark obsidian — 4 equal columns separated by `1px rgba(232,230,225,0.14)` rules.
- **Stage / process flows** — 3 horizontal cards with a connecting 3px gradient bar across the top and a 15px coloured dot on each card.

---

## Iconography

Enlyst's icon system is **mixed and not yet consolidated**, with a clear preference for SVG.

### Production codebase: lucide-react

The Vite/React app at `enlyst-smart/enlystnow/` uses **[`lucide-react`](https://lucide.dev/)** — the same icon set that ships with shadcn/ui. Examples in `pages/Home.tsx`: `Shield`, `Users`, `TrendingUp`, `Wrench`, `Star`, `ArrowRight`, `CheckCircle`. **This is the canonical icon system for UI work.** Always use Lucide first.

Load via CDN in HTML prototypes:
```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<script>lucide.createIcons();</script>
```

Or as React: `import { Shield, Users, TrendingUp } from 'lucide-react'`.

**Stroke weight:** 2px (Lucide default). **Size:** 16/20/24/32/48 px — always even. **Colour:** inherit from `currentColor`.

### Brand iconography (illustrative, not UI)

The brand book uses **SVG-only custom marks** for the logo system (parallelogram stripes, hexagonal Framework badge). These are not generic icons — they are brand assets. Live in `assets/logos/`.

### Custom service icons (legacy, marketing)

Older marketing pages use a few hand-drawn SVG glyphs in service cards (e.g. enlysum's bar chart, enlybiz's spike line, enlysoft's network nodes). These live in the brand library as `*-mono-black.svg` files. They are **decorative**, not interactive icons; use them only inside division landing pages where they were designed for.

### Emoji

The marketing homepage uses 🛡️ 📈 🤝 ⚡ as service-card glyphs. These are **legacy** — the brand guidelines do not endorse emoji as icons. **Replace with Lucide icons** when refactoring (`Shield`, `TrendingUp`, `Handshake`, `Zap`).

### Unicode

- `→` (U+2192) for inline arrows in CTAs and list bullets.
- `·` (U+00B7) as separator between meta items.
- Use these freely; they're part of the editorial voice.

### What lives in `assets/logos/`

```
enlystnow-*.svg          ← umbrella
enlyst-*.svg             ← HR division (parallelogram + serif "enlyst")
enlysum-*.svg            ← Finance division
enlybiz-*.svg            ← Marketing division
enlysoft-*.svg           ← Cloud division (DM Mono wordmark)
enlyst-framework-*.svg   ← Hexagonal EF badge (light / dark / gold / blue / stamp)
```

Each entity has at minimum: `primary-light.svg`, `primary-dark.svg`, `icon.svg`, `favicon.svg`. The Framework also has `gold.svg`, `stamp.svg`, and `blue.svg` for partner co-branding.

---

## Caveats & substitutions

- **No font files were attached.** Fonts load from Google Fonts CDN at runtime. If working offline, download `Instrument Serif`, `Inter`, and `DM Mono` from <https://fonts.google.com/> and place under `fonts/`. **Flagging this to the user.**
- **No Figma file exists.** All visual decisions trace back to the brand guidelines HTML and the marketing site source.
- **The legacy `Home.tsx` in the codebase** uses early "Bandaging the Battle Wounds" copy with hardcoded gradient hero and emoji icons. The newer `enlyst_homepage_final.html` is closer to the canonical voice — use that as the production reference.
- **enlysoft is dark-first.** Its UI defaults to a Tech Dark (`#080C12`) background with Tech Purple accents and **DM Mono** for wordmarks. All other divisions are light-first.
- **The Framework Gold (`#C4A24A`) is reserved.** Only the EF badge uses it. Do not introduce it into UI accents on division surfaces.
