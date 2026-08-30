import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Builds for Cloudflare Pages. The adapter only switches to Cloudflare
		// Workers Static Assets when a Wrangler config file is present in the
		// project root, so deliberately don't add one.
		// See https://svelte.dev/docs/kit/adapter-cloudflare
		adapter: adapter(),
		// /sitemap.xml isn't linked from any page, so the prerender crawler
		// (which walks from '/') never reaches it — list it explicitly.
		prerender: {
			entries: ['*', '/sitemap.xml']
		}
	}
};

export default config;
