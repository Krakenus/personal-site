import {sendEmail} from "$lib/server/mailgun";
import {verifyTurnstileToken} from "$lib/server/turnstile";
import type { IContactApiRequest } from "$lib/types";
import type { RequestHandler } from './$types';


export const POST: RequestHandler = async ({ request, getClientAddress }) => {
  const { turnstileToken, ...data }: IContactApiRequest = await request.json();

  const verified = await verifyTurnstileToken(turnstileToken, getClientAddress());

  if (!verified) {
    return new Response(JSON.stringify({
        success: false,
        message: 'Verification failed.'
      }), {
        status: 403
      }
    );
  }

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
