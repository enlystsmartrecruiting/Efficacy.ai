# 07 — The eighteen doors

> **★ Ontology:** [VISION.md](VISION.md) — the Framework, as living constitution, **opens the gates** to these doors.
> **Machine SoT:** [`tokens/doors.js`](tokens/doors.js). This table is a **declared mirror** of that file. If the two disagree, `doors.js` wins and this table is the bug.

Doors are gates into the environment the practices create. They are **not** a Holding org chart, and they are not a hierarchy above the practices.

**Invariant: every door owns a unique `--door-NN` colour *and* a unique `--door-NN-pale` tint.** `tokens/doors.js` asserts this at load time and throws on any duplicate.

## Provenance — read before changing a colour

| Doors | Colour source | Change policy |
|-------|---------------|---------------|
| **01–05** | **Verified** against the Ecosystem snapshot token file (`_incoming/colors_and_type.css` → `--hr-blue`, `--finance-green`, `--biz-amber`, `--tech-purple`, `--framework-gold`) | Locked. These are the practice + Framework SoT hexes; do not re-tint. |
| **06–18** | **DS-authored.** The snapshot contains no hexes for these doors — earlier drafts implied it did, which was wrong. | Changeable with reason, but must stay unique in both colour and pale. |

**Name, order and purpose provenance:** `06-showreel-snapshot/from-F-Enlystnow-showreel/SECTORS.md`. That legacy file's *framing* ("mother platform", "umbrella", "operating divisions") is **superseded** by [VISION.md](VISION.md). Only the door names, their numbering and their one-line purposes carry forward.

## The eighteen

| # | Door | Slug | Colour | Pale | Family | Steward | Status |
|---|------|------|--------|------|--------|---------|--------|
| 01 | enlyst · HR & Talent | `enlyst` | `#2D5BE3` | `#EEF2FD` | practice enlyst | enlyst | live |
| 02 | enlysum · Finance | `enlysum` | `#1A7A4A` | `#EBF5EF` | practice enlysum | enlysum | live |
| 03 | enlybiz · Marketing | `enlybiz` | `#C4620A` | `#FDF3EC` | practice enlybiz | enlybiz | live |
| 04 | enlysoft · Technology | `enlysoft` | `#6B3FA0` | `#F2EEF9` | practice enlysoft | enlysoft | live |
| 05 | Enlyst Framework | `framework` | `#C4A24A` | `#FAF4E2` | constitution gold | Framework | live |
| 06 | Startup Safe Zone | `safe-zone` | `#0D9488` | `#CCFBF1` | method teal | Framework | live |
| 07 | The Fortress | `fortress` | `#3D4F5F` | `#E8EEF2` | steel | Framework | opening |
| 08 | EnlyRecruit | `enlyrecruit` | `#1D4ED8` | `#DBEAFE` | enlyst lineage (deeper) | enlyst | preview |
| 09 | Talent Forge | `talent-forge` | `#D97706` | `#FEF3C7` | forge amber | enlyst | opening |
| 10 | Enlyst Education | `education` | `#4F46E5` | `#E0E7FF` | indigo | enlysoft | opening |
| 11 | Enlyst Academy | `academy` | `#0F766E` | `#D2F0EC` | academy teal | enlysoft | opening |
| 12 | Enlyst AI Academy | `ai-academy` | `#7C3AED` | `#EDE9FE` | AI violet | enlysoft | opening |
| 13 | Entrepreneurial Route | `entrepreneurial-route` | `#DB2777` | `#FCE7F3` | route rose | enlybiz | opening |
| 14 | Enlyst Foundation | `foundation` | `#166534` | `#DCFCE7` | research green | enlysum | research |
| 15 | Himat-Hikmat | `himat-hikmat` | `#9A3412` | `#FFEDD5` | courage saffron-earth | Framework | research |
| 16 | Special Education | `special-education` | `#8B5CF6` | `#F3E8FF` | inclusive violet | enlysoft | opening |
| 17 | GovTech & Public Sector | `govtech` | `#1E3A5F` | `#E2E8F0` | institutional navy | enlysoft | opening |
| 18 | Unified Platform | `unified-platform` | `#0E7490` | `#CFFAFE` | platform cyan | enlysoft | opening |

**Status vocabulary:** `live` = public today · `preview` = built, gated · `research` = ring-fenced non-commercial · `opening` = door announced, destination not yet public.

**Steward** names the practice that operates the door. It is *not* ownership hierarchy — the Framework opens every gate.

## Token shape

Each door emits four custom properties:

```css
--door-07:      #3D4F5F;              /* base            */
--door-07-pale: #E8EEF2;              /* light surface   */
--door-07-58:   rgba(61,79,95,.58);   /* border / stroke */
--door-07-26:   rgba(61,79,95,.26);   /* wash / glow     */
```

The `-58` and `-26` values are the base colour at 58% and 26% alpha. They must be derived from the base — never hand-picked.

## Usage

```html
<a class="door-plane rv" data-door="17" href="/paths/govtech/">GovTech &amp; Public Sector</a>
```

`[data-door="17"]` and the slug alias `[data-door="govtech"]` both remap `--accent`, `--accent-pale`, `--accent-58` and `--accent-26` to that door. Numeric form is preferred in authored markup; the slug alias exists for readability in hand-written pages.

Door cards on `/ecosystem/` and `/paths/` **must** use door tokens. A single shared accent across multiple doors is an audit failure. Practice hosts keep their practice colour as the page default; individual door elements override locally.

Pattern implementation: `.door-plane` in [`patterns/ecosystem-craft.css`](patterns/ecosystem-craft.css). Live demo: [`preview/ds-index.html#p-doors`](preview/ds-index.html).

## Changing a door

1. Edit [`tokens/doors.js`](tokens/doors.js) — it will throw on a duplicate colour, pale, slug or number.
2. Mirror the change into `tokens/ecosystem.tokens.css` (`--door-NN*` block **and** the `[data-door]` rule).
3. Mirror the row in this table.
4. Bump [CHANGELOG.md](CHANGELOG.md).

See the door sync rule in [docs/CONVENTIONS.md](docs/CONVENTIONS.md).
