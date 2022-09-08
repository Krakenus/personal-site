import type {IContactApiData} from "$lib/types";


export async function sendEmail(data: IContactApiData): Promise<Response> {
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
                    value: `New website message.\n\nName: ${data.name}\nE-mail: ${data.email}\n\nMessage:\n${data.message}`
                },
                {
                    type: 'text/html',
                    value: `New website message.<br><br>Name: ${data.name}<br>E-mail: ${data.email}<br><br>Message:<br>${data.message}`
                }
            ]
        })
    });

    return await fetch(mailRequest);
}
