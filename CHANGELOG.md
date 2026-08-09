# Changelog — Enlyst Ecosystem Design System

Versioning per [docs/CONVENTIONS.md](docs/CONVENTIONS.md) §8. The current version is mirrored in [`patterns/craft-stack.json`](patterns/craft-stack.json) → `version`.

---

## 1.1.0 — 2026-08-06

### Ontology — board face (USER)

- **Enlystnow board-of-directors / founders-hub face** documented as a canonical synonym of Ecosystem = Enlystnow. Does not replace that identity; does not put Ecosystem above the practices; never Holding. (D-24)
- Likely Member maps: HR↔enlyst · Technology↔enlysoft · Marketing↔enlybiz. **Open:** Member Healthcare (no practice/door invented); enlysum Finance (no Member named yet); other seats as applicable.
- Updated: `VISION.md`, `docs/ENLYSTNOW_ONTOLOGY.md`, `docs/GLOSSARY.md`, `docs/OPUS_HANDOFF.md`, `docs/DECISION_LOG.md`, `README.md`, `01-TAXONOMY.md`, `04-ENLYSTNOW-ADMIN.md`, `08-ECOSYSTEM-SHOWCASE.md`, `ONTOLOGY.md`, `preview/ds-index.html`, `patterns/craft-stack.json`, external mandate pointer.

### Fixed

- **`_incoming/showreel/` citations** pointed at a non-existent subdirectory. Corrected to flat `_incoming/` (`colors_and_type.css`, `motion_tokens.css`, …). (D-25)

---

## 1.0.0 — 2026-08-04

First complete, self-consistent release. The ontology is locked, all sixteen craft patterns are implemented and demonstrable, and every cross-document contradiction found in audit has been resolved. Full audit trail: [docs/DECISION_LOG.md](docs/DECISION_LOG.md).

### Ontology — locked

- `VISION.md` established as the binding centrepiece, with `docs/ENLYSTNOW_ONTOLOGY.md` as its canonical twin.
- **Framework** = manifesto and living constitution; opens the gates to eighteen doors.
- **Four practices** — enlyst, enlysum, enlybiz, enlysoft — operate under the Framework and **together create** the Ecosystem environment.
- **Ecosystem = Enlystnow.** Same referent. Not a layer above the practices, not a consumer brand, never a Holding.
- **Showreel** demoted to legacy craft name, permitted in disk paths only.
- **Domain ≠ brand:** `enlystnow.com/` is the enlyst practice root.

### Added

- `docs/OPUS_HANDOFF.md` — executive summary, read order, file map and validation checklist. The entry point for any new reviewer or agent.
- `docs/GLOSSARY.md` — every term, alias, forbidden word, exact spelling and disambiguation trap.
- `docs/CONVENTIONS.md` — layer model, dependency graph, import order, file and token naming, declared-mirror sync rules, authority order, versioning.
- `docs/PAGE_SPECS.md` — section-by-section spines for home, about, services, blog, contact, `/ecosystem/` and Framework method pages.
- `docs/FONT_LOADING.md` — font standard, the curly-y mechanism and its fix, the ten-file asset manifest, and the current asset blocker.
- `docs/DECISION_LOG.md` — resolved conflicts plus tracked open items.
- `tokens/doors.js` — single machine registry for the eighteen doors, with load-time assertions on number, slug, colour and pale uniqueness.
- `tokens/fonts.dev-fallback.css` — preview-only CDN fallback, marked never-ship.
- `CHANGELOG.md` — this file.

### Fixed

- **Enlystnow was described as an "admin arm"** in `04-ENLYSTNOW-ADMIN.md`. (D-01)
- **Doors 06 and 11 shared pale tint `#CCFBF1`**. `--door-11-pale` → `#D2F0EC`. (D-12)
- **§4 page-minimum contradictions** resolved via universal baseline. (D-07, D-08)
- **Door colour provenance** honesty for 06–18. (D-13)
- **"Showreel-level craft"** retired from live docs. (D-04)
- **`data-register` / `data-intensity` / pattern-3 class contracts** unified. (D-17, D-10, D-11)
- **Token file made a strict superset** of snapshot baseline. (D-15)
- **Door registry consolidated** to `tokens/doors.js`. (D-23)
- **DS vs external mandate ownership split.** (D-21)

### Known open

- **The ten local `.woff2` font binaries are not on disk.** See [docs/FONT_LOADING.md](docs/FONT_LOADING.md) §5 and D-14 / O-01.

Deferred by design: logo election (O-02), HTML partials (O-03), `enlysum.com` (O-04), WordPress retirement (O-05).

---

## Pre-1.0.0 — 2026-08-02 → 2026-08-03

Compile and consolidation passes. Snapshot preserved at `06-showreel-snapshot/`. Token pastes under `_incoming/`. Elected home 2026-08-04.
