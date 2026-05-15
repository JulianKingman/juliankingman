# Spec: Dream Locket page on juliankingman.com

## Goal
Add a marketing/landing page for Dream Locket (the iOS dream journal app, codenamed DreamVault internally) to the personal portfolio site, plus surface it as an entry on the existing `/projects` listing.

## Scope

### In
1. New route: `/dream-locket` — a full landing page.
2. New project card on `/projects` linking to `/dream-locket`.
3. Pull existing assets from `~/Projects/dream-vault` (app icon, design mock screens).
4. Apply the portfolio's amber/orange-on-black aesthetic, leaning into Dream Locket's "Atmospheric Twilight" feel (deep slate-blue backdrop hint, glassmorphism cards, soft rounded corners) on this page only.

### Out
- No CMS / no data fetching — static page.
- No top-nav entry (page is discoverable from `/projects`).
- No App Store / TestFlight link wired up yet — placeholder CTA with TODO comment until URL is supplied.
- No real device-frame screenshots — use the existing design mocks from `dream-vault/designs/*/screen.png`. Real screenshots can replace them later by overwriting the files at the same paths.
- No analytics events / SEO beyond standard Next metadata.

## File changes

### New files
- `src/app/dream-locket/page.tsx` — the landing page (Server Component where possible; client only if interactivity needed).
- `public/dream-locket/icon.png` — copied from `~/Projects/dream-vault/assets/images/icon.png` (1024×1024).
- `public/dream-locket/screens/home.png` — copied from `dream-vault/designs/home_feed_twilight/screen.png`.
- `public/dream-locket/screens/new-entry.png` — copied from `dream-vault/designs/new_entry_twilight/screen.png`.
- `public/dream-locket/screens/detail.png` — copied from `dream-vault/designs/dream_detail_twilight_modal/screen.png`.
- `public/dream-locket/screens/import.png` — copied from `dream-vault/designs/1_time_import_twilight/screen.png`.

### Modified files
- `src/app/projects/page.tsx` — add a new entry to the `projects` array for Dream Locket. The card will link to `/dream-locket` (so clicking it routes there rather than opening the modal). Smallest viable change: extend `Project` with `internalUrl?: string`, and when present, the card becomes an `<a>` to that URL instead of an `onClick` modal trigger.

## Page structure (`/dream-locket`)

Single page, top-to-bottom sections — all on the same shared dark background the portfolio uses:

1. **Hero**
   - App icon (left or centered).
   - Title: "Dream Locket"
   - Tagline: "A private, local-first dream journal for iOS."
   - Two CTAs: primary "Get on TestFlight" (placeholder href `#` with TODO comment), secondary "View on /projects" → back to `/projects`.

2. **What it is** (short paragraph)
   - 2–3 sentences. Frame Dream Locket as a personal, on-device sanctuary for recording and reflecting on dreams. Mention Apple Intelligence-powered insights on iOS 26+.

3. **Features** (3×2 grid of cards, glass effect)
   - Local-first storage (SQLite, never leaves your device unless you opt into iCloud).
   - Face ID lock with auto-relock on background.
   - End-to-end encryption for sensitive entries.
   - Apple Intelligence insights (iOS 26+) — on-device summaries, themes, patterns.
   - Optional iCloud sync across your devices.
   - Tag-based organization with full-text search.

4. **Screenshots gallery**
   - 4 screens in a horizontal scroll / responsive grid: Home feed, New entry, Detail, Import. Each in a faux-iPhone frame (rounded-3xl border, subtle gradient stroke). These come from the design mocks for now.

5. **Privacy blurb**
   - One-liner reinforcing local-first + encrypted + no server.

6. **Tech stack**
   - Small footer-style chip row: Expo SDK 51, React Native, Tamagui, SQLite, Apple Intelligence, MMKV, expo-local-authentication.

7. **Footer CTA**
   - Same TestFlight placeholder CTA + link back to `/projects`.

## Visual / styling rules

- Reuse `<AnimatedBackground />` for continuity.
- Section containers: `max-w-6xl mx-auto px-6`, generous vertical padding (`py-20` or more).
- Cards: `bg-black/20 backdrop-blur-sm rounded-2xl border border-orange-500/20`, matching the project cards on `/projects`.
- Headings: amber-to-orange gradient `bg-clip-text` like the existing pages.
- Phone-frame for screenshots: outer `rounded-[2.5rem] border border-amber-500/20 p-2 bg-gradient-to-b from-amber-500/5 to-transparent`, inner image `rounded-[2rem]`. Aim for ~280px wide on desktop.
- No new dependencies. Pure Tailwind + Next `<Image>`.

## Metadata

Per-route metadata via Next's `Metadata` export:
- Title: "Dream Locket — Julian Kingman"
- Description: "A private, local-first dream journal for iOS. Encrypted, Face ID-locked, with on-device Apple Intelligence insights."

## Image handling

- Use `next/image` with explicit `width` / `height` so layout doesn't jump.
- App icon displayed at ~128px in hero.
- Screenshot mocks vary in width (286–563 px source); display at uniform ~280px width with phone-frame wrapper.
- No special remote loader config needed (everything is local under `/public`).

## Project card on `/projects`

Add this entry first in the array (so it's the most prominent):

```ts
{
  id: 0,
  title: "Dream Locket",
  role: "Solo iOS Developer & Designer",
  description: "A private, local-first dream journal for iOS. Face ID lock, end-to-end encryption, optional iCloud sync, and on-device Apple Intelligence insights on iOS 26+.",
  tech: ["Expo", "React Native", "Tamagui", "SQLite", "Apple Intelligence", "Encryption"],
  image: "/dream-locket/icon.png",
  color: "from-amber-500 to-blue-600",
  liveUrl: "/dream-locket",
  githubUrl: null,
  internalUrl: "/dream-locket", // new field — when present, card links instead of opening modal
}
```

Implementation note: change the card from a `<div onClick>` to a conditional render — if `internalUrl` exists, wrap in `<Link>`; otherwise keep the existing modal behavior. This keeps all current cards untouched and modal-driven.

## TODOs the user will need to resolve later
- [ ] Provide TestFlight invite URL (or App Store URL) and replace `href="#"` placeholders (search `TODO:dream-locket-cta`).
- [ ] Optionally swap design mocks for real device screenshots once available — same file paths so no code change needed.
- [ ] Decide whether to add "Dream Locket" to the top nav (currently it's not; only reachable from `/projects` and direct URL).

## Out-of-scope risks / non-goals
- No GitHub URL — Dream Locket is private; the project card will have a null `githubUrl` and skip the "View Code" button.
- No build / type-check / deploy step inside this task. User runs `npm run dev` locally to verify.

## Acceptance
- `npm run dev` at `~/Projects/juliankingman-dream-locket` serves `/dream-locket` successfully with no console errors.
- `/projects` shows a new Dream Locket card; clicking it navigates to `/dream-locket` (no modal).
- All four screenshot files render. App icon renders in hero and project card.
- No new dependencies in `package.json`.
- Lints cleanly (`npm run lint` if available; otherwise visual check that no obvious TS errors are shown by the editor).
