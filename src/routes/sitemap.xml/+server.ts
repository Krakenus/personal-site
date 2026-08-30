import { SITE_URL } from '$lib/site';
import type { RequestHandler } from './$types';

export const prerender = true;

const ROUTES = [
    '/',
    '/contact',
    '/technologies',
    '/technologies/backend',
    '/technologies/frontend',
    '/technologies/devops',
    '/technologies/tools'
];

export const GET: RequestHandler = () => {
    const urls = ROUTES.map(
        (route) => `    <url>
        <loc>${SITE_URL}${route}</loc>
    </url>`
    ).join('\n');

    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

    return new Response(body, {
        headers: { 'Content-Type': 'application/xml' }
    });
};
