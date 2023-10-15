import { atom } from 'nanostores';

export const $allegiance = atom<'gijoe' | 'cobra' | null>(null);

export const updateAllegiance = async (allegiance: 'gijoe' | 'cobra') => {
	$allegiance.set(allegiance);
};

$allegiance.subscribe((allegiance) => {
	document.querySelector('html')!.setAttribute('data-theme', allegiance || '');
});
