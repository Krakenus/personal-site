export async function validateHCaptcha(token: string): Promise<boolean> {
    const hcaptchaRequest = new Request('https://hcaptcha.com/siteverify', {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            response: token,
            sitekey: import.meta.env.VITE_HCAPTCHA_SITE_KEY,
            secret: import.meta.env.VITE_HCAPTCHA_SECRET_KEY,
        })
    });

    const response = await fetch(hcaptchaRequest);
    const data = await response.json();
    console.log(response.status);
    console.log(data);
    return data.success;
}
