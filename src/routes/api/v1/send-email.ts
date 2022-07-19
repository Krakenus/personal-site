import {createTransport} from 'nodemailer';

/** @type {import('./__types/items').RequestHandler} */
export async function POST({ request }) {
  const data = await request.formData();

  const mailer = createTransport({
    host: import.meta.env.VITE_EMAIL_HOST,
    port: import.meta.env.VITE_EMAIL_PORT,
    auth: {
      user: import.meta.env.VITE_EMAIL_USERNAME,
      pass: import.meta.env.VITE_EMAIL_PASSWORD
    }
  })

  await mailer.sendMail({
    from: '',
    to: '',
    subject: 'New message from personal site',
    text: `${data.get("name")}\n${data.get("email")}\n\n${data.get("message")}`,
    html: `${data.get("name")}<br>${data.get("email")}<br><br>${data.get("message")}`
  })

  return {
    status: 200,
  };
}
