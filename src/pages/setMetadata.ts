export const prerender = false;
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
	const body = await request.json();

	const resp = await fetch(
		`https://api.clerk.com/v1/users/${body.uid}/metadata`,
		{
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${import.meta.env.CLERK_SECRET_KEY}`,
			},
			body: JSON.stringify({
				public_metadata: {
					agent: body.agent,
					allegiance: body.allegiance,
				},
			}),
		}
	);

	return new Response(null, {
		status: 200,
	});
};
