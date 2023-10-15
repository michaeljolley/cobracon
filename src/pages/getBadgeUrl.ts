import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
	const body = await request.json();

	const resp = await fetch(`https://api.clerk.com/v1/users/${body.uid}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${import.meta.env.CLERK_SECRET_KEY}`,
		},
	});

	if (!resp.ok) {
		return new Response(null, {
			status: 404,
		});
	}

	const clerkData = await resp.json();
	const user = userMapper(clerkData);

	return new Response(
		JSON.stringify({
			url: `https://res.cloudinary.com/dk3rdh3yo/image/upload/l_fetch:${btoa(
				user?.imageUrl as string
			)},w_175,h_450,c_fill/fl_layer_apply,g_north_west,x_35,y_113/w_1280/v1697076582/cobradex/${
				user?.agent || 'airborne'
			}/v1/card.png`,
			allegiance: user?.allegiance,
			name: user?.firstName,
		}),
		{
			status: 200,
		}
	);
};

const userMapper = (clerkUser: any) => {
	return {
		firstName: clerkUser.first_name,
		fullName: clerkUser.fullName,
		username: clerkUser.username,
		allegiance: clerkUser.public_metadata.allegiance,
		agent: clerkUser.public_metadata.agent,
		id: clerkUser.id,
		imageUrl: clerkUser.image_url,
	};
};
