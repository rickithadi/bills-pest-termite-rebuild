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

## Iteration 1 — Critique Pass (`/critique --auto`)
**Commit:** (pending, see below)
**Branch:** rebuild/iter-1
**Critique Score:** 36/40 — Excellent band
**Anti-patterns verdict:** PASS

**Design Health (Nielsen heuristics, summary):** strong on real-world match (plainspoken AZ-specific copy), consistency (red CTA / navy-blue trust palette used uniformly), recognition over recall (phone number and nav always visible), and error recovery (form error state includes a direct phone fallback, branded 404 with clear next steps). Moderate on flexibility/efficiency (no saved state, but multiple contact paths — call/text/form — offer real flexibility for a site this size).

**P1 found and fixed — hero image text collision:** `About-Us-Bills-Pest-Termite-Control.jpg` and `Pest-Control-Services-Phoenix-AZ-...jpg` (both client source photos) have marketing headline text baked into the image pixels from the original Divi site design. Used as full-bleed hero backgrounds, that baked-in text visually collided with the rebuild's own heading text and stayed legible even under a 93%-opacity dark overlay. Neither image is used anywhere in the final build. Replaced with: a clean navy radial-gradient on the About page hero, and two other clean (verified text-free) client photos — `Pest-Control-Company-Phoenix.jpg` on the Services hero and `Comprehensive-Phoenix-Pest-Control-Services.jpeg` on the homepage "Our Story" teaser.

**P2 found and fixed — identical card-grid anti-pattern:** `WhyUs.tsx` ("The Bill's Difference") was a 6-item uniform icon+heading+text grid — exactly the repeated-card pattern the design skill flags as a generic AI-slop tell. Restructured into 3 larger numbered differentiators (asymmetric, more editorial) plus a compact inline credentials strip (Licensed & Insured, Eco-Friendly, Fast Response) for the remaining 3 points — same content, real visual hierarchy instead of a uniform grid.

**Mobile check:**
- 375px: pass — no horizontal overflow on any of 5 routes tested (scrollWidth === clientWidth)
- 768px: pass — same, all 5 routes

**Regression check:** navbar present, hero h1 present, footer present, contact form has all 5 expected inputs — all confirmed via automated DOM query, not just visual spot-check.

**Trust-convention re-check:** palette and tone unchanged (navy/blue trust palette, red CTA accent) — still appropriate for a licensed home-services trades business; no drift toward an unconventional aesthetic.

**Exit criteria met:** score ≥36/40 ✓, anti-patterns PASS ✓, trust-convention passed ✓, no unresolved P0/P1 ✓, mobile pass at 375/768 ✓, visual verification pass ✓. Proceeding directly to merge — 5-iteration loop not needed.

---

## ✓ FINAL
**Merged:** `rebuild/iter-1` → `main` (commit 8e417b6)
**Final score:** 36/40 — Excellent band
**Anti-patterns verdict:** PASS
**Visual verification:** pass at 1440px and 375px, all 5 routes, no horizontal overflow
**Live URL:** https://bills-pest-termite-rebuild.vercel.app — verified HTTP 200 after merge

**Outstanding items (client action required):**
1. No email address exists anywhere on the source site — `VITE_FORMSPREE_ID` is unset; client must create a Formspree account and provide a form ID
2. About page hero uses a clean gradient (no photo) — the client's only two available photos for that slot had unusable baked-in text; client can supply a replacement photo if desired
3. Out-of-scope pages (per CONTENT.md): ~45 individual city/service-area landing pages and ~15 individual pest-specific service subpages — consolidated into one Service Areas list and one Services overview page for this sample
4. Single ~165KB gzipped JS bundle (no code-splitting) — acceptable for a pitch sample, worth addressing post-launch
5. Vercel GitHub App does not have access to this repo yet (deploys so far are manual CLI pushes) — client should add the repo at github.com/settings/installations → Vercel → Configure, so future `git push` calls auto-deploy
