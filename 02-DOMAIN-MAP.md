# 02 — Domain map (cPanel / GoDaddy)

## Owned hosts

| Host | Stack owner | Purpose |
|------|-------------|---------|
| `enlystnow.com` | Primary SEO property | **enlyst** smart recruiting root; Ecosystem; temp Enlysum; path map |
| `enlybiz.com` | enlybiz | Marketing arm site |
| `enlysoft.net` | enlysoft | Technology arm site |

**Not owned yet:** `enlysum.com` → temp at `https://enlystnow.com/enlysum/`  
When acquired: 301 every temp URL → `https://enlysum.com/...`

## Canonical host rules (all three)

1. **HTTPS only** — HTTP 301 → HTTPS.  
2. **Apex preferred** — `www.` 301 → apex (`enlystnow.com`, not `www.enlystnow.com`).  
3. One stack per host for the public site (no WP + static twin on the same path returning 200).  
4. Cross-arm links use **absolute HTTPS** URLs.

## Path map on enlystnow.com

| Path | Surface |
|------|---------|
| `/` | enlyst home (recruiting practice) |
| `/paths/` | Ecosystem path map (practices + 18 doors) — or mega-nav equivalent |
| `/ecosystem/` | **Ecosystem = Enlystnow** showcase (former Showreel craft name) |
| `/enlysum/` | Temporary enlysum practice |
| `/framework/` | Optional Framework method pages (constitution, not brand home) |
| `/about-ecosystem/` | Optional institutional explainer (does not replace enlyst root) |

## Redirect when Enlysum graduates

```
https://enlystnow.com/enlysum/          → 301 → https://enlysum.com/
https://enlystnow.com/enlysum/{path}    → 301 → https://enlysum.com/{path}
```

Fallback if path-host is awkward later: `finance.enlystnow.com` (same 301 discipline).

## Identity lockup on each host

| Host | Logo / wordmark | Nav accent |
|------|-----------------|------------|
| enlystnow.com | **enlyst** | `--arm-enlyst` / door accents in path map |
| enlybiz.com | **enlybiz** | `--arm-enlybiz` |
| enlysoft.net | **enlysoft** | `--arm-enlysoft` |
| /enlysum/ | **enlysum** | `--arm-enlysum` |
| /ecosystem/ | enlyst chrome in global shell; stage may be full-bleed cinematic | door/practice colors inside experience |

> Ontology: [VISION.md](VISION.md) — Ecosystem = Enlystnow is the environment practices create, not the consumer brand of `.com` root.
