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
		adapter: adapter()
	}
};

export default config;
