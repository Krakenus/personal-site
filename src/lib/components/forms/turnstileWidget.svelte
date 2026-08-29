<script lang="ts" module>
    const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

    /** Shared across every instance: the script only ever gets injected once. */
    let loader: Promise<void> | undefined;

    function loadTurnstile(): Promise<void> {
        if (window.turnstile) {
            return Promise.resolve();
        }

        loader ??= new Promise<void>((resolve, reject) => {
            const script = document.createElement('script');
            script.src = SCRIPT_SRC;
            script.async = true;
            script.defer = true;
            script.addEventListener('load', () => resolve(), { once: true });
            script.addEventListener('error', () => {
                // Allow a later mount to retry rather than caching the failure.
                loader = undefined;
                reject(new Error('Turnstile script could not be loaded.'));
            }, { once: true });
            document.head.appendChild(script);
        });

        return loader;
    }
</script>

<script lang="ts">
    import { darkMode } from '$lib/stores/darkMode';

    interface Props {
        /** Public site key — safe in the client bundle, unlike the secret key. */
        siteKey: string;
        /** Bindable. The solved token, or `undefined` while unsolved/expired. */
        token?: string;
    }

    // `token` is write-only in here — the widget only ever publishes it outwards
    // through `bind:token`, which no-useless-assignment cannot see.
    // eslint-disable-next-line no-useless-assignment
    let { siteKey, token = $bindable() }: Props = $props();

    let container: HTMLDivElement | undefined = $state();
    let widgetId: string | undefined = $state();
    let failed = $state(false);

    /**
     * Discards the current token and asks Turnstile for a fresh one. Tokens are
     * single-use, so the form calls this after every submit attempt.
     */
    export function reset() {
        token = undefined;
        if (widgetId !== undefined) {
            window.turnstile?.reset(widgetId);
        }
    }

    // The widget's theme is fixed at render time, so a dark-mode toggle has to
    // tear the widget down and render a new one.
    $effect(() => {
        const theme = $darkMode ? 'dark' : 'light';
        const element = container;

        if (!element) {
            return;
        }

        let cancelled = false;

        loadTurnstile().then(() => {
            if (cancelled || !window.turnstile) {
                return;
            }

            failed = false;
            widgetId = window.turnstile.render(element, {
                sitekey: siteKey,
                theme: theme,
                callback: (value: string) => {
                    token = value;
                },
                'expired-callback': () => {
                    token = undefined;
                },
                'timeout-callback': () => {
                    token = undefined;
                },
                'error-callback': () => {
                    token = undefined;
                }
            });
        }).catch(() => {
            if (!cancelled) {
                failed = true;
            }
        });

        return () => {
            cancelled = true;
            token = undefined;
            if (widgetId !== undefined) {
                window.turnstile?.remove(widgetId);
                widgetId = undefined;
            }
        };
    });
</script>

<div class="my-4">
    <div bind:this={container}></div>
    {#if failed}
        <p class="text-sm">Verification could not be loaded. Please check your connection and reload the page.</p>
    {/if}
</div>
