import type {IContactApiData} from "$lib/types";


export async function sendEmail(data: IContactApiData): Promise<Response> {
    const apiCreds = btoa(`api:${import.meta.env.VITE_MAILGUN_API_KEY}`);
    
    const formdata = new FormData();
    formdata.append('from', `${import.meta.env.VITE_NAME_FROM} <${import.meta.env.VITE_EMAIL_FROM}>`);
    formdata.append('to[0]', `${import.meta.env.VITE_NAME_TO} <${import.meta.env.VITE_EMAIL_TO}>`);
    formdata.append('subject', 'Website message');
    formdata.append('text', `New website message.\n\nName: ${data.name}\nE-mail: ${data.email}\n\nMessage:\n${data.message}`);
    formdata.append('html', `New website message.<br><br>Name: ${data.name}<br>E-mail: ${data.email}<br><br>Message:<br>${data.message}`);

    return await fetch(
        `${import.meta.env.VITE_MAILGUN_API_URL}/${import.meta.env.VITE_MAILGUN_SENDING_DOMAIN}/messages`,
        {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${apiCreds}`,
            },
            body: formdata
        }
    );
}
