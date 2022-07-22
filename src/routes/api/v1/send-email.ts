/** @type {import('./__types/items').RequestHandler} */
export async function POST({ request }) {
  const data = await request.formData();

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

  /*const response = await fetch(mailRequest);
  if(response.status !== 202) {
    return {
      status: 500,
      body: {
        success: false,
        message: 'E-mail sending failed.'
      }
    }
  }*/
  return {
    status: 200,
    body: {
      success: true,
      message: 'E-mail sent.',
      headers: request.headers
    }
  };
}
