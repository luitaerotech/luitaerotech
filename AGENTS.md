# AGENTS.md

Rules and conventions for working in this repo.

## Guiding principles

- Do not overcomplicate things for no reason. Prefer the simple, direct solution over a clever or
  abstracted one unless there's a concrete need for the extra complexity.
- Only add what's necessary. No speculative components, config, dependencies, or abstractions for
  hypothetical future use — add them when an actual need shows up, not before.

## Stack

- TanStack Start (SSR, file-based routing) + React 19 + TypeScript, on Vite 7.
- Tailwind CSS 4 is wired in globally (`src/styles.css`, imported in `src/routes/__root.tsx`), but the
  marketing site (see below) uses its own plain CSS instead of Tailwind utility classes.
- Appwrite (`src/lib/appwrite.ts`) provides `client` / `account` / `databases`, configured from
  `VITE_APPWRITE_*` env vars (`.env`, see `.env.example`). `.env` is gitignored — never commit it.
- Biome (not ESLint/Prettier) handles linting and formatting: `npm run lint`, `npm run format`,
  `npm run check`.

## Routing

- Routes live in `src/routes/**`, one file per route (file-based routing).
- `src/routeTree.gen.ts` is **generated** by the TanStack Router Vite plugin on `dev`/`build`.
  Never hand-edit it — it gets overwritten. If routes look stale, run `npm run build` (or start the
  dev server) to regenerate it.
- Current routes:
  - `/` (`src/routes/index.tsx`) — Luit Aerotech marketing homepage.
  - `/services` (`src/routes/services.tsx`) — Luit Aerotech service catalogue detail page.
  - `/demo` (`src/routes/demo.tsx`) — the original TanStack Start + Appwrite "ping" scaffold demo,
    kept around as a connectivity check; not linked from the marketing nav.
- Per-route `head()` (title/meta/link tags) overrides/merges with `src/routes/__root.tsx`'s root head.
  Give every new top-level route its own `title` and `description` meta.

## Marketing site (`/` and `/services`)

- This was migrated from two standalone static HTML files (`index.html`, `services.html`) that used
  to sit at the project root. They are gone now — all of that content lives in the routes above.
- Shared UI lives in `src/components/marketing/` (`SiteHeader`, `SiteFooter`) and
  `src/hooks/useScrollReveal.ts` (recreates the original scroll-reveal IntersectionObserver behavior).
- Styling is `src/styles/marketing.css`, loaded per-route via `?url` import + a `<link>` in that
  route's `head()` — it is **not** imported globally, so it never leaks into `/demo` or other
  non-marketing routes. Every selector in that file is scoped under a `.marketing` root class; wrap
  any new marketing page content in `<div className="marketing">`.
- The `useUniqueElementIds` Biome rule is turned off project-wide (`biome.json`) because this site
  relies on static `id`s for anchor navigation (`#services`, `#roadmap`, `#enquiry`, etc.) and
  `label htmlFor` pairing in the enquiry form — both are legitimate uses Biome otherwise flags.
- The brand logo lives at `public/luit-logo.png` (extracted from an inline base64 data URI in the
  original HTML) and doubles as the favicon.

## Deployment (Appwrite Sites)

- This app is hosted on **Appwrite Sites**, connected to `origin` on GitHub. Pushing to `main`
  triggers a build/deploy there.
- `vite.config.ts` includes `nitroV2Plugin({ preset: 'node-server' })` (from
  `@tanstack/nitro-v2-vite-plugin`) **on purpose** — do not remove it. TanStack Start 1.132+ dropped
  Nitro by default and builds a Vite-native `dist/client` + `dist/server` bundle instead. Appwrite
  Sites' TanStack Start runtime, however, expects the older Nitro output shape
  (`.output/server/index.mjs`) — without this plugin, Appwrite's build step fails with
  `cd: ./.output: No such file or directory`. Verify after any Vite/TanStack upgrade by running
  `npm run build` and confirming `.output/server/index.mjs` exists (not just `dist/`).
- Appwrite Site build settings: install `npm install`, build `npm run build`, output directory
  `./.output`.

## General

- Don't hand-edit generated files (`src/routeTree.gen.ts`).
- Prefer TanStack's `Link` for same-app navigation (`to="/services"`, with `hash` for anchors on
  another route) and plain `<a href="#section">` for same-page hash anchors.
- Run `npm run check` (and `npm run build` if routes changed) before considering a change done.
