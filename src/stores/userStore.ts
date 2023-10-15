import { atom } from 'nanostores';

export type User = {
	fullName: string;
	firstName: string;
	username: string;
	allegiance?: 'gijoe' | 'cobra';
	agent?: string;
	id: string;
	imageUrl: string;
};

export const $user = atom<User | null>(null);

export const updateUser = async (props: Object) => {
	const user = { ...$user.get(), ...(props as User) };
	$user.set(user);

	if (user && user.id) {
		await fetch('/setMetadata', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				uid: user?.id,
				agent: user.agent,
				allegiance: user.allegiance,
			}),
		});
	}
};
