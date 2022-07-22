export async function sendEmail(data: FormData): Promise<Response> {
    const mailRequest = new Request('https://api.mailchannels.net/tx/v1/send', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            personalizations: [
                {
                    to: [{email: import.meta.env.VITE_EMAIL_TO, name: import.meta.env.VITE_NAME_TO}]
                }
            ],
            from: {
                email: import.meta.env.VITE_EMAIL_FROM,
                name: import.meta.env.VITE_NAME_FROM
            },
            subject: 'Website message',
            content: [
                {
                    type: 'text/plain',
                    value: `New website message.\n\nName: ${data.get('name')}\nE-mail: ${data.get('email')}\n\nMessage:\n${data.get('message')}`
                },
                {
                    type: 'text/html',
                    value: `New website message.<br><br>Name: ${data.get('name')}<br>E-mail: ${data.get('email')}<br><br>Message:<br>${data.get('message')}`
                }
            ]
        })
    });

    return await fetch(mailRequest);
}
