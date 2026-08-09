# 03 — SEO and redirects (Google-safe)

## Primary problem (clarified)

Google still indexes the **previous enlystnow.com WordPress website** — pages that remain buried in **cPanel / WordPress** (document root, addon domain folder, or an old install not fully retired). Typical indexed URLs include:

- Home / front page  
- About  
- Blog (index + posts)  
- Services (and similar WP pages)

Those URLs must **stop serving as live 200 pages** and must **301** to the correct new destinations so Google drops the stale site and passes equity to the new enlyst root / Ecosystem / arm pages.

This is not about Design-Libraries archives on D:. It is about **what the public host still answers for** and **what GSC still lists**.

## Principles

1. **One canonical URL per intent** — `rel=canonical` + matching internal links.  
2. **Stale WP → 301** to the best new equivalent (never 302 for permanent moves).  
3. **No soft-404** — never leave old WP themes returning “pretty” pages with HTTP 200.  
4. **Gone with no successor → 410** (or 404 after sitemap removal); prefer 301 when equity matters.  
5. **Sitemaps list only live 200 canonicals** for the *new* stack.  
6. **Do not run old WP and new static/site on the same paths** both returning 200.  
7. **HTTP → HTTPS** and **www → apex** on all hosts.  
8. Recruiter / private preview → `noindex` if not for Google.

## Workstream (buried WP + GSC)

1. In **cPanel**: locate the live document root for `enlystnow.com` and any leftover WordPress (`public_html`, subdomain, `wp-*`, old theme folders).  
2. In **Google Search Console**: export Coverage / “Indexed” URLs for `enlystnow.com` (filter home, about, blog, services, `/category/`, `/tag/`, `?p=`, etc.).  
3. Map each indexed URL → new destination (table below + filled CSV).  
4. Implement **301s in `.htaccess`** (or LiteSpeed equivalent) *before or as* the new site takes the root.  
5. Retire or block the old WP front controller from answering those paths (redirect wins; ideally WP is no longer the homepage handler).  
6. Remove/replace old WP `sitemap.xml` / Yoast/RankMath sitemaps; publish new sitemap for the new stack only.  
7. Validate with `curl -I` on the old URLs; request indexing for new hubs; monitor soft-404s until GSC drops stale entries.

## Default redirect map — old WP → new enlystnow.com

Fill exact slugs from GSC; these are the **intended classes**:

| Old WP (still indexed) | New target | Notes |
|------------------------|------------|--------|
| `/` (old WP home) | `/` | Only after new **enlyst** home owns root; until then do not leave WP home as 200 once new home is ready |
| `/about/`, `/about-us/`, `/about-enlyst/` | `/about/` (or elected enlyst about path) | 301 |
| `/services/`, `/our-services/` | `/services/` | 301 |
| `/blog/`, `/news/`, `/category/*` | `/blog/` or nearest topic hub | Prefer hub over 410 if posts had equity |
| Individual old posts `/YYYY/…` or `/?p=` | Matching new article **or** `/blog/` | 301 |
| `/contact/` | `/contact/` | 301 |
| Old “umbrella / mother brand” marketing pages | `/` or `/ecosystem/` | Cinematic-only → `/ecosystem/` |
| `/showreel/` | `/ecosystem/` | Rename |
| Dead thin pages with no successor | `410` | After sitemap removal |

Cross-arm if an old WP page was clearly enlybiz/enlysoft content:

| Old on enlystnow.com | Target |
|----------------------|--------|
| Marketing-only WP pages | `https://enlybiz.com/…` |
| Tech-only WP pages | `https://enlysoft.net/…` |

## On-page (new stack)

- `enlystnow.com` titles/descriptions = **enlyst / recruiting**.  
- `/ecosystem/` = experience / ecosystem showcase (not “Enlystnow brand”).  
- Distinct Organization JSON-LD per arm host.  

## cPanel checklist

- [ ] Found buried WP install(s) for enlystnow.com  
- [ ] GSC URL list exported (home, about, blog, services + long tail)  
- [ ] `seo/redirect-map.csv` filled from that list  
- [ ] `.htaccess` 301s live; old WP no longer 200 on those paths  
- [ ] Old WP sitemaps gone; new sitemap submitted  
- [ ] Apex + HTTPS forced  
- [ ] Spot-check 20 old URLs → 301 → correct Location  

See: [`seo/redirect-map.template.csv`](seo/redirect-map.template.csv), [`seo/sitemap-policy.md`](seo/sitemap-policy.md), [`seo/robots.examples.txt`](seo/robots.examples.txt).
