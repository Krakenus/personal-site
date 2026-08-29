# milanvlasak.cz

Personal portfolio site — [milanvlasak.cz](https://milanvlasak.cz)

Built with [SvelteKit](https://svelte.dev/docs/kit) 2 + [Svelte](https://svelte.dev) 5,
TypeScript and [Tailwind CSS](https://tailwindcss.com) 4. Fully prerendered and deployed to
Cloudflare Pages via `@sveltejs/adapter-cloudflare`.

## Requirements

- Node.js 24 (see `.nvmrc`; `engine-strict` is on, so older versions are refused)
- npm

## Getting started

```bash
nvm use          # Node 24
npm install
cp .env.example .env   # fill in the Mailgun values, see below
npm run dev            # http://localhost:3000
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Vite dev server on port 3000 |
| `npm run build` | Production build into `.svelte-kit/cloudflare` |
| `npm run preview` | Serve the production build locally |
| `npm run check` | `svelte-kit sync` + `svelte-check` (type check) |
| `npm run lint` | ESLint |

There is no test suite; `npm run check` and `npm run lint` are the verification story.

## Environment

The contact form posts to `POST /api/v1/contact`, which sends mail through Mailgun. The credentials
are read via `import.meta.env.VITE_*` and are **inlined at build time**, so they must be present in
the build environment (not only at runtime). See `.env.example` for the full list of keys.

## Deployment

Cloudflare Pages, via the Git integration:

- Build command: `npm run build`
- Build output directory: `.svelte-kit/cloudflare`
- Runtime compatibility flag: `nodejs_als`

The `VITE_*` variables above must also be set as Cloudflare Pages build environment variables.
