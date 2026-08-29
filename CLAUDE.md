# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site (milanvlasak.cz) — SvelteKit 2 + Svelte 5, TypeScript, Tailwind 4, deployed
to Cloudflare Pages via `@sveltejs/adapter-cloudflare`.

## Commands

Package manager is **npm** (`package-lock.json`). `.npmrc` sets `engine-strict=true` against the
`engines.node` range in package.json (`>=24`), and `.nvmrc` pins Node 24.

```bash
npm run dev       # vite dev on port 3000
npm run build     # production build (adapter-cloudflare)
npm run preview
npm run check     # svelte-kit sync && svelte-check  — the type check
npm run lint      # eslint .
```

There is no test framework configured in this repo. `npm run check` + `npm run lint` are the full
verification story; don't invent a test command. Because the site is fully prerendered, the other
useful check is diffing `.svelte-kit/cloudflare/*.html` across a change.

## Architecture

**The site is fully prerendered.** `src/routes/+layout.ts` sets `prerender = true` for every route.
Page content is hardcoded prose inside the `.svelte` files — there is no CMS, data loading layer, or
`+page.ts` anywhere. Adding content means editing markup.

**One dynamic endpoint.** `POST /api/v1/contact` (`src/routes/api/v1/contact/+server.ts`) is the only
server code; it delegates to `sendEmail()` in `src/lib/server/mailgun.ts` and runs as a Cloudflare
function. It performs no validation — the contact form's "2 + 2 = ?" spam check
(`src/lib/components/forms/contactForm.svelte`) is client-side only.

**Secrets are build-time, not runtime.** `mailgun.ts` reads `import.meta.env.VITE_*` (see
`.env.example`), which Vite *inlines at build time* — Cloudflare runtime secret bindings would not
reach this code, and the build environment must have the vars. The `VITE_` prefix means these values
would land in the client bundle if this module were ever imported from a component; the
`$lib/server/` boundary is the only thing preventing that. Keep Mailgun access behind it.

**Dark mode is duplicated by design.** `app.css` redefines the `dark:` variant as class-based
(`@custom-variant dark`), since Tailwind 4 defaults it to a media query. The store
(`src/lib/stores/darkMode.ts`) owns `localStorage.theme` and toggles `.dark` on `<html>`, but an
inline `<script>` in `darkModeSwitch.svelte`'s `<svelte:head>` repeats that same logic so the class
is applied before hydration and the prerendered page doesn't flash. Change one, change the other.

**Styling is CSS-first (Tailwind 4).** There is no `tailwind.config.*` and no `postcss.config.*` —
`@tailwindcss/vite` is registered in `vite.config.ts`, and all configuration lives in
`src/lib/styles/app.css`, imported once in `+layout.svelte`: the `@theme` block defines the
`--font-open-sans` / `--font-roboto` tokens, `@custom-variant` defines class-based dark mode.

That file's rules must stay **inside `@layer base` / `@layer components`**, never unlayered.
Unlayered CSS outranks every cascade layer, so moving them out would make `.bordered-content`'s
`dark:bg-gray-800` beat the `dark:bg-gray-600` utility that `iconRow.svelte` and `techSlider.svelte`
put on the same element — silently changing the dark theme. Reuse `.bordered-content` rather than
repeating the ring/shadow/dark-bg utility chain.

## Conventions

- **Svelte 5 runes only.** Components declare a local `interface Props`, destructure via `$props()`,
  use `$state()` for local state, and accept slots as snippets (`children?: import('svelte').Snippet`
  rendered with `{@render children?.()}`). Match this in new components.
- Component files are camelCase (`pageHeader.svelte`), imported under PascalCase names, always via
  the `$lib/...` alias.
- Every page owns its own `<svelte:head>` with `<title>`, `og:title`, description and an absolute
  `rel="canonical"` to `https://milanvlasak.cz/...`. New pages need all four.
- Tech-stack icons are loaded from the jsDelivr devicon CDN through `svgIcon.svelte` / `svgLink.svelte`
  (attribution lives in `pageFooter.svelte`); they are not vendored into `static/`.
- Internal `<a href>` values go through `resolve()` from `$app/paths` (the
  `svelte/no-navigation-without-resolve` lint rule enforces this); route props are typed as
  `Pathname` from `$app/types`. Note that with SvelteKit's default `paths.relative`, both `resolve()`
  and `base` return values relative to the current page (`"./"`), so active-link checks must compare
  `page.url.pathname` against the raw absolute `href` — see `navlink.svelte`.
- External links carry `rel="external noreferrer"`, which also exempts them from that lint rule.
- Source files under `src/` use 4-space indentation (root config files use tabs).
