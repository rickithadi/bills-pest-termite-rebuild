# Bill's Pest & Termite Control — Rebuild Iterations

Source: https://billstermiteco.com/
Repo: https://github.com/rickithadi/bills-pest-termite-rebuild

---

## Iteration 1 — Initial Build
**Commit:** 4afdd7d
**Branch:** rebuild/iter-1 (off main)
**Vercel Preview:** https://bills-pest-termite-rebuild.vercel.app (one-time CLI deploy — GitHub App needs repo access added by client for auto-deploy on push; see note below)
**Critique Score:** pending

**What was built:**
- Home, About, Services, Contact, Blog index + 4 original articles, Privacy Policy, 404
- Navbar (sticky, mobile hamburger w/ Escape + backdrop dismiss), Footer, QuoteForm (Formspree), JSON-LD LocalBusiness schema
- Trust-blue palette (navy/blue/red) derived from source site, Rubik + Montserrat typography (both found live in source CSS)
- sitemap.xml, robots.txt, security headers in vercel.json

**Bugs found and fixed during build (not critique — caught via manual verification):**
- `gray-matter` (blog frontmatter parser) required Node's `Buffer` global, which isn't polyfilled by Vite by default — broke the entire app with a blank white screen. Replaced with the hand-rolled frontmatter parser (handles colons in values correctly by splitting only on the first `:`), matching the skill's own tech-stack reference pattern.
- Framer Motion `useInView`-gated entrance animations on the Services and Testimonials grids left cards stuck at `opacity: 0` under fast/programmatic scrolling (verified via headless browser testing, not just visual spot-check) — this is conversion-critical content (pricing/social proof), so removed scroll-gated animation from those two sections entirely rather than risk it failing for real users.

**Deployment note:** Vercel GitHub App does not have access to this new repo (likely "selected repositories" install scope) — no webhook present on the repo despite `vercel git connect` reporting success. Client needs to add the repo at github.com/settings/installations → Vercel → Configure. Used a one-time `vercel deploy --prod` to get a live URL for this review cycle in the meantime.

**Mobile check:**
- 375px: pass — hamburger nav works, Escape key closes menu, no horizontal overflow (scrollWidth === clientWidth verified)
- 768px: pass — no horizontal overflow verified

**Known remaining issues:**
- No client email address was found anywhere on the source site — Formspree form has no `VITE_FORMSPREE_ID` set yet (client action item)
- Bundle is a single ~165KB gzipped JS chunk (no code-splitting) — acceptable for a pitch sample, flagged for post-launch optimization

---
