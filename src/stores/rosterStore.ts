import { atom } from 'nanostores';

export type User = {
	fullName: string;
	firstName: string;
	username: string;
	allegiance?: 'gijoe' | 'cobra';
	character?: string;
	id: string;
};

export const $user = atom<User | null>(null);

export const updateUser = (props: Object) => {
	const user = $user.get();
	$user.set({ ...user, ...(props as User) });
};

$user.subscribe((user) => {
	document
		.querySelector('html')!
		.setAttribute('data-theme', user?.allegiance || '');
});
