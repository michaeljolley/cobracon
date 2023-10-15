import { atom } from 'nanostores';
import Clerk from '@clerk/clerk-js';
import { updateUser, type User } from './userStore';

const userMapper = (clerkUser: any): User => {
	return {
		firstName: clerkUser.firstName,
		fullName: clerkUser.fullName,
		username: clerkUser.username,
		allegiance: clerkUser.publicMetadata.allegiance,
		agent: clerkUser.publicMetadata.character,
		id: clerkUser.id,
		imageUrl: clerkUser.imageUrl,
	};
};

export const $clerk = atom<any>(null);

export const updateMetadata = async (user: User) => {};

const clerkFrontendApi = 'pk_test_ZnJlZS1lZnQtMzUuY2xlcmsuYWNjb3VudHMuZGV2JA';
const clerk = new Clerk(clerkFrontendApi);
await clerk.load();
$clerk.set(clerk);

const clerkListener = (event: any) => {
	if (event.user) {
		const user = userMapper(event.user);
		updateUser(user);
	}
};

$clerk.subscribe((clerk) => {
	if (!clerk) return;
	clerk.addListener(clerkListener);
});
