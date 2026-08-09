# Decision log — resolved ambiguities and contradictions

**Status:** Reference · DS v1.1.0 · Updated 2026-08-06
**Role:** the audit trail. Every contradiction found across the DS, how it was resolved, and on whose authority. A reviewer who asks "why is it this way and not that way?" should find the answer here.
**Authority order used throughout:** [CONVENTIONS.md](CONVENTIONS.md) §6.

Resolutions marked **USER** come from an explicit user instruction and are not open to re-litigation by an agent.

---

## Part A — Ontology

### D-01 · Enlystnow described as an "admin arm"

**Conflict.** `04-ENLYSTNOW-ADMIN.md` opened with "Enlystnow is an **admin arm**". `VISION.md`, `ENLYSTNOW_ONTOLOGY.md`, `01-TAXONOMY.md` and `08-ECOSYSTEM-SHOWCASE.md` all define Enlystnow as *the Ecosystem environment created by the four practices*. An "arm" is a sibling of the practices; an environment is what they produce. Mutually exclusive.

**Resolution — USER.** Enlystnow **is** the Ecosystem: the environment the four practices create together under the Framework. It is not an arm, division, tier or fifth practice. `04-ENLYSTNOW-ADMIN.md` rewritten as *"Enlystnow / Ecosystem (institutional register)"*, with the correction stated in its opening note. The preview's former "Admin arms" heading became "Framework chrome".

**Residue.** The filename still reads `ADMIN`. Kept deliberately — see D-19.

---

### D-02 · Is the Ecosystem above the practices?

**Conflict.** Legacy material (`06-showreel-snapshot/.../SECTORS.md`, `_incoming/enlystnow-mother/contact.html`) frames Enlystnow as the "mother platform" with "four operating divisions" beneath it. The DS ontology states the inverse.

**Resolution — USER.** The practices **create** the Ecosystem. Nothing sits above them except the Framework, and the Framework is a *constitution*, not a parent company. Legacy snapshot files are left untouched as history; their framing is explicitly marked superseded in `07-DOORS.md` and `GLOSSARY.md` §2. "Holding", "mother company", "mother platform" and "mother umbrella" are forbidden strings in the audit gate.

---

### D-03 · Framework: method or constitution?

**Conflict.** Earlier framing described the Framework as an "adoption / governance standard". `VISION.md` calls it a manifesto and living constitution.

**Resolution — USER.** **Manifesto and living constitution.** It enables the Ecosystem to thrive and opens the gates to the eighteen doors. Governance and adoption are *consequences* of that constitutional role, not the whole of it. Also settled: "Framework first" means *foundational*, not *superior in a marketing hierarchy* — it is not a consumer homepage and never outranks a practice root. Recorded in `GLOSSARY.md` §8.

---

### D-04 · "Showreel" as a current name

**Conflict.** `10-TYPE-AND-MOTION.md`, `12-COMPONENTS.md` and `13-SURFACE-MATRIX.md` used "Showreel-level invention" / "Showreel craft" as the live craft bar. Brand rule says Showreel is retired.

**Resolution — USER.** **Showreel is the legacy craft name** for the Ecosystem / Enlystnow layer. Permitted *only* in disk paths and filenames (`06-showreel-snapshot/`, `showreel.css`, `_incoming/` snapshot pastes) and when explicitly labelling something as the legacy name. The live craft bar is **Enlystnow Ecosystem craft**. All three docs corrected.

---

### D-05 · Does owning `enlystnow.com` make Enlystnow the brand?

**Conflict.** Implicit throughout — the root domain shares Enlystnow's name.

**Resolution — USER.** **Domain ≠ brand.** `enlystnow.com/` is the **enlyst** practice root (Smart Recruiting). Enlystnow is the environment, exhibited at `/ecosystem/`. The root lockup is the enlyst wordmark; the site CTA is "Experience the ecosystem", never "Welcome to Enlystnow".

---

### D-06 · "arm" vs "practice"

**Conflict.** `06-OPERATING-ARMS.md` titled and written in "arm" language; the ontology says "practice". Meanwhile `data-arm` and `--arm-*` are load-bearing in shipped CSS and cannot be renamed without breaking the snapshot compatibility layer.

**Resolution.** Split noun from identifier. **Canonical noun in all prose: "practice".** "Arm" survives *only* as the `data-arm` attribute name, the `--arm-*` token prefix, and the frozen legacy filename. The alias rule is stated once in `GLOSSARY.md` §2 and cross-referenced from the token file header, `01-TAXONOMY.md` and `06-OPERATING-ARMS.md`. `06` retitled "The four practices".

