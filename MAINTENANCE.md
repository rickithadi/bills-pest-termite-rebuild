# Bill's Pest & Termite Control — How to Update Your Website

This guide covers everything you can update yourself, without needing a developer.

---

## Adding a Blog Post

Your blog is powered by simple text files that live in your GitHub repository. You don't need to know how to code.

1. Go to your GitHub repo: https://github.com/rickithadi/bills-pest-termite-rebuild
2. Navigate to `src/content/blog/`
3. Click **Add file → Create new file**
4. Name it: `your-post-title.md` (use hyphens, no spaces)
5. Paste this template at the top, fill it in:

```
---
title: "Your Post Title"
date: "2026-06-15"
category: "Pest Control Services"
excerpt: "A one-sentence summary that appears on the blog index."
slug: "your-post-title"
---

Your post content starts here. Write in plain paragraphs.

## Section Headings Use Two Hashes

- Bullet points work like this
- And like this
```

6. Click **Commit new file** at the bottom
7. Your post will appear on the site within 2–3 minutes automatically (once auto-deploy is connected — see "Pointing Your Domain" section below for the one-time setup step)

---

## Updating Your Contact Details

1. Go to: `src/lib/data.ts` — the `locations` array has both office addresses and phone numbers
2. Go to: `src/components/Footer.tsx` and `src/components/Navbar.tsx` for the phone numbers shown in the header and footer
3. Click **Commit changes**

Or, more simply — just email us and we'll update it in under 10 minutes.

---

## Updating Your Services

Your services are in `src/lib/data.ts`, in the `services` array near the top of the file. Each service has:
- A `name`
- A `blurb` (the short label above the title)
- A `description`

Find the service you want to change, update the text, commit.

Your pricing plans are in the same file, in the `plans` array.

---

## Replacing the About Page Photo

The About page currently uses a clean navy background instead of a photo. Both of your available photos for that spot (`About-Us-Bills-Pest-Termite-Control.jpg` and the Services page photo) had old marketing text baked into the image itself from your previous website design, so we couldn't use them without the text showing through.

**The easiest way**: email us a high-resolution photo (JPG or PNG) of your team or a technician at work, and we'll drop it in.

**If you want to do it yourself**: the image is set in `src/pages/AboutPage.tsx`, near the top of the file, in the hero `<section>`.

---

## Setting Up Your Contact Form

Your inquiry form is currently in demo mode (it will show an error with a "call us" fallback until this is set up). To activate it:

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Click **New Form**
3. Set the email to whichever inbox should receive quote requests (your site doesn't currently have a public email address — pick the one your team checks most)
4. Copy the **Form ID** — it looks like `xrgvpkjq`
5. In your Vercel dashboard: your project → Settings → Environment Variables
6. Add a variable: `VITE_FORMSPREE_ID` = (paste your Form ID)
7. Click **Redeploy** — forms will now arrive in your inbox

Free plan: 50 submissions/month. More than enough to start.

---

## Pointing Your Domain

If you want to use your existing domain (billstermiteco.com) or a new one:

1. Go to your Vercel project dashboard
2. Click **Settings → Domains**
3. Click **Add Domain** and enter your domain
4. Vercel will show you DNS records to add — copy them
5. Go to your domain registrar
6. Add the DNS records Vercel gave you
7. Wait up to 24 hours — usually much faster

**One more one-time step:** right now, the site only updates when we manually deploy it. To make `git push` auto-deploy every change (including new blog posts), go to **github.com/settings/installations → Vercel → Configure** and add `bills-pest-termite-rebuild` to the list of repositories the Vercel app can access. We can also do this for you if that's easier.

---

## What Needs a Developer

These things are possible but require someone comfortable with React and Vite:
- Adding a completely new section type
- Changing the site's color scheme or fonts
- Adding new pages beyond the existing routes (Home, About, Services, Contact, Blog)
- Integrating a new third-party service
- Anything not covered above

Estimated time for most of these: 1–2 hours.

---

## Getting Help

For urgent issues or changes beyond this guide, reach out and we'll take care of it.
