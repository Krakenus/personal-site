// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

/** Options accepted by `turnstile.render()`, as documented at
 *  https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/ */
interface TurnstileRenderOptions {
	sitekey: string;
	theme?: 'light' | 'dark' | 'auto';
	size?: 'normal' | 'flexible' | 'compact';
	action?: string;
	callback?: (token: string) => void;
	'expired-callback'?: () => void;
	'timeout-callback'?: () => void;
	'error-callback'?: (code: string) => void;
}

/** The `window.turnstile` API installed by the Cloudflare Turnstile script.
 *  Loaded on demand by `$lib/components/forms/turnstileWidget.svelte`. */
interface TurnstileApi {
	render(container: HTMLElement, options: TurnstileRenderOptions): string | undefined;
	remove(widgetId: string): void;
	reset(widgetId?: string): void;
}

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	interface Window {
		turnstile?: TurnstileApi;
	}
}

export {};
