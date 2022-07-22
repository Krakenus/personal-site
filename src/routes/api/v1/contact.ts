import {sendEmail} from "$lib/server/mailChannel";
import { dev } from '$app/env';


/** @type {import('./__types/items').RequestHandler} */
export async function POST({ request }) {
  const data = await request.formData();

  if(!dev) {
    const response = await sendEmail(data);
    if (response.status !== 202) {
      return {
        status: 500,
        body: {
          success: false,
          message: 'E-mail sending failed.'
        }
      }
    }
  }
  return {
    status: 200,
    body: {
      success: true,
      message: 'E-mail sent.'
    }
  };
}
