const SITEVERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

interface ISiteverifyResponse {
    success: boolean;
    'error-codes'?: string[];
}

/**
 * Validates a Cloudflare Turnstile token against the siteverify API.
 *
 * The secret key must never reach the browser — this module stays behind the
 * `$lib/server/` boundary for the same reason `mailgun.ts` does, since the
 * `VITE_` prefix would otherwise inline it into any client bundle that imports it.
 */
export async function verifyTurnstileToken(token: string | undefined, remoteIp?: string | null): Promise<boolean> {
    if (!token) {
        return false;
    }

    const formdata = new FormData();
    formdata.append('secret', import.meta.env.VITE_CF_TURNSTILE_SECRET_KEY);
    formdata.append('response', token);
    if (remoteIp) {
        formdata.append('remoteip', remoteIp);
    }

    const response = await fetch(SITEVERIFY_URL, {
        method: 'POST',
        body: formdata
    });

    if (!response.ok) {
        return false;
    }

    const result: ISiteverifyResponse = await response.json();

    return result.success === true;
}
