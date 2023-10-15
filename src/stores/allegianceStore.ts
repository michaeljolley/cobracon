import { atom, onMount } from 'nanostores';
import { $user } from './userStore';

export const $allegiance = atom<'gijoe' | 'cobra' | null>(null);

export const updateAllegiance = async (allegiance: 'gijoe' | 'cobra') => {
	$allegiance.set(allegiance);
};

onMount(($allegiance) => {
	const user = $user.get();
	if (user && user.allegiance) {
		updateAllegiance(user.allegiance);
	}
});
