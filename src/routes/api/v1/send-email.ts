/** @type {import('./__types/items').RequestHandler} */
export async function POST({ request }) {
  const data = await request.formData();

  

  return {
    status: 200,
  };
}
