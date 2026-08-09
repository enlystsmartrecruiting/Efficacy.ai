# Page specs — section-by-section briefs

**Status:** Binding · DS v1.1.0 · Updated 2026-08-06
**Role:** turns the abstract pattern minimums into concrete page spines. Where [INVENTION_MANDATE.md](INVENTION_MANDATE.md) §4 says *which* patterns a page needs, this file says *in what order, doing what job*.
**Machine mirror:** `pageMinimums` in [`../patterns/craft-stack.json`](../patterns/craft-stack.json).

---

## Rules that apply to every page

**One job per section.** A section either routes, proves, explains, or converts. Never two.

**Universal baseline** (patterns 2, 3, 14, 15, 16) is present on every page and is not restated per spine below:

- `<html data-arm="…" data-intensity="…">` — both attributes explicit
- Nav-only wordmark, Instrument Serif 400, static
- `.hero-atmosphere` in the hero
- `.rv` on every band that enters below the fold
- ≥3 distinct `.band-*` palettes
- `prefers-reduced-motion` gate honoured

**Section header formula** — every band opens with: `.eyebrow-rule` mono kicker → serif `H2` → one lede paragraph. Then the pattern.

**Voice.** Practice pages speak in practice voice. On `enlystnow.com` that is **enlyst — Smart Recruiting**. The Ecosystem is referenced as a destination ("Experience the ecosystem"), never as the brand of the page.

**Band rhythm.** Alternate. Never two consecutive bands with the same palette. A typical spine runs sky → cream → dark → cream → theatre → dark.

---

<a id="home"></a>
## Home — `enlystnow.com/`

**Status:** **ELECTED** 2026-08-04 · `D:\ENLYST PVT\Enlyst\home\index.html`
**Identity:** enlyst · Smart Recruiting · `data-arm="enlyst"` · `data-intensity="standard"`
**Job:** route two audiences (employers, candidates) while proving the system is operational.
**Required:** 1 2 3 4 5 6 7 8 10 11 12 13 14 15 16 · **Optional:** 9

This page is the chrome baseline. Every other practice page matches its nav, spacing rhythm, gradient handling and motion feel.

| # | Section | Job | Patterns | Band |
|---|---------|-----|----------|------|
| 1 | Hero | State the promise; one primary CTA | 2 atmosphere, 3 wordmark in nav | sky |
| 2 | Dual routing | Send employers one way, candidates the other | 1 bento (two span-6 features + quarters) | sky → cream |
| 3 | Operational proof | Show the machine actually running | 4 chrome window + 5 live-pan | dark |
| 4 | Telemetry | Numeric proof under the theatre | 7 telemetry strip | dark |
| 5 | How it works | The spine of the service | 11 spine nodes | cream |
| 6 | System mechanic | Explain the method visually | 8 static system SVG + figcaption | cream |
| 7 | Doctrine | Courage and wisdom as the operating temperament | 10 himat pills | theatre |
| 8 | Door highlights | Route into the wider environment | 6 door planes (3–6 doors, each own token) | dark |
| 9 | People | Design-native portrait theatre — no archive photos | 12 portrait plane | cream |
| 10 | Proof marquee | Ambient credibility | 13 ticker | dark |
| 11 | Ecosystem CTA | "Experience the ecosystem" → `/ecosystem/` | — | theatre |
| 12 | Footer | Practices, doors, Framework link | — | dark |

**Do not:** brand the page as Enlystnow · repeat the wordmark after the header · use one shared accent across the door planes · animate the system SVG.

---

<a id="about"></a>
## About — `enlystnow.com/about.html`

**Status:** In progress · **NOT elected**
**Identity:** enlyst story · `data-arm="enlyst"` · `data-intensity="standard"`
**Job:** explain origin, doctrine and the invention posture — narrative-led, not a card dump.
**Required:** 2 3 6 7 8 9 10 11 12 14 15 16 · **Optional:** 4 13

| # | Section | Job | Patterns | Band |
|---|---------|-----|----------|------|
| 1 | Hero | The thesis in one line | 2 atmosphere | sky |
| 2 | Origin narrative | The story, in prose | 9 prose-cols | cream |
| 3 | Doctrine | Himat and Hikmat as the operating pair | 10 himat pills | theatre |
| 4 | Method mechanic | Think → Act → Protect, static | 8 static system SVG | cream |
| 5 | Journey | The path so far, as steps | 11 spine nodes | cream |
| 6 | Founders / people | Design-native portrait theatre | 12 portrait plane | dark |
| 7 | Scale proof | Numbers that substantiate the story | 7 telemetry strip | dark |
| 8 | Wider environment | One link into the doors | 6 door planes (≥1) | dark |
| 9 | Ecosystem CTA | Route to `/ecosystem/` | — | theatre |

**Do not:** recycle day5 or archive portraits · let the page become a wall of cards · describe Enlystnow as the parent of the practices · claim election before user approval.

---

<a id="services"></a>
## Services — `enlystnow.com/services/`

**Status:** Not started
**Identity:** enlyst · `data-arm="enlyst"` · `data-intensity="standard"`
**Job:** make each offer legible and comparable, and prove delivery.
**Required:** 1 2 3 4 5 7 11 14 15 16 · **Optional:** 6 8 9

