# 06 — The four practices

> **Filename note:** `06-OPERATING-ARMS.md` is a legacy filename kept for link and sequence stability. The canonical noun is **practice**, not "arm". "Arm" survives only as the `data-arm` *attribute* name and in legacy snapshot CSS — see the alias rule in [docs/GLOSSARY.md](docs/GLOSSARY.md).

> **Ontology:** [VISION.md](VISION.md) · [docs/ENLYSTNOW_ONTOLOGY.md](docs/ENLYSTNOW_ONTOLOGY.md)

The four practices operate **under** the Enlyst Framework and **together create** the Ecosystem environment (= Enlystnow). Each keeps a unique colour system and its own public voice on its own host.

| Practice | Accent | Pale | 58% | 26% | Public host | Voice |
|----------|--------|------|-----|-----|-------------|-------|
| **enlyst** | `#2D5BE3` | `#EEF2FD` | `--arm-enlyst-58` | `--arm-enlyst-26` | `enlystnow.com` | Smart Recruiting |
| **enlysum** | `#1A7A4A` | `#EBF5EF` | `--arm-enlysum-58` | `--arm-enlysum-26` | `enlystnow.com/enlysum/` (temp) | Finance |
| **enlybiz** | `#C4620A` | `#FDF3EC` | `--arm-enlybiz-58` | `--arm-enlybiz-26` | `enlybiz.com` | Marketing |
| **enlysoft** | `#6B3FA0` | `#F2EEF9` | `--arm-enlysoft-58` | `--arm-enlysoft-26` | `enlysoft.net` | Technology |

Accent hexes are verified against the Ecosystem snapshot token file. Do not collapse or re-tint them.

## Spelling (exact, lowercase)

`enlyst` · `enlysum` · `enlybiz` · `enlysoft`

Lowercase in running copy and in all attribute values. Never `Enlyst Sum`, `EnlyBiz`, `Enlysoft`, `enlySoft`, or `enlyst-hr`. The only capitalised forms are `Enlyst Framework` (a proper noun) and sentence-initial position.

## CSS hooks

```html
<html data-arm="enlyst" data-intensity="standard">
```

| Attribute | Values | Status |
|-----------|--------|--------|
| `data-arm` | `enlyst` `enlysum` `enlybiz` `enlysoft` `framework` `enlystnow` | Canonical |
| `data-division` | same four practice values | Legacy alias — supported for Ecosystem snapshot CSS compatibility; do not author new markup with it |
| `.scope-enlyst` … `.scope-enlysoft` | — | Legacy class alias, same behaviour |

Each hook sets `--accent`, `--accent-58`, `--accent-26`, `--accent-pale`, `--glow-color` and `--glow-color-rgb`. Full definitions: [`tokens/ecosystem.tokens.css`](tokens/ecosystem.tokens.css).

## enlystnow.com root

- Primary identity: **enlyst** (Smart Recruiting).
- Default accent: `--arm-enlyst` — this is also the DS-wide `--accent` default.
- The path map and the `/ecosystem/` showcase may display other practice and door colours as *content* without changing the host's global lockup.

**Domain ≠ brand.** Owning `enlystnow.com` does not make Enlystnow the site's brand. See [04-ENLYSTNOW-ADMIN.md](04-ENLYSTNOW-ADMIN.md).

## Practice pages and craft

Copy stays practice-native. Craft — atmosphere, motion, door theatre, chrome — comes from the **Enlystnow Ecosystem craft bar**, the 16 locked patterns in [docs/INVENTION_MANDATE.md](docs/INVENTION_MANDATE.md) §4.
