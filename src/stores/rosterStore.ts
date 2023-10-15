import { atom, computed, onMount, task } from 'nanostores';
import { createClient } from '@supabase/supabase-js';

export type Agent = {
	versionname: string;
	name: string;
	card_image_url: string;
	allegiance: 'GI Joe' | 'Cobra';
};

export const $roster = atom<Agent[]>([]);

export const $gijoes = computed($roster, (agents) =>
	agents.filter((i) => i.allegiance === 'GI Joe')
);
export const $cobras = computed($roster, (agents) =>
	agents.filter((i) => i.allegiance === 'Cobra')
);

onMount($roster, () => {
	task(async () => {
		const roster = await fetchRoster();
		$roster.set(roster as []);
	});
});

const fetchRoster = async (): Promise<Agent[]> => {
	const supabase = createClient(
		'https://wsoiqltmfzjoqxysfilv.supabase.co',
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indzb2lxbHRtZnpqb3F4eXNmaWx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcwNjkzODUsImV4cCI6MjAxMjY0NTM4NX0.WQS3Z_sTYHtvuuAapA12xAVhGo4qrTVFOskRuKWTGfU'
	);
	const { data } = await supabase.from('roster_v1').select();
	return data as Agent[];
};