| # | Section | Job | Patterns | Band |
|---|---------|-----|----------|------|
| 1 | Hero | The offer set in one frame | 2 atmosphere | sky |
| 2 | Offer grid | Weighted, not uniform — hierarchy carries meaning | 1 bento | cream |
| 3 | Delivery theatre | Show the work surface | 4 chrome window + 5 live-pan | dark |
| 4 | SLA / outcomes | Numeric commitments | 7 telemetry strip | dark |
| 5 | Engagement path | How an engagement runs | 11 spine nodes | cream |
| 6 | Related doors | Route to Safe Zone / Fortress / Talent Forge | 6 door planes *(optional)* | dark |
| 7 | CTA | One conversion | — | theatre |

**Do not:** render every offer at equal weight · ship a motionless card grid.

---

<a id="blog"></a>
## Blog — `enlystnow.com/blog/`

**Status:** Not started
**Identity:** enlyst · `data-arm="enlyst"` · `data-intensity="calm"`
**Job:** readable long-form. Calm intensity — reading is the job, theatre is not.
**Required:** 2 3 9 14 15 16 · **Optional:** 7 13

| # | Section | Job | Patterns | Band |
|---|---------|-----|----------|------|
| 1 | Hero / index head | Orient | 2 atmosphere (restrained) | sky |
| 2 | Article body or list | Read | 9 prose-cols | cream |
| 3 | Related | Continue | — | cream |
| 4 | CTA | One quiet conversion | — | dark |

Atmosphere stays present but subdued — `calm` already reduces orb opacity and drift. On article pages, `prose-cols` applies to lede and pull sections; the main article column stays single-column for readability.

---

<a id="contact"></a>
## Contact — `enlystnow.com/contact/`

**Status:** Not started
**Identity:** enlyst · `data-arm="enlyst"` · `data-intensity="calm"`
**Job:** get the enquiry submitted. Nothing may compete with the form.
**Required:** 2 3 9 14 15 16 · **Optional:** 6

| # | Section | Job | Patterns | Band |
|---|---------|-----|----------|------|
| 1 | Hero | Say who should write, and why | 2 atmosphere (restrained) | sky |
| 2 | Form + context | Convert | 9 prose-cols beside the form | cream |
| 3 | Routing | Send door-specific enquiries onward | 6 door planes *(optional)* | dark |
| 4 | Footer | — | — | dark |

**Do not:** put motion near the form fields · use `standard` or `cinematic` intensity here.

---

<a id="ecosystem"></a>
## Ecosystem showcase — `enlystnow.com/ecosystem/`

**Status:** Craft north star · reference snapshot at `06-showreel-snapshot/from-F-Enlystnow-showreel/`
**Identity:** the Enlystnow Ecosystem environment · `data-intensity="cinematic"`
**Job:** exhibit the environment the four practices create, and open all eighteen doors.
**Required:** 1 2 3 4 5 6 7 8 10 11 13 14 15 16 · **Optional:** 9 12

This is the only surface permitted `cinematic` intensity. It is **not a brand homepage** and it does not rebrand the `enlystnow.com` root away from enlyst.

| # | Section | Job | Patterns | Band |
|---|---------|-----|----------|------|
| 1 | Full-bleed entrance | Arrival — the sky→void canvas at full height | 2 atmosphere, `.ecosystem-canvas` | sky → void |
| 2 | The ontology, stated | Framework → practices → environment, visually | 8 static system SVG | theatre |
| 3 | Four practices | Each in its own accent, as equals | 1 bento (4× span-3 or 2×2 span-6) | dark |
| 4 | Eighteen doors | The full gate map — every door its own colour | 6 door planes ×18 | dark |
| 5 | Framework | Door 05, gold, badge static | 6 door plane `data-door="05"` | theatre |
| 6 | Operating theatre | The system running | 4 chrome window + 5 live-pan | dark |
| 7 | Telemetry | Scale of the environment | 7 telemetry strip | dark |
| 8 | Doctrine | Himat / Hikmat | 10 himat pills | theatre |
| 9 | Path spine | How someone enters and moves | 11 spine nodes | dark |
| 10 | Proof marquee | Ambient credibility | 13 ticker | dark |
| 11 | Practice CTAs | Route out to the four hosts, absolute HTTPS | — | theatre |

**Hard rules for this surface**

- Every one of the eighteen doors renders **its own** `--door-NN` colour. A shared accent here is the single most visible possible audit failure.
- The Framework badge does not spin, even at `cinematic`.
- `prefers-reduced-motion: reduce` must still fully neutralise motion — cinematic is not an exemption.
- Copy is environment language. Never "Welcome to Enlystnow." Never "Holding." Never "mother platform."
- The global shell keeps enlyst chrome; the stage inside may be full-bleed.

---

## Framework method pages — `enlystnow.com/framework/`

**Status:** Optional, selective indexing
**Identity:** `data-arm="framework"` · `data-intensity="calm"` or `standard`
**Job:** document the constitution — method, adoption, Safe Zone and Fortress interpretation.

Treated as a practice-class page for craft purposes (universal baseline applies) with gold chrome. It **never replaces the enlyst practice root** and is never presented as a brand homepage. The Framework badge is static.

---

## Pre-ship checklist

Run the full audit gate in [INVENTION_MANDATE.md](INVENTION_MANDATE.md) §5 before proposing any page. Then, and only then, ask the user — pages stay **NOT elected** until the user says otherwise.
