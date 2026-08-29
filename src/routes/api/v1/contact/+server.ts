import {sendEmail} from "$lib/server/mailgun";
import type { IContactApiData } from "$lib/types";
import type { RequestHandler } from './$types';


export const POST: RequestHandler = async ({ request }) => {
  const data: IContactApiData = await request.json();

  const response = await sendEmail(data);

  if (response.status !== 200) {
    return new Response(JSON.stringify({
        success: false,
        message: 'E-mail sending failed.'
      }), {
        status: 500
      }
    );
  }

  return new Response(JSON.stringify({
      success: true,
      message: 'E-mail sent.'
    }), {
      status: 200
    }
  );
}