---

## Part B — Craft stack

### D-07 · §4 "Mandatory on" column contradicted the page-minimums table

**Conflict.** Three direct contradictions inside a single document:

| Pattern | §4 column said | Page-minimums table said |
|---------|----------------|--------------------------|
| 7 telemetry | "Home; About; optional Services" | About row omits 7; Services row **includes** 7 |
| 11 spine-nodes | "Home, About; optional Services" | Services row **includes** 11 |
| 6 door-planes | "Home highlights; About link" | About row omits 6 |

Additionally patterns 2 and 3 were marked "All practice pages" while the Services, Blog and Contact rows omitted both.

**Resolution.** Introduced an explicit **universal baseline** (patterns 2, 3, 14, 15, 16) mandatory on every practice page, then expressed each page as *baseline + additions*. This removes the class of contradiction rather than patching instances. Where the two statements disagreed, the **stricter** reading was taken — the user's standing instruction is invention over minimalism. Telemetry, spine-nodes and door-planes are now required where either source required them.

---

### D-08 · Home = "1–16 where spine dictates"

**Conflict.** Unfalsifiable as an audit criterion, and `craft-stack.json` listed only 15 of 16 for home (omitting `prose-cols`).

**Resolution.** Home = **15 required** (all except `prose-cols`) + `prose-cols` **optional**. Prose-cols is an About/Blog/Contact instrument; the elected home does not need it. Every page now has an explicit `required` array and an explicit `optional` array — no page minimum is expressed as a range or a judgement call.

---

### D-09 · No spec for `/ecosystem/` in the craft stack

**Conflict.** `/ecosystem/` is the craft north star and the only `cinematic` surface, yet `craft-stack.json` had no entry for it and no page spec existed.

