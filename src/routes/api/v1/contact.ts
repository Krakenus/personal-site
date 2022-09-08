import {sendEmail} from "$lib/server/mailChannels";
import { dev } from '$app/env';
import type { IContactApiData } from "$lib/types";


/** @type {import('./__types/items').RequestHandler} */
export async function POST({ request }) {
  const data: IContactApiData = await request.json();

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
