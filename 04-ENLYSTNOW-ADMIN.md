# 04 — Enlystnow / Ecosystem (institutional register)

> **Filename note:** `04-ENLYSTNOW-ADMIN.md` is a legacy filename kept so the 01–13 sequence and existing links stay stable. Enlystnow is **not** an "admin arm" — an earlier draft of this file said so and was wrong. Corrected 2026-08-04; see [docs/DECISION_LOG.md](docs/DECISION_LOG.md) D-01.

> **Ontology:** [VISION.md](VISION.md) · [docs/ENLYSTNOW_ONTOLOGY.md](docs/ENLYSTNOW_ONTOLOGY.md)

## What Enlystnow is

**Enlystnow = the Ecosystem = the environment the four practices create together, under the Framework.**

It is not a tier, not a parent, not a company sitting above `enlyst`, `enlysum`, `enlybiz` and `enlysoft`. It is the *field they produce by operating*. Compare: a climate is not the layer above the weather systems that make it.

| Enlystnow **is** | Enlystnow **is not** |
|------------------|----------------------|
| The environment created by the four practices | An arm, division, or fifth practice |
| Umbrella, entity, symbol, founders hub, philosophy, ideology, signpost; **also** board-of-directors face with domain Members | A Holding or mother company |

Enlystnow’s **board face** (founders hub): domain seats such as Member Technology, Member Marketing, Member HR, Member Healthcare, and other Members as applicable. Likely maps — HR↔enlyst, Technology↔enlysoft, Marketing↔enlybiz. Healthcare and unassigned seats (incl. no Member yet for enlysum/Finance) stay **open**; never invent a practice brand to fill a seat. See [docs/ENLYSTNOW_ONTOLOGY.md](docs/ENLYSTNOW_ONTOLOGY.md) § Board and [docs/DECISION_LOG.md](docs/DECISION_LOG.md) D-24.
| The institutional register the DS uses when speaking *about* the whole | A consumer brand sold on practice pages |
| The public showcase surface at `/ecosystem/` | The identity of the `enlystnow.com` root (that is **enlyst**) |

Its legacy craft name on disk is **Showreel**. That word never appears in public copy.

## Why this file exists

The four practices each have a public voice. The Framework has a constitutional voice. This file covers the remaining case: **how the DS speaks about the whole environment** — in institutional chrome, in docs, in the `/ecosystem/` showcase — without inventing a brand that the ontology forbids.

## Registers — `data-register`

`data-register` is a **semantic attribute only**. It carries no styling in `tokens/ecosystem.tokens.css` by design: it labels the voice a surface is speaking in so that copy review is checkable, and it must never become a visual hierarchy that re-stacks the ontology.

| Register | `data-register` | Voice / purpose |
|----------|-----------------|-----------------|
| Vision | `vision` | North-star narrative |
| Entity | `entity` | Legal / commercial identity of the institutional root |
| Institution | `institution` | Org form and governance posture — includes **board / Members** language when the surface speaks as founders hub |
| Standard | `standard` | How Framework methods are applied |
| Umbrella | `umbrella` | Institutional ecosystem map — **docs / internal only**, never public marketing |
| Ecosystem | `ecosystem` | Craft register for the public `/ecosystem/` showcase |

These six values are the complete set. [01-TAXONOMY.md](01-TAXONOMY.md) lists the same six — if the two ever diverge, this file is the source for register semantics and Taxonomy is the bug.

## Colour

| Token | Value | Note |
|-------|-------|------|
| `--admin-enlystnow` / `--ecosystem-ink` | `#2A2E35` | Restrained institutional ink — deliberately **not** a fifth consumer accent |
| `--admin-enlystnow-pale` / `--ecosystem-pale` | `#ECEFF2` | |

`[data-arm="enlystnow"]` exists as a scope hook for institutional chrome. The attribute is named `data-arm` for historical compatibility only — see the alias rule in [docs/GLOSSARY.md](docs/GLOSSARY.md).

## Rules

- No consumer logo kit competing with the four practices.
- Institutional / platform chrome only, and only where a surface genuinely speaks for the whole.
- The public admiration surface is named **Ecosystem** at `/ecosystem/` — never "the Enlystnow brand home."
- Never use the Enlystnow wordmark as the primary lockup on the `enlystnow.com` root. That root is **enlyst**.
- Never render Enlystnow or Ecosystem above the practices in any diagram, nav, or sitemap.