**Resolution.** Added an `ecosystem` entry to `pageMinimums` (14 required, 2 optional, `cinematic`) and a full section spine in [PAGE_SPECS.md](PAGE_SPECS.md#ecosystem).

---

### D-10 · `data-intensity` host was ambiguous

**Conflict.** `craft-stack.json` said `html[data-intensity]`; `12-COMPONENTS.md` said "`<html>` or stage wrapper"; the token CSS selector is the unscoped `[data-intensity]`, matching any element.

**Resolution.** `<html>` is the **required** host and must always carry an explicit value. A nested stage wrapper **may** override for one sub-region — the unscoped selector is intentional, not sloppy. `prefers-reduced-motion` overrides every tier. Stated in `01-TAXONOMY.md` (attribute table), `12-COMPONENTS.md` and the JSON's `hardRules`.

---

### D-11 · Pattern 3 class contract disagreed across three files

**Conflict.** `craft-stack.json` listed `[".brand-stage", "nav .wordmark"]`; the glossary CSS listed `.brand-wordmark`; the implementation styles `.brand-wordmark`, `.nav-brand`, `.footer-wordmark`, `.hero-wordmark`, `[class*="wordmark"]` and `.brand-stage .wordmark-after-header`.

**Resolution.** The **implementation** is authoritative for class contracts; the JSON was wrong. JSON updated to the real selector set. Going forward the JSON leads and CSS follows (`CONVENTIONS.md` §5, craft pattern sync rule), with every pattern's `classes` array matching its actual selectors.

---

## Part C — Tokens and assets

### D-12 · Doors 06 and 11 shared an identical pale tint

**Conflict.** `--door-06-pale` and `--door-11-pale` were both `#CCFBF1`, breaking the stated law that every door has a unique colour. Base hexes `#0D9488` and `#0F766E` are also close teals, so the pales collapsing made the two doors visually indistinguishable in pale contexts.

**Resolution.** `--door-11-pale` → **`#D2F0EC`**, a distinct tint that still reads as door 11's deeper teal. The invariant was then *mechanised*: [`../tokens/doors.js`](../tokens/doors.js) asserts uniqueness of number, slug, colour **and** pale at load time and throws on any duplicate. A future regression fails loudly instead of shipping.

---

### D-13 · Door colour provenance was overstated

**Conflict.** `07-DOORS.md` said the door colours came from the Ecosystem snapshot and were "already implied by Ecosystem/Showreel theatre". The snapshot token file contains exactly **five** hexes (the four practice accents plus Framework gold). Doors 06–18 were DS-authored.

**Resolution.** Stated honestly in a provenance table: **01–05 verified** against the snapshot and locked; **06–18 DS-authored** and changeable with reason, subject to the uniqueness invariant. `doors.js` records this per door in a `source` field.

---

### D-14 · Local font files do not exist

**Conflict.** `tokens/fonts.local.css` declares ten `@font-face` sources under `Design-Libraries/01-fonts/by-family/`. That directory contains **zero** `.woff2` files — `Design-Libraries/INDEX.md` recorded the candidates as unhydrated OneDrive stubs. Consequence: every surface silently falls back to Georgia, and the curly-y rule — a central brand law — cannot be verified at all.

**Resolution.** Treated as an **asset gap, not a spec gap**, and made impossible to miss rather than quietly papered over:

1. `fonts.local.css` left untouched — it is the production contract and its paths are correct.
2. [FONT_LOADING.md](FONT_LOADING.md) documents the mechanism, the exact ten-file manifest, current status, consequences and resolution steps.
3. [`../tokens/fonts.dev-fallback.css`](../tokens/fonts.dev-fallback.css) added for **preview only**, loudly marked never-ship.
4. The preview runs a `document.fonts.check()` probe and shows a banner stating whether real Instrument Serif is active, so no reviewer mistakes Georgia's straight `y` for a passing check.

**This is the one open item in the DS.** It cannot be closed by writing files — it needs the binaries.

---

### D-15 · Token file was a subset of its own stated baseline

**Conflict.** `09-TOKENS.md` named the snapshot token files as the source baseline, but `ecosystem.tokens.css` omitted `--parallax-depth-*`, `--particle-size`, `--particle-speed`, `--motion-dur-*`, the `cinematic` glow overrides, and the `.glow-*`, `.text-glow`, `.mark-glow`, `.eyebrow-mono` and `.code-inline` utilities. Snapshot CSS referencing them would have resolved to nothing.

**Resolution.** DS token file made a strict **superset** of the snapshot: every missing token and utility added. Documented as such in `09-TOKENS.md`.

---

### D-16 · Wordmark, glass and badge rules duplicated across two files

**Conflict.** `.brand-wordmark`, `.glass*` and `.framework-badge` are declared in both `tokens/ecosystem.tokens.css` and `patterns/ecosystem-craft.css` — apparently two sources of truth.

**Resolution.** **Intentional, and safe.** The token layer must be usable standalone; the pattern layer re-declares those three with `!important` to defeat inherited site CSS. Both read the *same custom properties*, so no value can diverge — only enforcement strength differs. Documented in the token file header, `09-TOKENS.md` and `CONVENTIONS.md` §5 so it reads as a decision rather than an oversight. Values change in the token file only.

---

### D-17 · `data-register` documented but unimplemented

**Conflict.** `01-TAXONOMY.md` and `04-ENLYSTNOW-ADMIN.md` document `data-register`, and their value lists disagreed — Taxonomy listed five, `04` listed six (adding `umbrella`). No CSS implements it at all.

**Resolution.** `data-register` is **semantic only and carries no styling by design** — it labels the voice a surface speaks in so copy review is checkable, and must never become a visual hierarchy that re-stacks the ontology. The complete set is **six** values including `umbrella` (docs/internal only). `04-ENLYSTNOW-ADMIN.md` is the source for register semantics; Taxonomy mirrors it.

---

### D-18 · Ambiguous relative paths

**Conflict.** `craft-stack.json` mixed path bases — `docs/…` was DS-relative while `northStar: "06-showreel-snapshot/…"` was Design-Libraries-relative. `09-TOKENS.md` cited `03-tokens-css/canonical/…` as if DS-relative when it sits one level up.

**Resolution.** `craft-stack.json` now declares `"pathsRelativeTo": "00-enlyst-ds/"` and expresses the north star as `../06-showreel-snapshot/…`. `09-TOKENS.md` corrected to `../03-tokens-css/canonical/`.

---

## Part D — Structure

### D-19 · Two filenames encode retired concepts

**Conflict.** `04-ENLYSTNOW-ADMIN.md` ("admin") and `06-OPERATING-ARMS.md` ("arms") name concepts the ontology has retired.

**Resolution.** **Filenames frozen; titles and content corrected.** Renaming would gap the 01–13 sequence and break inbound links from the numbered chapters and the external mandate, for cosmetic gain. Each file opens with a filename note explaining the discrepancy, and `CONVENTIONS.md` §4 records the freeze. A rename is a future major-version breaking change, not a fix.

---

### D-20 · Read order disagreed between README and VISION

**Conflict.** `VISION.md` declared itself step 0 of the read order. `README.md`'s read order started at `docs/ENLYSTNOW_ONTOLOGY.md` and did not list `VISION.md` at all.

**Resolution.** `VISION.md` is step 0. README rebuilt with the full read order and a complete file map. README holds **no law of its own** — it is an index, and per `CONVENTIONS.md` §6 it never wins a disagreement.

---

### D-21 · Overlapping scope between DS and the external mandate

**Conflict.** `docs/INVENTION_MANDATE.md` and `D:\ENLYST PVT\Enlyst\MANDATE_ECOSYSTEM_INVENTION.md` both carried ontology, craft standard, architecture rules and file shelves — two documents drifting toward being the same document.

**Resolution.** Explicit ownership split, stated in both files. The **DS owns the law**: ontology, tokens, patterns, page specs, audit gate. The **external mandate owns live project state**: agent roster, page queue, election status. Neither restates the other's substance; each links across. The external file now names the DS as canonical for everything in the first category.

---

### D-22 · No version marker, changelog, glossary, conventions or page specs

**Conflict.** Files carried `Updated: 2026-08-04` but there was no version, no history, no term definitions, no import-order contract, and no page-level briefs — so nothing could be cited precisely and terminology drift had no backstop.

**Resolution.** Added [CHANGELOG.md](../CHANGELOG.md) (v1.0.0, mirrored in `craft-stack.json` → `version`), [GLOSSARY.md](GLOSSARY.md), [CONVENTIONS.md](CONVENTIONS.md), [PAGE_SPECS.md](PAGE_SPECS.md), this log, and [OPUS_HANDOFF.md](OPUS_HANDOFF.md) as the entry point.

---

### D-23 · Door data existed in three unsynchronised copies

**Conflict.** Door numbers, names and colours were hand-maintained in `07-DOORS.md`, `tokens/ecosystem.tokens.css` and the `preview/ds-index.html` inline script. Three copies, no authority, no drift detection — which is how D-12 survived unnoticed.

**Resolution.** [`../tokens/doors.js`](../tokens/doors.js) is now the single machine registry, with self-asserting uniqueness. The preview consumes it directly instead of holding its own array. The CSS block and the `07-DOORS.md` table are **declared mirrors** with a written sync rule (`CONVENTIONS.md` §5). `.js` rather than `.json` because the preview runs from `file://`, where `fetch()` of a local JSON is blocked by CORS while a `<script>` include works everywhere.

---

### D-24 · Enlystnow board-of-directors face

**Conflict.** User clarification: Enlystnow is sometimes seen as a **board of directors** with domain seats / Members (Technology, Marketing, HR, Healthcare, and others as applicable). Without documentation, agents could invent a second hierarchy (“board above practices”) or invent fake practice brands for unmapped seats.

**Resolution — USER.** The board-of-directors / founders-hub face is a **canonical synonym** of Enlystnow. It does **not** replace `Ecosystem = Enlystnow`. It does **not** put the ecosystem above the practices. Likely maps: Member HR ↔ enlyst; Member Technology ↔ enlysoft; Member Marketing ↔ enlybiz. **Member Healthcare** and other seats remain **open board-domain seats** — no invented practice brand or door. **enlysum** (Finance) has no named Member yet. Doors ≠ Members. Documented in `VISION.md`, `ENLYSTNOW_ONTOLOGY.md`, `GLOSSARY.md`, handoff, taxonomy, `04`, preview, README.

---

### D-25 · `_incoming/showreel/` path did not exist

**Conflict.** Several docs cited `_incoming/showreel/colors_and_type.css` and `_incoming/showreel/`, but snapshot pastes live flat under `_incoming/` (`colors_and_type.css`, `motion_tokens.css`, …).

**Resolution.** Corrected all citations to `_incoming/` (flat). Snapshot originals remain at `06-showreel-snapshot/from-F-Enlystnow-showreel/`.

---

## Open items

| # | Item | Status | Blocker |
|---|------|--------|---------|
| **O-01** | Ten local `.woff2` font binaries absent (D-14) | **OPEN** | Needs the font files. Cannot be resolved by writing documents. |
| O-02 | Logo SVGs not yet elected (`11-LOGOS-AND-MARKS.md`) | Deferred by design | Phase 1 defines election *rules*; the binary pick awaits a user GO |
| O-03 | HTML component partials | Deferred by design | Phase 1 documents grammar; partials are phase 2 |
| O-04 | `enlysum.com` not yet owned | External | 301 discipline already specified in `02-DOMAIN-MAP.md` |
| O-05 | Buried WordPress install still served on `enlystnow.com` | External / ops | Workstream specified in `03-SEO-AND-REDIRECTS.md` |

O-02 through O-05 are **scoped deferrals with a written plan**, not gaps. O-01 is a genuine open blocker.
